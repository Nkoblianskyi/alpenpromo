"use client"

import { useState, useEffect } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch by only rendering after component is mounted
  useEffect(() => {
    setMounted(true)
  }, [])

  // During SSR and initial client render, render children without theme context
  // to avoid hydration mismatch
  if (!mounted) {
    return <>{children}</>
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
