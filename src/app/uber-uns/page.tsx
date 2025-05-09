import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Award, Users, Clock, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Über uns",
  description: "Erfahren Sie mehr über AlpenPromo, Ihre Offline-Marketingagentur in Salzburg.",
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Über uns</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Lernen Sie AlpenPromo kennen - Ihre Experten für Offline-Marketing in Salzburg.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Unsere Geschichte</h2>
              <p className="text-lg mb-6">
                AlpenPromo wurde mit einer klaren Vision gegründet: Offline-Marketing mit maximaler Wirkung für
                Unternehmen in Österreich anzubieten. Seit unserer Gründung haben wir uns zu einer führenden
                Marketingagentur in Salzburg entwickelt, die für Qualität, Kreativität und Kundenzufriedenheit steht.
              </p>
              <p className="text-lg mb-6">
                Unser Team besteht aus erfahrenen Marketingexperten, Designern und Projektmanagern, die mit Leidenschaft
                und Know-how an jedem Projekt arbeiten. Wir verstehen die Herausforderungen des modernen Marketings und
                bieten maßgeschneiderte Lösungen, die Ihre Marke stärken und Ihre Ziele erreichen.
              </p>
              <p className="text-lg">
                Bei AlpenPromo legen wir großen Wert auf langfristige Kundenbeziehungen, basierend auf Vertrauen,
                Transparenz und messbaren Ergebnissen. Wir sind stolz darauf, viele unserer Kunden seit Jahren begleiten
                zu dürfen und gemeinsam erfolgreiche Marketingstrategien zu entwickeln.
              </p>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image src="/marketing-agency-team.png" alt="Das Team von AlpenPromo" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-primary text-center">Unsere Werte</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-10 w-10 text-secondary" />,
                title: "Qualität",
                description:
                  "Wir setzen auf höchste Qualitätsstandards bei allen unseren Produkten und Dienstleistungen.",
              },
              {
                icon: <Users className="h-10 w-10 text-secondary" />,
                title: "Kundenfokus",
                description:
                  "Unsere Kunden stehen im Mittelpunkt unseres Handelns. Wir hören zu, verstehen und liefern maßgeschneiderte Lösungen.",
              },
              {
                icon: <Clock className="h-10 w-10 text-secondary" />,
                title: "Zuverlässigkeit",
                description:
                  "Wir halten, was wir versprechen - termingerecht, budgetgerecht und in der vereinbarten Qualität.",
              },
              {
                icon: <CheckCircle className="h-10 w-10 text-secondary" />,
                title: "Nachhaltigkeit",
                description:
                  "Wir achten auf umweltfreundliche Materialien und Produktionsprozesse, um unseren ökologischen Fußabdruck zu minimieren.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-primary">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/salzburg-city-view.png" alt="Salzburg, Österreich" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Unser Standort</h2>
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg font-semibold">AlpenPromo</p>
                  <p>Getreidegasse 15</p>
                  <p>5020 Salzburg, Austria</p>
                </div>
              </div>
              <p className="text-lg mb-6">
                Unser Büro befindet sich im Herzen von Salzburg, in der historischen Getreidegasse. Von hier aus
                betreuen wir Kunden in ganz Österreich und den angrenzenden Ländern.
              </p>
              <p className="text-lg mb-8">
                Wir laden Sie herzlich ein, uns zu besuchen und in einem persönlichen Gespräch mehr über unsere
                Dienstleistungen zu erfahren. Vereinbaren Sie einfach einen Termin - wir freuen uns auf Sie!
              </p>
              <Button asChild size="lg">
                <Link href="/kontakt">Termin vereinbaren</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Bereit, mit uns zusammenzuarbeiten?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie uns noch heute und erfahren Sie, wie wir Ihr Marketing auf das nächste Level bringen
            können.
          </p>
          <Button asChild size="lg" className="bg-white text-secondary hover:bg-white/90">
            <Link href="/kontakt">Jetzt Kontakt aufnehmen</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
