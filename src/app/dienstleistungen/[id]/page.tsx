import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import servicesData from "@/data/services.json"

interface ServicePageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = servicesData.find((service) => service.id === params.id)

  if (!service) {
    return {
      title: "Service nicht gefunden",
    }
  }

  return {
    title: service.title,
    description: service.shortDescription,
  }
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    id: service.id,
  }))
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = servicesData.find((service) => service.id === params.id)

  if (!service) {
    notFound()
  }

  return (
    <>
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
          <p className="text-lg max-w-2xl mx-auto">{service.shortDescription}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6 text-primary">Über diesen Service</h2>
              <p className="text-lg mb-8">{service.description}</p>
              <Button asChild size="lg">
                <Link href="/kontakt">Jetzt anfragen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-primary text-center">Unsere Leistungen im Überblick</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm">
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6 text-primary">
            Bereit, Ihr Marketing auf das nächste Level zu bringen?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie uns noch heute für eine kostenlose Beratung und erfahren Sie, wie wir Ihnen mit{" "}
            {service.title.toLowerCase()} helfen können.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/kontakt">Kontakt aufnehmen</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/dienstleistungen">Alle Dienstleistungen</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
