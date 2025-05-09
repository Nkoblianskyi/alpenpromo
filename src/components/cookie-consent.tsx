"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Switch } from "./ui/switch"
import { Label } from "./ui/label"

export function CookieConsent() {
  const [open, setOpen] = useState(false)
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    // Check if user has already set cookie preferences
    const hasConsent = localStorage.getItem("cookieConsent")
    if (!hasConsent) {
      setOpen(true)
    }
  }, [])

  const handleAcceptAll = () => {
    setCookiePreferences({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    })
    saveCookiePreferences({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    })
    setOpen(false)
  }

  const handleAcceptSelected = () => {
    saveCookiePreferences(cookiePreferences)
    setOpen(false)
  }

  const saveCookiePreferences = (preferences: typeof cookiePreferences) => {
    localStorage.setItem("cookieConsent", "true")
    localStorage.setItem("cookiePreferences", JSON.stringify(preferences))

    // Here you would typically set actual cookies based on preferences
    // This is just a placeholder for demonstration
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Cookie-Einstellungen</DialogTitle>
          <DialogDescription>
            Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="einfach">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="einfach">Einfach</TabsTrigger>
            <TabsTrigger value="erweitert">Erweitert</TabsTrigger>
          </TabsList>

          <TabsContent value="einfach" className="space-y-4 py-4">
            <p className="text-sm text-muted-foreground">
              Wir verwenden notwendige Cookies, um die Grundfunktionen der Website zu gewährleisten. Mit Ihrer
              Zustimmung verwenden wir zusätzliche Cookies, um Ihre Erfahrung zu verbessern.
            </p>
          </TabsContent>

          <TabsContent value="erweitert" className="space-y-4 py-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="necessary">Notwendige Cookies</Label>
                <p className="text-xs text-muted-foreground">
                  Diese Cookies sind für das Funktionieren der Website unerlässlich.
                </p>
              </div>
              <Switch id="necessary" checked={cookiePreferences.necessary} disabled />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="functional">Funktionale Cookies</Label>
                <p className="text-xs text-muted-foreground">
                  Diese Cookies ermöglichen erweiterte Funktionen und Personalisierung.
                </p>
              </div>
              <Switch
                id="functional"
                checked={cookiePreferences.functional}
                onCheckedChange={(checked) => setCookiePreferences({ ...cookiePreferences, functional: checked })}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="analytics">Analytische Cookies</Label>
                <p className="text-xs text-muted-foreground">
                  Diese Cookies helfen uns, die Nutzung der Website zu verstehen und zu verbessern.
                </p>
              </div>
              <Switch
                id="analytics"
                checked={cookiePreferences.analytics}
                onCheckedChange={(checked) => setCookiePreferences({ ...cookiePreferences, analytics: checked })}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="marketing">Marketing Cookies</Label>
                <p className="text-xs text-muted-foreground">
                  Diese Cookies werden verwendet, um Werbung relevanter für Sie zu gestalten.
                </p>
              </div>
              <Switch
                id="marketing"
                checked={cookiePreferences.marketing}
                onCheckedChange={(checked) => setCookiePreferences({ ...cookiePreferences, marketing: checked })}
              />
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-xs text-muted-foreground">
          Weitere Informationen finden Sie in unserer{" "}
          <Link href="/datenschutz" className="text-primary underline">
            Datenschutzerklärung
          </Link>{" "}
          und{" "}
          <Link href="/cookies" className="text-primary underline">
            Cookie-Richtlinie
          </Link>
          .
        </div>

        <DialogFooter className="flex flex-col sm:flex-row gap-2">
          <Button variant="outline" onClick={handleAcceptSelected} className="border-2 border-input">
            Auswahl speichern
          </Button>
          <Button onClick={handleAcceptAll} className="border-2 border-primary">
            Alle akzeptieren
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
