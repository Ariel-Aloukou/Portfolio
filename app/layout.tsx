import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SmoothScroll } from "@/app/components/layout/SmoothScroll";
import { Navbar } from "@/app/components/layout/Navbar";
import { MotionProvider } from "@/app/components/layout/MotionProvider";
import { ThemeProvider } from "@/app/components/layout/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ariel Aloukou — Réseaux, cybersécurité & développement",
    template: "%s | Ariel Aloukou",
  },
  description:
    "Portfolio d'Ariel Jean Levi ALOUKOU — étudiant en Licence 3 réseaux et télécommunications à l'IIT (Grand-Bassam), Abidjan, Côte d'Ivoire. Orienté cybersécurité et infrastructures, avec des compétences en programmation. Parcours, compétences et projets.",
  keywords: [
    "Ariel Aloukou",
    "portfolio",
    "réseaux",
    "cybersécurité",
    "infrastructures",
    "télécommunications",
    "développement logiciel",
    "Python",
    "Django",
    "bases de données",
    "IIT",
    "Abidjan",
    "Côte d'Ivoire",
  ],
  authors: [{ name: "Ariel Aloukou" }],
  creator: "Ariel Aloukou",
  publisher: "Ariel Aloukou",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Ariel Aloukou — Portfolio",
    description:
      "Étudiant en Licence 3 réseaux et télécommunications à l'IIT (Abidjan), orienté cybersécurité et infrastructures. Parcours, compétences et projets.",
    locale: "fr_CI",
    type: "website",
    siteName: "Ariel Aloukou",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ariel Aloukou — Portfolio",
    description:
      "Réseaux, cybersécurité, infrastructures et développement — parcours, compétences et projets. Abidjan, Côte d'Ivoire.",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Applique le thème enregistré avant la première peinture (aucun flash). */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme")==="light"?"light":"dark";var r=document.documentElement;r.classList.remove("light","dark");r.classList.add(t);r.style.colorScheme=t;}catch(e){document.documentElement.classList.add("dark");}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden">
        <ThemeProvider>
          <MotionProvider>
            <SmoothScroll>
              <Navbar />
              <main className="flex-1">
                {children}
              </main>
            </SmoothScroll>
            <Toaster />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
