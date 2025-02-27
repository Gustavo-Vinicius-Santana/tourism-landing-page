import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/ui/templates/header/Header";
import Footer from "@/ui/templates/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Turismo em João Pessoa, Natal, Recife e Campina Grande | Guias e Passeios",
  description: "Descubra os melhores passeios e guias turísticos em João Pessoa, Natal, Recife e Campina Grande. Explore as belezas da Paraíba, Pernambuco e Rio Grande do Norte com experiências incríveis.",
  keywords: "turismo, João Pessoa, Natal, Recife, Campina Grande, guia turístico, passeios, praias, cultura, Nordeste",
  openGraph: {
    title: "Turismo no Nordeste - João Pessoa, Natal, Recife e Campina Grande",
    description: "Encontre os melhores guias turísticos e passeios em João Pessoa, Natal, Recife e Campina Grande. Experiências únicas no Nordeste brasileiro.",
    url: "https://www.seusite.com",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    site: "@seutwitter",
    title: "Turismo no Nordeste - João Pessoa, Natal, Recife e Campina Grande",
    description: "Descubra as melhores experiências de turismo no Nordeste, com guias e passeios exclusivos.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Seu Nome ou Empresa" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
      
    </html>
  );
}