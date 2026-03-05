import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { AosInit } from "../components/aos-init";

const openSans = Open_Sans({
  weight: ['300', '500', '700', '800'],
  subsets: ['latin'],
  variable: "--font-opensans"
})

export const metadata: Metadata = {
  title: "Home - Cuidado para o seu lar",
  description: "Profissionalismo excepcional para o cuidado dos seus móveis e estofados!",
  authors: [{ name: 'HOME HIGIENIZAÇÃO DE ESTOFADOS' }],
  keywords: ['limpeza', 'higienização', 'estofados', 'lavagem à seco', 'seco', 'profissional'],
  creator: 'Eduardo Alves',
  publisher: 'Robson  Villa',
  metadataBase: new URL('https://localhost.com.br'),
  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://localhost.com.br',
    siteName: 'HOME HIGIENIZAÇÃO DE ESTOFADOS',
    title: 'Higienização de estofados',
    description: 'A melhor higienização de estofados da região!',
    images: [
      {
        url: '/og-image.png', // Caminho na pasta public
        width: 1200,
        height: 630,
        alt: 'Imagem para limpeza de estofados',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Higienização de estofados',
    description: 'A melhor limpeza e higienização de estofados da região!',
    creator: '@usuárioCadastrado',
    images: ['/twitter-image.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      "max-snippet": -1,
    }
  },

  icons: {
    icon: '/fav-icon.ico',
    shortcut: '/shortcut-icon.ico',
    apple: '/apple-touch-icon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body
        className={`${openSans.variable} antialiased`}
        suppressHydrationWarning
      >
        <AosInit />
        {children}
      </body>
    </html>
  );
}