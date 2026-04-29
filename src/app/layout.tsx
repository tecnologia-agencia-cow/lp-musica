import type { Metadata } from "next";
import { Public_Sans, Roboto } from 'next/font/google';
import "./globals.css";

const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-public-sans',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: "Música para Eventos | Acervo 100% Livre de Direitos",
  description: "Música livre de direitos para operações comerciais com 20+ PDVs. Acervo 100% original, sem taxas mensais de direitos autorais.",
};

import { WhatsAppWidget } from "@/components/WhatsAppWidget";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${publicSans.variable} ${roboto.variable}`}>
      <body className={`${publicSans.className} antialiased`}>
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
