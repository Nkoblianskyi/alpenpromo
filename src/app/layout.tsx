import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { CookieConsent } from "../components/cookie-consent"
import { ThemeProvider } from "../components/theme-provider"
import { PageTransition } from "../components/page-transition"

const inter = Inter({ subsets: ["latin", "latin-ext"] })

export const metadata: Metadata = {
  title: {
    default: "AlpenPromo | Offline Marketing Agentur in Salzburg",
    template: "%s | AlpenPromo",
  },
  description:
    "Professionelle Offline-Marketingagentur in Salzburg, Österreich. Spezialisiert auf Werbetafeln, Broschüren, Transportwerbung und Branding.",
  keywords: [
    "Marketing",
    "Offline Marketing",
    "Werbetafeln",
    "Broschüren",
    "Transportwerbung",
    "Branding",
    "Salzburg",
    "Österreich",
  ],
  authors: [{ name: "AlpenPromo" }],
  creator: "AlpenPromo",
  publisher: "AlpenPromo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://alpenpromo.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AlpenPromo | Offline Marketing Agentur in Salzburg",
    description:
      "Professionelle Offline-Marketingagentur in Salzburg, Österreich. Spezialisiert auf Werbetafeln, Broschüren, Transportwerbung und Branding.",
    url: "https://alpenpromo.com",
    siteName: "AlpenPromo",
    locale: "de_AT",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <Header />
          <main className="min-h-screen">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}
