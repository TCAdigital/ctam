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
  description: "Missão CTAM — Organização missionária interdenominacional fundada em 2013.",
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
