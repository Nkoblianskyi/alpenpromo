"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "../lib/utils"
import { motion } from "framer-motion"
import { ButtonAnimation } from "./animations/button-animation"
import Image from "next/image"

const navigation = [
  { name: "Startseite", href: "/" },
  { name: "Über uns", href: "/uber-uns" },
  { name: "Dienstleistungen", href: "/dienstleistungen" },
  { name: "Projekte", href: "/projekte" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "Kontakt", href: "/kontakt" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-[#e0e0e0] shadow-sm sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-6" aria-label="Global">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex lg:flex-1"
        >
          <Link href="/" className="flex items-center gap-4">
            <Image src="/logo.png" alt="AlpenPromo Logo" width={40} height={40} className="h-10 w-auto" />
            <div className="h-10 w-auto text-primary font-bold text-2xl">AlpenPromo</div>
          </Link>
        </motion.div>
        <div className="flex lg:hidden">
          <ButtonAnimation>
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Menü öffnen</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </ButtonAnimation>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1, delayChildren: 0.2 }}
          className="hidden lg:flex lg:gap-x-6"
        >
          {navigation.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
            >
              <Link
                href={item.href}
                className={cn(
                  "text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-colors relative",
                  pathname === item.href && "text-primary font-bold",
                )}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 top-full h-0.5 w-full bg-primary"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </nav>

      {/* Mobile menu */}
      <div className={cn("lg:hidden", mobileMenuOpen ? "fixed inset-0 z-50" : "hidden")}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/20"
          aria-hidden="true"
        />
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", bounce: 0, duration: 0.4 }}
          className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">AlpenPromo</span>
              <div className="h-8 w-auto text-primary font-bold text-xl">AlpenPromo</div>
            </Link>
            <ButtonAnimation>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Menü schließen</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </ButtonAnimation>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <motion.div
                className="space-y-1 py-6"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.05,
                    },
                  },
                }}
              >
                {navigation.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.3 },
                      },
                    }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "-mx-3 block rounded-lg px-3 py-1.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50",
                        pathname === item.href && "bg-gray-50 text-primary",
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  )
}
