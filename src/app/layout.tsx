import type { Metadata } from "next";
import { Bree_Serif, Poppins } from "next/font/google";
import "./globals.css";

const breeSerif = Bree_Serif({
  variable: "--font-bree-serif",
  subsets: ["latin"],
  weight: "400",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Missão CTAM — Levando as Boas Novas Onde Poucos Chegam",
  description: "Organização missionária interdenominacional focada na formação, mobilização e envio de obreiros para os Povos Não Alcançados. Conheça nosso treinamento online.",
  keywords: ["missão", "ctam", "missionário", "evangelho", "povos não alcançados", "treinamento missionário", "capacitação online"],
  authors: [{ name: "Missão CTAM" }],
  openGraph: {
    title: "Missão CTAM — Levando as Boas Novas Onde Poucos Chegam",
    description: "Formação e mobilização para o alcance dos Povos Não Alcançados. Faça parte desta missão.",
    url: "https://www.missaoctam.org",
    siteName: "Missão CTAM",
    images: [
      {
        url: "/og-sharing.jpg",
        width: 1200,
        height: 630,
        alt: "Missão CTAM - Alcançando o Inalcançável",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Missão CTAM — Levando as Boas Novas Onde Poucos Chegam",
    description: "Formação e mobilização para o alcance dos Povos Não Alcançados.",
    images: ["/og-sharing.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body
        className={`${breeSerif.variable} ${poppins.variable} antialiased text-dark bg-background`}
      >
        {children}
      </body>
    </html>
  );
}
