"use client"

import { useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "./ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Checkbox } from "./ui/checkbox"
import { AlertCircle, CheckCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "./ui/alert"
import Link from "next/link"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Der Name muss mindestens 2 Zeichen lang sein.",
  }),
  email: z.string().email({
    message: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
  }),
  phone: z.string().optional(),
  message: z.string().min(10, {
    message: "Die Nachricht muss mindestens 10 Zeichen lang sein.",
  }),
  privacyConsent: z.literal(true, {
    errorMap: () => ({ message: "Sie müssen der Datenschutzerklärung zustimmen." }),
  }),
})

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean
    message: string
  } | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      privacyConsent: true,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // In a real application, you would send the form data to your API here
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   body: JSON.stringify(values),
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // });

      setSubmitStatus({
        success: true,
        message: "Vielen Dank für Ihre Nachricht. Wir werden uns in Kürze bei Ihnen melden.",
      })

      form.reset()
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-6">
      {submitStatus && (
        <Alert variant={submitStatus.success ? "default" : "destructive"}>
          {submitStatus.success ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
          <AlertTitle>{submitStatus.success ? "Erfolg" : "Fehler"}</AlertTitle>
          <AlertDescription>{submitStatus.message}</AlertDescription>
        </Alert>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Ihr Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-Mail *</FormLabel>
                <FormControl>
                  <Input placeholder="ihre-email@beispiel.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefon</FormLabel>
                <FormControl>
                  <Input placeholder="+43 123 456789" {...field} />
                </FormControl>
                <FormDescription>Optional</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nachricht *</FormLabel>
                <FormControl>
                  <Textarea placeholder="Wie können wir Ihnen helfen?" className="min-h-[120px]" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="privacyConsent"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    Ich stimme zu, dass meine Daten zur Bearbeitung meiner Anfrage verwendet werden. *
                  </FormLabel>
                  <FormDescription>
                    Weitere Informationen finden Sie in unserer{" "}
                    <Link href="/datenschutz" className="text-primary underline">
                      Datenschutzerklärung
                    </Link>
                    .
                  </FormDescription>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <Button type="submit" disabled={isSubmitting} className="w-full border-2 border-primary">
            {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
          </Button>
        </form>
      </Form>
    </div>
  )
}
