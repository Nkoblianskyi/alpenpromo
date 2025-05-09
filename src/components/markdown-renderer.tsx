interface MarkdownRendererProps {
  content: string
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-lg max-w-none">
      {content.split("\n").map((paragraph, index) => {
        // Skip empty paragraphs
        if (paragraph.trim() === "") {
          return <br key={index} />
        }

        // Handle headings
        if (paragraph.startsWith("# ")) {
          return (
            <h1 key={index} className="text-3xl font-bold mt-6 mb-4">
              {paragraph.substring(2)}
            </h1>
          )
        } else if (paragraph.startsWith("## ")) {
          return (
            <h2 key={index} className="text-2xl font-bold mt-5 mb-3">
              {paragraph.substring(3)}
            </h2>
          )
        } else if (paragraph.startsWith("### ")) {
          return (
            <h3 key={index} className="text-xl font-bold mt-4 mb-2">
              {paragraph.substring(4)}
            </h3>
          )
        }

        // Handle lists
        if (paragraph.startsWith("- ")) {
          return (
            <ul key={index} className="list-disc pl-5 mb-4">
              <li>{paragraph.substring(2)}</li>
            </ul>
          )
        }

        // Handle bold text
        if (paragraph.includes("**")) {
          const parts = paragraph.split(/(\*\*.*?\*\*)/g)
          return (
            <p key={index} className="mb-4">
              {parts.map((part, i) => {
                if (part.startsWith("**") && part.endsWith("**")) {
                  return <strong key={i}>{part.slice(2, -2)}</strong>
                }
                return <span key={i}>{part}</span>
              })}
            </p>
          )
        }

        // Default paragraph
        return (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        )
      })}
    </div>
  )
}
