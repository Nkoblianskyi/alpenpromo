import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Calendar, User, Tag } from "lucide-react"
import blogPostsData from "@/data/blog-posts.json"
import { MarkdownRenderer } from "@/components/markdown-renderer"

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPostsData.find((post) => post.id === params.id)

  if (!post) {
    return {
      title: "Artikel nicht gefunden",
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    id: post.id,
  }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPostsData.find((post) => post.id === params.id)

  if (!post) {
    notFound()
  }

  // Format date to German format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("de-AT", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(date)
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPostsData.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 3)

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative bg-primary text-white py-16">
        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `url('${post.image || "/blog-post-background.png"}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center px-3 py-1 rounded-md bg-white/20 text-white hover:bg-white/30 transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Zurück zum Blog
          </Link>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex flex-wrap gap-6 items-center">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4" />
              <span>{post.category}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="relative h-[400px] rounded-lg overflow-hidden mb-12">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
          </div>

          <article className="prose prose-lg max-w-none">
            <MarkdownRenderer content={post.content} />
          </article>

          <div className="mt-12 pt-8 border-t">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-primary text-center">Ähnliche Artikel</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <Card key={index} className="overflow-hidden border-none shadow-lg group">
                  <div className="relative h-48">
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <p className="text-sm text-secondary font-medium">{relatedPost.category}</p>
                      <p className="text-sm text-gray-600">{formatDate(relatedPost.date)}</p>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-primary">{relatedPost.title}</h3>
                    <Link
                      href={`/blog/${relatedPost.id}`}
                      className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-white text-secondary border-2 border-secondary hover:bg-secondary hover:text-white transition-colors text-sm"
                    >
                      Weiterlesen <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
