import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FeaturedProducts } from "@/components/featured-products"
import { GlassmorphicCarousel } from "@/components/glassmorphic-carousel"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Printer, Palette, Zap, Award, Users, Clock } from 'lucide-react'
import Link from "next/link"

export default function HomePage() {
  const services = [
    {
      icon: Printer,
      title: "Business Cards",
      description: "Professional business cards that make a lasting impression.",
    },
    {
      icon: Palette,
      title: "Banners & Posters",
      description: "Eye-catching banners and posters for any occasion.",
    },
    {
      icon: Zap,
      title: "Flyers & Brochures",
      description: "Informative marketing materials to promote your business.",
    },
    {
      icon: Award,
      title: "Awards & Trophies",
      description: "Custom trophies, plaques, and medals for events and recognition.",
    },
  ]

  const features = [
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Quick delivery without compromising quality.",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "High-quality materials and printing technology.",
    },
    {
      icon: Users,
      title: "Print on Anything",
      description: "From paper to fabric, wood to metal - we print on any surface.",
    },
  ]

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background to-background/95 py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
                We Print on Absolutely Anything!
              </h1>
              <p className="mb-8 text-lg text-foreground/70 leading-relaxed md:text-xl">
                From business cards to vehicle wraps, t-shirts to trophies, mugs to banners - if you can imagine it, we
                can print it. Professional quality on any surface, any material, any size.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center mb-8 md:mb-16">
                <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700">
                  <Link href="/catalogue">View Our Catalogue</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-foreground text-foreground hover:bg-foreground hover:text-background dark:hover:bg-foreground"
                >
                  <Link href="/contact">Get a Quote</Link>
                </Button>
              </div>

              <GlassmorphicCarousel />

            </div>
          </div>
        </section>

        <FeaturedProducts />

        {/* Our Services Section */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-4 md:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Our Services</h2>
              <p className="text-lg text-foreground/70">Comprehensive printing solutions for all your needs</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <Card key={index} className="border-border transition-all hover:-translate-y-1 hover:shadow-lg">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="mb-6 rounded-full bg-blue-600/10 p-5">
                        <Icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <h3 className="mb-2 text-xl font-bold text-foreground">{service.title}</h3>
                      <p className="text-foreground/70 leading-relaxed">{service.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-background py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-4 md:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Why Choose Print Cue?</h2>
              <p className="text-lg text-foreground/70">We're committed to delivering excellence in every print</p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="text-center">
                    <div className="mb-4 inline-flex rounded-full bg-blue-600 p-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-foreground">{feature.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-4 md:px-8">
            <div className="rounded-2xl bg-gradient-to-r from-foreground to-foreground/80 px-8 py-12 text-center text-background md:px-12 md:py-16">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Bring Your Ideas to Life?</h2>
              <p className="mb-8 text-lg text-background/80 leading-relaxed">
                Contact us today for a free quote and let's create something amazing together.
              </p>
              <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
