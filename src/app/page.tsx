import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Award, Clock, Users, Target, Calendar } from "lucide-react"
import blogPostsData from "@/data/blog-posts.json"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { ButtonAnimation } from "@/components/animations/button-animation"

export default function Home() {
  // Get the 3 most recent blog posts
  const recentPosts = [...blogPostsData]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

  // Format date to German format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("de-AT", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(date)
  }

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative bg-primary text-white py-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: "url('/alpine-marketing.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Content */}
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center relative z-10">
          <div>
            <FadeIn direction="left" delay={0.2}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Offline Marketing mit Wirkung</h1>
            </FadeIn>
            <FadeIn direction="left" delay={0.4}>
              <p className="text-lg mb-8">
                Wir sind Ihre Experten für Werbetafeln, Broschüren, Transportwerbung und Branding in Salzburg und ganz
                Österreich.
              </p>
            </FadeIn>
            <FadeIn direction="left" delay={0.6}>
              <div className="flex flex-wrap gap-4">
                <ButtonAnimation>
                  <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 border-2 border-secondary">
                    <Link href="/dienstleistungen">Unsere Dienstleistungen</Link>
                  </Button>
                </ButtonAnimation>
                <ButtonAnimation>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-primary"
                  >
                    <Link href="/kontakt" className="text-black">Kontakt aufnehmen</Link>
                  </Button>
                </ButtonAnimation>
              </div>
            </FadeIn>
          </div>
          <FadeIn direction="right" delay={0.4}>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/d7d76a4bd5c67a898bea3204054442de.jpg"
                alt="AlpenPromo Marketing Materialien"
                fill
                className="object-cover"
                priority
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Our Advantages Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Unsere Vorteile</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Warum sich Kunden für AlpenPromo entscheiden und was uns von anderen Marketingagenturen unterscheidet.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Award className="h-10 w-10 text-secondary" />,
                  title: "Höchste Qualität",
                  description:
                    "Wir verwenden nur hochwertige Materialien und modernste Drucktechnologien für optimale Ergebnisse.",
                },
                {
                  icon: <Clock className="h-10 w-10 text-secondary" />,
                  title: "Schnelle Lieferung",
                  description:
                    "Termingerechte Produktion und Lieferung - auch bei engen Zeitplänen und dringenden Projekten.",
                },
                {
                  icon: <Users className="h-10 w-10 text-secondary" />,
                  title: "Persönliche Betreuung",
                  description:
                    "Ein fester Ansprechpartner begleitet Sie von der ersten Idee bis zur finalen Umsetzung.",
                },
                {
                  icon: <Target className="h-10 w-10 text-secondary" />,
                  title: "Maßgeschneiderte Lösungen",
                  description:
                    "Individuelle Konzepte, die perfekt auf Ihre Zielgruppe und Marketingziele abgestimmt sind.",
                },
              ].map((advantage, index) => (
                <StaggerItem key={index}>
                  <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                    <div className="flex justify-center mb-4">{advantage.icon}</div>
                    <h3 className="text-xl font-bold mb-3 text-primary">{advantage.title}</h3>
                    <p className="text-gray-700">{advantage.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Unsere Dienstleistungen</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Wir bieten maßgeschneiderte Offline-Marketing-Lösungen für Ihr Unternehmen.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Werbetafeln",
                  description: "Auffällige Billboards und Plakatwände an strategischen Standorten.",
                  icon: "/938208d8e4f5c3e57b943d48d30b80eb.jpg",
                  link: "/dienstleistungen/werbetafeln",
                },
                {
                  title: "Broschüren",
                  description: "Hochwertige Printmaterialien, die Ihre Marke perfekt repräsentieren.",
                  icon: "/6799ef34f0ae9ef756ffeac732771202.jpg",
                  link: "/dienstleistungen/broschuren",
                },
                {
                  title: "Transportwerbung",
                  description: "Mobile Werbung auf Bussen, Bahnen und anderen Verkehrsmitteln.",
                  icon: "/da37d3cbdcf050ecd9becabf65cbf4c1.jpg",
                  link: "/dienstleistungen/transportwerbung",
                },
                {
                  title: "Branding",
                  description: "Umfassende Markenlösungen für Ihr Unternehmen.",
                  icon: "/a39cc5977f35e6307f146fd9231aaeee.jpg",
                  link: "/dienstleistungen/branding",
                },
              ].map((service, index) => (
                <StaggerItem key={index}>
                  <Card className="border-none shadow-lg hover:shadow-xl transition-shadow h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="mb-4 h-20 w-20 relative">
                        <Image
                          src={service.icon || "/placeholder.svg"}
                          alt={service.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-primary">{service.title}</h3>
                      <p className="text-gray-700 mb-4 flex-grow">{service.description}</p>
                      <ButtonAnimation>
                        <Link
                          href={service.link}
                          className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-white text-secondary border-2 border-secondary hover:bg-secondary hover:text-white transition-colors"
                        >
                          Mehr erfahren <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                      </ButtonAnimation>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Blog Articles Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Aktuelle Artikel</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Lesen Sie unsere neuesten Beiträge zu Marketing, Werbung und Branding.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer>
            <div className="grid md:grid-cols-3 gap-8">
              {recentPosts.map((post, index) => (
                <StaggerItem key={index}>
                  <Card className="overflow-hidden border-none shadow-lg group h-full">
                    <div className="relative h-48">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col h-[calc(100%-12rem)]">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-4 w-4 text-secondary" />
                        <p className="text-sm text-gray-600">{formatDate(post.date)}</p>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-primary line-clamp-2">{post.title}</h3>
                      <p className="text-gray-700 mb-4 line-clamp-2 flex-grow">{post.excerpt}</p>
                      <ButtonAnimation>
                        <Link
                          href={`/blog/${post.id}`}
                          className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-white text-secondary border-2 border-secondary hover:bg-secondary hover:text-white transition-colors"
                        >
                          Weiterlesen <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                      </ButtonAnimation>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          <FadeIn delay={0.6}>
            <div className="text-center mt-12">
              <ButtonAnimation>
                <Button asChild variant="outline" size="lg" className="border-2 border-primary">
                  <Link href="/blog">Alle Artikel ansehen</Link>
                </Button>
              </ButtonAnimation>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image src="/5282719e56c0415b25c60986c99810ce.jpg" alt="Über AlpenPromo" fill className="object-cover" />
            </div>
          </FadeIn>
          <div>
            <FadeIn direction="right" delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Über AlpenPromo</h2>
              <p className="text-lg text-gray-700 mb-6">
                AlpenPromo ist eine führende Offline-Marketingagentur mit Sitz in Salzburg. Seit unserer Gründung haben
                wir uns auf die Entwicklung effektiver Marketingstrategien für Unternehmen jeder Größe spezialisiert.
              </p>
            </FadeIn>
            <FadeIn direction="right" delay={0.4}>
              <ul className="space-y-3 mb-8">
                {[
                  "Über 10 Jahre Erfahrung in der Branche",
                  "Maßgeschneiderte Lösungen für jeden Kunden",
                  "Höchste Qualitätsstandards bei allen Produkten",
                  "Persönliche Betreuung durch erfahrene Experten",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn direction="right" delay={0.6}>
              <ButtonAnimation>
                <Button asChild size="lg" className="border-2 border-primary">
                  <Link href="/uber-uns">Mehr über uns</Link>
                </Button>
              </ButtonAnimation>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Unsere Projekte</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Entdecken Sie einige unserer erfolgreichsten Marketingkampagnen.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Stadtmarketing Kampagne",
                  category: "Werbetafeln",
                  image: "/0e69f56d17eb87b43bde89d2c519e972.jpg",
                  link: "/projekte/stadtmarketing-kampagne",
                },
                {
                  title: "Produktkatalog Design",
                  category: "Broschüren",
                  image: "/product-catalog-brochure.png",
                  link: "/projekte/produktkatalog-design",
                },
                {
                  title: "Buswerbung Tourismus",
                  category: "Transportwerbung",
                  image: "/austrian-tourism-bus-ad.png",
                  link: "/projekte/buswerbung-tourismus",
                },
              ].map((project, index) => (
                <StaggerItem key={index}>
                  <Card className="overflow-hidden border-none shadow-lg group h-full">
                    <div className="relative h-64">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col h-[calc(100%-16rem)]">
                      <p className="text-sm text-secondary font-medium mb-2">{project.category}</p>
                      <h3 className="text-xl font-bold mb-4 text-primary flex-grow">{project.title}</h3>
                      <ButtonAnimation>
                        <Link
                          href={project.link}
                          className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-white text-secondary border-2 border-secondary hover:bg-secondary hover:text-white transition-colors"
                        >
                          Projekt ansehen <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                      </ButtonAnimation>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          <FadeIn delay={0.6}>
            <div className="text-center mt-12">
              <ButtonAnimation>
                <Button asChild variant="outline" size="lg" className="border-2 border-primary">
                  <Link href="/projekte">Alle Projekte ansehen</Link>
                </Button>
              </ButtonAnimation>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bereit, Ihr Marketing auf das nächste Level zu bringen?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Kontaktieren Sie uns noch heute für eine kostenlose Beratung und erfahren Sie, wie wir Ihnen helfen
              können, Ihre Marketingziele zu erreichen.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <ButtonAnimation>
              <Button asChild size="lg" className="bg-white text-secondary hover:bg-white/90 border-2 border-white">
                <Link href="/kontakt">Jetzt Kontakt aufnehmen</Link>
              </Button>
            </ButtonAnimation>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
