import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import blogPostsData from "@/data/blog-posts.json"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { ButtonAnimation } from "@/components/animations/button-animation"

export const metadata: Metadata = {
  title: "Blog",
  description: "Aktuelle Artikel und Insights zu Offline-Marketing, Werbung und Branding.",
}

export default function BlogPage() {
  // Sort blog posts by date (newest first)
  const sortedPosts = [...blogPostsData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

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
      <section className="relative bg-primary text-white py-16">
        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `url('/marketing-blog-hero.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Content */}
        <FadeIn direction="up" className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Aktuelle Artikel und Insights zu Offline-Marketing, Werbung und Branding.
          </p>
        </FadeIn>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Featured post (latest) */}
          <FadeIn className="mb-16">
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="grid md:grid-cols-2">
                <div className="relative h-[300px] md:h-auto">
                  <Image
                    src={sortedPosts[0].image || "/placeholder.svg"}
                    alt={sortedPosts[0].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <p className="text-sm text-secondary font-medium">{sortedPosts[0].category}</p>
                    <p className="text-sm text-gray-600">{formatDate(sortedPosts[0].date)}</p>
                  </div>
                  <h2 className="text-2xl font-bold mb-4 text-primary">{sortedPosts[0].title}</h2>
                  <p className="text-gray-700 mb-6">{sortedPosts[0].excerpt}</p>
                  <div className="mt-auto">
                    <ButtonAnimation>
                      <Link
                        href={`/blog/${sortedPosts[0].id}`}
                        className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-white text-secondary border-2 border-secondary hover:bg-secondary hover:text-white transition-colors"
                      >
                        Weiterlesen <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </ButtonAnimation>
                  </div>
                </CardContent>
              </div>
            </Card>
          </FadeIn>

          {/* Other posts */}
          <StaggerContainer>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedPosts.slice(1).map((post, index) => (
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
                      <div className="flex items-center gap-4 mb-2">
                        <p className="text-sm text-secondary font-medium">{post.category}</p>
                        <p className="text-sm text-gray-600">{formatDate(post.date)}</p>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-primary">{post.title}</h3>
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
        </div>
      </section>
    </>
  )
}
