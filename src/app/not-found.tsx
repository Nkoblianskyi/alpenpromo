import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Seite nicht gefunden</h2>
        <p className="text-muted-foreground mb-8">
          Die von Ihnen gesuchte Seite existiert nicht oder wurde verschoben.
        </p>
        <Button asChild size="lg" className="border-2 border-primary">
          <Link href="/">Zurück zur Startseite</Link>
        </Button>
      </div>
    </div>
  )
}
