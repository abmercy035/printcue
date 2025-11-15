"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"
import emailjs from "@emailjs/browser"

export default function CataloguePage() {
  const { toast } = useToast()
  const [activeFilter, setActiveFilter] = useState("all")
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<{
    title: string
    description: string
    price: string
  } | null>(null)
  const [quantity, setQuantity] = useState("")
  const [additionalMessage, setAdditionalMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleOrderClick = (product: { title: string; description: string; price: string }) => {
    setSelectedProduct(product)
    setQuantity("")
    setAdditionalMessage("")
    setIsOrderModalOpen(true)
  }

  const handleSubmitOrder = async () => {
    if (!selectedProduct) return

    setIsSubmitting(true)

    // Prepare template parameters for EmailJS
    const templateParams = {
      product_name: selectedProduct.title,
      product_description: selectedProduct.description,
      product_price: selectedProduct.price,
      quantity: quantity || "Not specified",
      additional_message: additionalMessage || "None",
      to_email: "printcue21@gmail.com",
    }

    try {
      // Send email using EmailJS
      // Replace these with your actual EmailJS credentials
      await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID (create a template for orders)
        templateParams,
        "YOUR_PUBLIC_KEY", // Replace with your EmailJS Public Key
      )

      toast({
        title: "Order Submitted!",
        description: "Thank you for your order. We will contact you shortly with more details.",
      })

      // Reset form and close modal
      setQuantity("")
      setAdditionalMessage("")
      setIsOrderModalOpen(false)
    } catch (error) {
      console.error("EmailJS Error:", error)
      toast({
        title: "Error",
        description: "Failed to submit order. Please try again or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const categories = [
    { id: "all", label: "All Products" },
    { id: "business", label: "Business" },
    { id: "marketing", label: "Marketing" },
    { id: "merchandise", label: "Merchandise" },
    { id: "signage", label: "Signage" },
    { id: "awards", label: "Awards & Trophies" },
    { id: "custom", label: "Custom Projects" },
  ]

  const products = [
    {
      id: 1,
      title: "Business Cards",
      category: "business",
      description: "Premium quality business cards with various finishes available.",
      price: "From ₦25,000",
      image: "/business-cards-printing.png",
    },
    {
      id: 2,
      title: "Flyers",
      category: "marketing",
      description: "Eye-catching flyers perfect for promotions and events.",
      price: "From ₦5,000",
      image: "/colorful-flyers-printing.jpg",
    },
    {
      id: 3,
      title: "Banners",
      category: "signage",
      description: "Large format banners for indoor and outdoor use.",
      price: "From ₦100,079",
      image: "/banner-printing-display.jpg",
    },
    {
      id: 4,
      title: "Brochures",
      category: "marketing",
      description: "Professional brochures to showcase your products and services.",
      price: "From ₦40,059",
      image: "/brochure-printing-design.jpg",
    },
    {
      id: 5,
      title: "T-Shirts",
      category: "merchandise",
      description: "Custom printed t-shirts with your design or logo.",
      price: "From ₦30,000",
      image: "/custom-t-shirt-printing.jpg",
    },
    {
      id: 6,
      title: "Posters",
      category: "signage",
      description: "High-quality posters in various sizes and finishes.",
      price: "From ₦98,000",
      image: "/poster-printing-design.jpg",
    },
    {
      id: 7,
      title: "Letterheads",
      category: "business",
      description: "Professional letterheads for your business correspondence.",
      price: "From ₦50,000",
      image: "/letterhead-printing-business.jpg",
    },
    {
      id: 8,
      title: "Mugs",
      category: "merchandise",
      description: "Custom printed mugs perfect for gifts or promotional items.",
      price: "From ₦10012",
      image: "/custom-mug-printing.jpg",
    },
    {
      id: 9,
      title: "Vinyl Stickers",
      category: "marketing",
      description: "Durable vinyl stickers in custom shapes and sizes.",
      price: "From ₦10019",
      image: "/vinyl-sticker-printing.jpg",
    },
    {
      id: 10,
      title: "Trophies",
      category: "awards",
      description: "Custom trophies for sports events, competitions, and achievements.",
      price: "From ₦60,000",
      image: "/golden-trophy-award.jpg",
    },
    {
      id: 11,
      title: "Plaques",
      category: "awards",
      description: "Elegant plaques for recognition and appreciation.",
      price: "From ₦45,000",
      image: "/wooden-plaque-award.jpg",
    },
    {
      id: 12,
      title: "Medals",
      category: "awards",
      description: "Custom medals for sporting events and competitions.",
      price: "From ₦50,000",
      image: "/gold-silver-bronze-medals.jpg",
    },
    {
      id: 13,
      title: "Acrylic Awards",
      category: "awards",
      description: "Modern acrylic awards with custom engraving.",
      price: "From ₦70,000",
      image: "/clear-acrylic-award-trophy.jpg",
    },
    {
      id: 14,
      title: "Certificates",
      category: "awards",
      description: "Professional certificates for achievements and recognition.",
      price: "From ₦20,500",
      image: "/certificate-of-achievement.jpg",
    },
    {
      id: 15,
      title: "Vehicle Wraps",
      category: "custom",
      description: "Full or partial vehicle wraps for cars, vans, and trucks.",
      price: "Custom Quote",
      image: "/vehicle-wrap-car-branding.jpg",
    },
    {
      id: 16,
      title: "Packaging",
      category: "custom",
      description: "Custom printed packaging boxes, bags, and labels.",
      price: "Custom Quote",
      image: "/custom-packaging.png",
    },
    {
      id: 17,
      title: "Wall Graphics",
      category: "custom",
      description: "Large format wall murals and graphics for offices and homes.",
      price: "Custom Quote",
      image: "/wall-mural-graphics.jpg",
    },
    {
      id: 18,
      title: "Fabric Printing",
      category: "custom",
      description: "Print on any fabric - curtains, tablecloths, banners, and more.",
      price: "Custom Quote",
      image: "/fabric-printing-textile.jpg",
    },
  ]

  const filteredProducts =
    activeFilter === "all" ? products : products.filter((product) => product.category === activeFilter)

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background to-background/95 py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-4 md:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">Our Catalogue</h1>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Explore our printing services - from standard products to completely custom projects on any surface
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="border-b border-border bg-background py-6">
          <div className="container mx-auto max-w-7xl px-4 md:px-8">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeFilter === category.id ? "default" : "outline"}
                  onClick={() => setActiveFilter(category.id)}
                  className={
                    activeFilter === category.id
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : ""
                  }
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto max-w-7xl px-4 md:px-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="overflow-hidden border-border transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="aspect-video w-full overflow-hidden bg-secondary">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-foreground">{product.title}</h3>
                    <p className="mb-4 text-foreground/70 leading-relaxed">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">{product.price}</span>
                      <Button
                        size="sm"
                        className="bg-foreground text-background hover:bg-foreground/80"
                        onClick={() => handleOrderClick(product)}
                      >
                        Order Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-secondary py-16">
          <div className="container mx-auto max-w-7xl px-4 md:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground">Need Something Unique?</h2>
              <p className="mb-6 text-lg text-foreground/70 leading-relaxed">
                We print on absolutely anything! Wood, metal, glass, fabric, plastic - you name it, we can print on it.
                Contact us to discuss your custom project.
              </p>
              <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                <Link href="/contact">Get Custom Quote</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Order Modal */}
      <Dialog open={isOrderModalOpen} onOpenChange={setIsOrderModalOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Order: {selectedProduct?.title}</DialogTitle>
            <DialogDescription>
              Fill in the details below to place your order. We'll get back to you shortly.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="product-name">Product</Label>
              <Input
                id="product-name"
                value={selectedProduct?.title || ""}
                disabled
                className="bg-secondary"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="product-description">Description</Label>
              <Textarea
                id="product-description"
                value={selectedProduct?.description || ""}
                disabled
                className="bg-secondary resize-none"
                rows={3}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="price">Price</Label>
              <Input
                id="price"
                value={selectedProduct?.price || ""}
                disabled
                className="bg-secondary"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="quantity">Quantity (Optional)</Label>
              <Input
                id="quantity"
                type="number"
                min="1"
                placeholder="Enter quantity if applicable"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="additional-message">Additional Details (Optional)</Label>
              <Textarea
                id="additional-message"
                placeholder="Add any special requirements, preferred colors, sizes, delivery instructions, etc."
                value={additionalMessage}
                onChange={(e) => setAdditionalMessage(e.target.value)}
                rows={4}
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsOrderModalOpen(false)}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              className="bg-blue-600 text-white hover:bg-blue-700"
              onClick={handleSubmitOrder}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Order"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Footer />
    </>
  )
}
