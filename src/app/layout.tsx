import type { Metadata } from "next";
import "./globals.css";


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
    <html lang="pt-BR" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
