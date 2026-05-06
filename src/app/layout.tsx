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

import Script from 'next/script';
import { WhatsAppWidget } from "@/components/WhatsAppWidget";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${publicSans.variable} ${roboto.variable}`}>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MKZLPW9K');
        `}
      </Script>
      <body className={`${publicSans.className} antialiased`}>
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-MKZLPW9K"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
