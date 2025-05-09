import type { Metadata } from "next"
import Image from "next/image"
import ContactForm from "../../components/contact-form"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Nehmen Sie Kontakt mit AlpenPromo auf. Wir freuen uns auf Ihre Anfrage.",
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Kontakt</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Haben Sie Fragen oder möchten Sie ein Projekt besprechen? Kontaktieren Sie uns - wir freuen uns auf Ihre
            Nachricht.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-primary">Schreiben Sie uns</h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 text-primary">Kontaktinformationen</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Adresse</h3>
                    <p>Getreidegasse 15</p>
                    <p>5020 Salzburg, Austria</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Telefon</h3>
                    <p>+43 662 153 429</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">E-Mail</h3>
                    <p>info@alpenpromo.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Öffnungszeiten</h3>
                    <p>Montag - Freitag: 9:00 - 17:00 Uhr</p>
                    <p>Samstag & Sonntag: Geschlossen</p>
                  </div>
                </div>
                <div className="mt-8 h-[300px] bg-gray-200 rounded-lg relative">
                  <Image
                    src="/781720cdbda3d08e90bcc896edd5f9a0.jpg"
                    alt="Standort von AlpenPromo"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
