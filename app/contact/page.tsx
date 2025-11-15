"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import emailjs from "@emailjs/browser"

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedService, setSelectedService] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    // Prepare template parameters for EmailJS
    const templateParams = {
      from_name: formData.get("name"),
      from_email: formData.get("email"),
      phone: formData.get("phone"),
      service: selectedService,
      message: formData.get("message"),
      to_email: "printcue21@gmail.com",
    }

    try {
      // Send email using EmailJS
      // Replace these with your actual EmailJS credentials
      await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
        templateParams,
        "YOUR_PUBLIC_KEY", // Replace with your EmailJS Public Key
      )

      toast({
        title: "Message Sent!",
        description: "Thank you for contacting Print Cue. We will get back to you soon.",
      })

      form.reset()
      setSelectedService("")
    } catch (error) {
      console.error("EmailJS Error:", error)
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+234 808 064 1891",
      link: "tel:+2348080641891",
    },
    {
      icon: Mail,
      title: "Email",
      content: "printcue21@gmail.com",
      link: "mailto:printcue21@gmail.com",
    },
    {
      icon: MapPin,
      title: "Address",
      content: "35, Peace Estate Road, Command Ipaja Lagos, Nigeria",
      link: null,
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM",
      link: null,
    },
  ]

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background to-background/95 py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-4 md:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">Get in Touch</h1>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Have a question or ready to start your project? We'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-background">
          <div className="container mx-auto max-w-7xl px-4 md:px-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                const content = info.link ? (
                  <a href={info.link} className="text-foreground/70 transition-colors hover:text-blue-600 dark:hover:text-blue-400">
                    {info.content}
                  </a>
                ) : (
                  <p className="text-foreground/70">{info.content}</p>
                )

                return (
                  <Card key={index} className="border-border">
                    <CardContent className="p-6 text-center">
                      <div className="mb-4 inline-flex rounded-full bg-blue-600/10 p-3">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="mb-2 font-bold text-foreground">{info.title}</h3>
                      {content}
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-secondary py-16">
          <div className="container mx-auto max-w-7xl px-4 md:px-8">
            <div className="mx-auto max-w-2xl">
              <Card className="border-border">
                <CardContent className="p-8">
                  <h2 className="mb-6 text-2xl font-bold text-foreground">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input id="name" name="name" required placeholder="Your name" className="border-border" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="your@email.com"
                          className="border-border"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="(123) 456-7890"
                          className="border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service *</Label>
                        <Select name="service" required value={selectedService} onValueChange={setSelectedService}>
                          <SelectTrigger className="border-border">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                            <SelectItem value="Banner Printing">Banner Printing</SelectItem>
                            <SelectItem value="Clothes Printing">Clothes Printing</SelectItem>
                            <SelectItem value="Sticker Printing">Sticker Printing</SelectItem>
                            <SelectItem value="Business Cards">Business Cards</SelectItem>
                            <SelectItem value="Flyers & Brochures">Flyers & Brochures</SelectItem>
                            <SelectItem value="Awards & Trophies">Awards & Trophies</SelectItem>
                            <SelectItem value="Custom Project">Custom Project</SelectItem>
                            <SelectItem value="Quote Request">Quote Request</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Tell us about your project..."
                        rows={6}
                        className="border-border resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 text-white hover:bg-blue-700"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
