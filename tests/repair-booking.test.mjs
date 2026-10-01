import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import vm from 'node:vm';
import ts from 'typescript';
const require = createRequire(import.meta.url);

const source = ts.transpileModule(readFileSync('app/api/repair-booking/route.ts', 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
const valid = { name: 'Тест', phone: '+7 (999) 123-45-67', car: 'Ford Transit 2015', problem: 'Стук в подвеске', consent: 'yes' };

function setup(fetcher = async () => Response.json({ ok: true }), env = { TELEGRAM_BOT_TOKEN: 'test-token', TELEGRAM_CHAT_ID: 'test-chat' }, logs = []) {
  const context = { exports: {}, require, Request, Response, URL, Buffer, AbortSignal, Error, process: { env }, fetch: fetcher, console: { error: (...args) => logs.push(args) } };
  vm.runInNewContext(source, context);
  return (body = valid, origin = 'http://localhost:3000', host = 'localhost:3000') => context.exports.POST(new Request('http://localhost:3000/api/repair-booking', {
    method: 'POST', headers: { 'content-type': 'application/json', origin, host }, body: JSON.stringify(body),
  }));
}

test('valid repair request goes to the existing Telegram destination with urgent label; repeats are deduplicated', async () => {
  const calls = [];
  const post = setup(async (url, options) => { calls.push({ url, body: JSON.parse(options.body) }); return Response.json({ ok: true }); });
  assert.equal((await post()).status, 200);
  assert.equal((await post()).status, 200);
  assert.equal(calls.length, 1);
  assert.equal(calls[0].url, 'https://api.telegram.org/bottest-token/sendMessage');
  assert.equal(calls[0].body.chat_id, 'test-chat');
  assert.match(calls[0].body.text, /РЕМОНТ АВТО — СРОЧНО ПЕРЕЗВОНИТЬ/);
  for (const field of ['name', 'phone', 'car', 'problem']) assert.ok(calls[0].body.text.includes(valid[field]));
  assert.equal(calls[0].body.parse_mode, undefined);
});

test('delivery diagnostics preserve HTTP status but redact credentials, URLs and customer data', async () => {
  const logs = [];
  const post = setup(async () => Response.json({ ok: false, description: 'Bad test-token test-chat https://api.telegram.org/bottest-token/sendMessage\nrejected' }, { status: 403 }), undefined, logs);
  assert.equal((await post()).status, 502);
  assert.equal(logs[0][1].status, 403);
  const output = JSON.stringify(logs);
  for (const secret of ['test-token', 'test-chat', 'api.telegram.org', valid.name, valid.phone]) assert.ok(!output.includes(secret));
  const networkLogs = [];
  const timeout = new Error('secret URL test-token'); timeout.name = 'TimeoutError';
  assert.equal((await setup(async () => { throw timeout; }, undefined, networkLogs)()).status, 502);
  assert.equal(networkLogs[0][1].kind, 'TimeoutError');
  assert.ok(!JSON.stringify(networkLogs).includes('test-token'));
});

test('browser origin matches the public Host even when Next.js uses localhost internally', async () => {
  let calls = 0;
  const post = setup(async () => { calls++; return Response.json({ ok: true }); });
  assert.equal((await post(valid, 'http://127.0.0.1:3000', '127.0.0.1:3000')).status, 200);
  assert.equal((await post(valid, 'http://attacker.example', '127.0.0.1:3000')).status, 403);
  assert.equal((await post(valid, 'http://127.0.0.1:4000', '127.0.0.1:3000')).status, 403);
  assert.equal(calls, 1);
});

test('invalid fields, missing consent, bots and cross-origin submissions never reach Telegram', async () => {
  let calls = 0;
  const post = setup(async () => { calls++; return Response.json({ ok: true }); });
  for (const change of [{ name: ' ' }, { phone: 'abc123' }, { phone: '123' }, { car: '' }, { problem: '' }, { problem: 'x'.repeat(1501) }, { consent: '' }, { website: 'spam' }]) {
    assert.equal((await post({ ...valid, ...change })).status, 400);
  }
  assert.equal((await post(valid, 'https://untrusted.example')).status, 403);
  assert.equal((await post({ ...valid, problem: 'x'.repeat(17000) })).status, 413);
  assert.equal(calls, 0);
});

test('Telegram rejection and network errors do not produce success; retry can succeed', async () => {
  let calls = 0;
  const post = setup(async () => {
    calls++;
    if (calls === 1) return Response.json({ ok: false });
    if (calls === 2) throw new Error('network');
    return Response.json({ ok: true });
  });
  assert.equal((await post()).status, 502);
  assert.equal((await post()).status, 502);
  assert.equal((await post()).status, 200);
});

test('missing configuration returns unavailable and rapid requests are limited', async () => {
  assert.equal((await setup(undefined, {})()).status, 503);
  const post = setup();
  for (let i = 0; i < 3; i++) assert.equal((await post({ ...valid, problem: `Problem ${i}` })).status, 200);
  assert.equal((await post({ ...valid, problem: 'Fourth request' })).status, 429);
});

test('concurrent identical submissions produce only one Telegram message', async () => {
  let complete;
  const post = setup(() => new Promise(resolve => { complete = resolve; }));
  const first = post();
  for (let i = 0; i < 20 && !complete; i++) await new Promise(resolve => setImmediate(resolve));
  assert.equal(typeof complete, 'function');
  assert.equal((await post()).status, 409);
  complete(Response.json({ ok: true }));
  assert.equal((await first).status, 200);
});

test('explicit public URL supports HTTPS termination and rejects other origins', async () => {
  let calls = 0;
  const post = setup(async () => { calls++; return Response.json({ ok: true }); }, {
    TELEGRAM_BOT_TOKEN: 'test-token', TELEGRAM_CHAT_ID: 'test-chat', SITE_URL: 'https://migration-test.example',
  });
  assert.equal((await post(valid, 'https://migration-test.example', 'localhost:3000')).status, 200);
  assert.equal((await post(valid, 'https://attacker.example', 'attacker.example')).status, 403);
  assert.equal((await post(valid, 'http://migration-test.example', 'migration-test.example')).status, 403);
  assert.equal(calls, 1);
  assert.equal((await setup(undefined, { SITE_URL: 'invalid' })()).status, 503);
});
