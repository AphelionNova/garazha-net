import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SITE_ORIGIN, SITE_TITLE, SITE_DESCRIPTION, sharedOpenGraph } from "./site-metadata";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["cyrillic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: { ...sharedOpenGraph, title: SITE_TITLE, description: SITE_DESCRIPTION, url: "/" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <Script
          id="yclients-booking-widget"
          src="https://w1118892.yclients.ru/widgetJS"
          strategy="afterInteractive"
          charSet="UTF-8"
        />
      </body>
    </html>
  );
}
