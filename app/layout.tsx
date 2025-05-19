import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";

import "./globals.css";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { I18nProvider } from "@/components/i18n-provider";
import { defaultMetadata } from "@/lib/metadata";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <I18nProvider>
        <Header />
        <body
          className={`${roboto.variable} ${robotoMono.variable} antialiased`}
        >
          {children}
        </body>
        <Footer />
      </I18nProvider>
    </html>
  );
}
