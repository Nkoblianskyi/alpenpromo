import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import projectsData from "@/data/projects.json"

export const metadata: Metadata = {
  title: "Projekte",
  description: "Entdecken Sie unsere erfolgreichen Marketingprojekte und Kampagnen.",
}

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Unsere Projekte</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Entdecken Sie einige unserer erfolgreichsten Marketingkampagnen und Projekte.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg group">
                <div className="relative h-64">
                  <Image
                    src={project.thumbnail || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm text-secondary font-medium">{project.category}</p>
                    <p className="text-sm text-muted-foreground">{project.year}</p>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-primary">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{project.description.substring(0, 120)}...</p>
                  <Link
                    href={`/projekte/${project.id}`}
                    className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-white text-secondary border-2 border-secondary hover:bg-secondary hover:text-white transition-colors"
                  >
                    Projekt ansehen <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">
            Lassen Sie uns Ihr nächstes Projekt gemeinsam umsetzen
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Haben Sie ein Projekt im Sinn? Wir helfen Ihnen gerne dabei, Ihre Vision in die Realität umzusetzen.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-black hover:bg-primary/90 border-2 border-primary"
          >
            Projekt besprechen
          </Link>
        </div>
      </section>
    </>
  )
}
