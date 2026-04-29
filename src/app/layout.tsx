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
  description: "A solução definitiva para sonorização comercial sem riscos jurídicos, taxas abusivas ou complicações com o ECAD.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${publicSans.variable} ${roboto.variable}`}>
      <body className={`${publicSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
