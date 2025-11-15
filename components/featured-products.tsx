"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const featuredProducts = [
  {
    title: "Business Cards",
    image: "/business-cards-printing.png",
    color: "#ff6b35",
  },
  {
    title: "Colorful Flyers",
    image: "/colorful-flyers-printing.jpg",
    color: "#4ecdc4",
  },
  {
    title: "Banners & Posters",
    image: "/banner-printing-display.jpg",
    color: "#f7b801",
  },
  {
    title: "Brochures",
    image: "/brochure-printing-design.jpg",
    color: "#a8e6cf",
  },
  {
    title: "Posters",
    image: "/poster-printing-design.jpg",
    color: "#ffd3b6",
  },
  {
    title: "Wall Murals",
    image: "/wall-mural-graphics.jpg",
    color: "#ffaaa5",
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Featured Products</h2>
          <p className="text-lg text-foreground/70">Explore our most popular printing services</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden bg-secondary">
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-20"
                  style={{ backgroundColor: product.color }}
                />
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="mb-2 text-lg font-bold text-foreground">{product.title}</h3>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-foreground text-foreground hover:bg-foreground hover:text-background dark:hover:bg-foreground w-full "
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
