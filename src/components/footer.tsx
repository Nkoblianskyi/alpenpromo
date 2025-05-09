"use client"

import Link from "next/link"
import { FadeIn } from "./animations/fade-in"
import { StaggerContainer } from "./animations/stagger-container"
import { StaggerItem } from "./animations/stagger-item"

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <FadeIn direction="up">
          <div className="mt-8 md:mt-0">
            <div className="flex items-center gap-4 mb-2">
              <img src="/logo.png" alt="Logo" className="w-auto" />
              <h3 className="text-xl font-semibold">AlpenPromo</h3>
            </div>
            <p className="text-sm">Getreidegasse 15</p>
            <p className="text-sm">5020 Salzburg, Austria</p>
            <p className="text-sm mt-2">+43 662 153 429</p>
            <p className="text-sm">info@alpenpromo.com</p>
          </div>
        </FadeIn>

        <StaggerContainer delay={0.2}>
          <div className="mt-8 md:mt-0">
            <StaggerItem>
              <h3 className="text-lg font-semibold mb-4">Dienstleistungen</h3>
            </StaggerItem>
            <ul className="space-y-2">
              <StaggerItem>
                <li>
                  <Link href="/dienstleistungen/werbetafeln" className="text-sm hover:text-secondary transition-colors">
                    Werbetafeln
                  </Link>
                </li>
              </StaggerItem>
              <StaggerItem>
                <li>
                  <Link href="/dienstleistungen/broschuren" className="text-sm hover:text-secondary transition-colors">
                    Broschüren
                  </Link>
                </li>
              </StaggerItem>
              <StaggerItem>
                <li>
                  <Link
                    href="/dienstleistungen/transportwerbung"
                    className="text-sm hover:text-secondary transition-colors"
                  >
                    Transportwerbung
                  </Link>
                </li>
              </StaggerItem>
              <StaggerItem>
                <li>
                  <Link href="/dienstleistungen/branding" className="text-sm hover:text-secondary transition-colors">
                    Branding
                  </Link>
                </li>
              </StaggerItem>
            </ul>
          </div>
        </StaggerContainer>

        <StaggerContainer delay={0.4}>
          <div className="mt-8 md:mt-0">
            <StaggerItem>
              <h3 className="text-lg font-semibold mb-4">Rechtliches</h3>
            </StaggerItem>
            <ul className="space-y-2">
              <StaggerItem>
                <li>
                  <Link href="/datenschutz" className="text-sm hover:text-secondary transition-colors">
                    Datenschutz
                  </Link>
                </li>
              </StaggerItem>
              <StaggerItem>
                <li>
                  <Link href="/cookies" className="text-sm hover:text-secondary transition-colors">
                    Cookie-Richtlinie
                  </Link>
                </li>
              </StaggerItem>
            </ul>
          </div>
        </StaggerContainer>
      </div>
      <FadeIn direction="up" delay={0.6}>
        <div className="mx-auto max-w-7xl px-6 py-4 border-t border-white/10">
          <p className="text-center text-xs">&copy; {new Date().getFullYear()} AlpenPromo. Alle Rechte vorbehalten.</p>
        </div>
      </FadeIn>
    </footer>
  )
}
