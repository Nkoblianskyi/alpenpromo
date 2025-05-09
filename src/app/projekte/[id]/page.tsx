import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Quote, ArrowRight } from "lucide-react"
import projectsData from "@/data/projects.json"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projectsData.find((project) => project.id === params.id)

  if (!project) {
    return {
      title: "Projekt nicht gefunden",
    }
  }

  return {
    title: project.title,
    description: project.description.substring(0, 160),
  }
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }))
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectsData.find((project) => project.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <>
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/projekte" className="inline-flex items-center text-white/80 hover:text-white mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Zurück zu allen Projekten
          </Link>
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-4 items-center">
            <p className="bg-white/10 px-3 py-1 rounded-full text-sm">{project.category}</p>
            <p className="text-white/80">Kunde: {project.client}</p>
            <p className="text-white/80">Jahr: {project.year}</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="relative h-[500px] rounded-lg overflow-hidden mb-12">
            <Image
              src={project.images[0] || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <h2>Projektbeschreibung</h2>
            <p>{project.description}</p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div>
                <h3>Die Herausforderung</h3>
                <p>{project.challenge}</p>
              </div>
              <div>
                <h3>Unsere Lösung</h3>
                <p>{project.solution}</p>
              </div>
            </div>

            <h3>Ergebnisse</h3>
            <p>{project.results}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 my-12">
            {project.images.slice(1).map((image, index) => (
              <div key={index} className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} - Bild ${index + 2}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {project.testimonial && (
            <Card className="my-12 bg-gray-50 border-none">
              <CardContent className="p-8">
                <Quote className="h-10 w-10 text-secondary/30 mb-4" />
                <p className="text-lg italic mb-6">{project.testimonial.text}</p>
                <p className="font-semibold">{project.testimonial.author}</p>
              </CardContent>
            </Card>
          )}

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-6 text-primary">Möchten Sie ein ähnliches Projekt umsetzen?</h3>
            <Button asChild size="lg">
              <Link href="/kontakt">Kontakt aufnehmen</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-primary text-center">Weitere Projekte</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projectsData
              .filter((p) => p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject, index) => (
                <Card key={index} className="overflow-hidden border-none shadow-lg group">
                  <div className="relative h-48">
                    <Image
                      src={relatedProject.thumbnail || "/placeholder.svg"}
                      alt={relatedProject.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm text-secondary font-medium mb-1">{relatedProject.category}</p>
                    <h3 className="text-lg font-bold mb-2 text-primary">{relatedProject.title}</h3>
                    <Link
                      href={`/projekte/${relatedProject.id}`}
                      className="text-secondary font-medium flex items-center gap-1 hover:gap-2 transition-all text-sm"
                    >
                      Projekt ansehen <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
