import type { Metadata } from "next";
import { Roboto, Roboto_Mono, Instrument_Serif } from "next/font/google";

import "@/styles/globals.css";
import "@/styles/syntax.css";

import { Providers } from "@/components/providers/providers";
import { LayoutShell } from "@/components/ui/layout/layout-shell";

const roboto = Roboto({ variable: "--font-roboto", subsets: ["latin"] });
const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});
const instrumentSerif = Instrument_Serif({
  weight: "400",
  variable: "--font-instrument-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Whoa IDE",
  description: "Éditeur Neovim configuré pour le flow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${robotoMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        <Providers>
          <LayoutShell>{children}</LayoutShell>
        </Providers>
      </body>
    </html>
  );
}
