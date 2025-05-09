import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import faqData from "@/data/faq.json"

export const metadata: Metadata = {
  title: "Häufig gestellte Fragen (FAQ)",
  description: "Antworten auf häufig gestellte Fragen zu unseren Dienstleistungen und Prozessen.",
}

export default function FAQPage() {
  return (
    <>
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Häufig gestellte Fragen</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Hier finden Sie Antworten auf die häufigsten Fragen zu unseren Dienstleistungen.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {faqData.map((category, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-primary">{category.category}</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((item, qIndex) => (
                  <AccordionItem key={qIndex} value={`item-${index}-${qIndex}`} className="border rounded-lg p-1">
                    <AccordionTrigger className="px-4 text-left font-medium">{item.question}</AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 pt-2 text-black">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}

          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Haben Sie weitere Fragen?</h3>
            <p className="mb-6">
              Wenn Sie keine Antwort auf Ihre Frage gefunden haben, kontaktieren Sie uns gerne direkt. Wir helfen Ihnen
              gerne weiter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:info@alpenpromo.com"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
              >
                E-Mail senden
              </a>
              <a
                href="tel:+43662153429"
                className="inline-flex items-center justify-center rounded-md border border-primary bg-transparent px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10"
              >
                Anrufen
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
