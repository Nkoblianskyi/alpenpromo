import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import servicesData from "@/data/services.json"

export const metadata: Metadata = {
  title: "Dienstleistungen",
  description:
    "Entdecken Sie unsere umfassenden Offline-Marketing-Dienstleistungen: Werbetafeln, Broschüren, Transportwerbung und Branding.",
}

export default function ServicesPage() {
  return (
    <>
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Unsere Dienstleistungen</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Wir bieten maßgeschneiderte Offline-Marketing-Lösungen für Ihr Unternehmen.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {servicesData.map((service, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg">
                <div className="relative h-64">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <h2 className="text-2xl font-bold text-primary">{service.title}</h2>
                  </div>
                  <p className="text-muted-foreground mb-6">{service.shortDescription}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/dienstleistungen/${service.id}`}
                    className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-white text-secondary border-2 border-secondary hover:bg-secondary hover:text-white transition-colors"
                  >
                    Mehr erfahren <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">Maßgeschneiderte Lösungen für Ihr Unternehmen</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Wir verstehen, dass jedes Unternehmen einzigartig ist. Deshalb bieten wir individuelle Beratung und
            maßgeschneiderte Marketinglösungen, die perfekt auf Ihre Bedürfnisse abgestimmt sind.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-white hover:bg-primary/90 border-2 border-primary"
          >
            Kontaktieren Sie uns für ein individuelles Angebot
          </Link>
        </div>
      </section>
    </>
  )
}
