"use client"

import { useEffect, useRef } from "react"

const services = [
  { name: "Banners", color: "#ff6b35", darkColor: "#cc3b1f" },
  { name: "Flyers", color: "#4ecdc4", darkColor: "#2a8280" },
  { name: "Posters", color: "#f7b801", darkColor: "#b88800" },
  { name: "Business Cards", color: "#a8e6cf", darkColor: "#6ba88f" },
  { name: "Brochures", color: "#ffd3b6", darkColor: "#cc9d7d" },
  { name: "Stickers", color: "#ffaaa5", darkColor: "#cc5545" },
  { name: "T-Shirts", color: "#95e1d3", darkColor: "#5a9885" },
  { name: "Mugs", color: "#c7ceea", darkColor: "#7d7fa8" },
  { name: "Banners", color: "#ff6b35", darkColor: "#cc3b1f" },
  { name: "Flyers", color: "#4ecdc4", darkColor: "#2a8280" },
  { name: "Posters", color: "#f7b801", darkColor: "#b88800" },
  { name: "Banners", color: "#ff6b35", darkColor: "#cc3b1f" },
  { name: "Flyers", color: "#4ecdc4", darkColor: "#2a8280" },
  { name: "Posters", color: "#f7b801", darkColor: "#b88800" },
  { name: "Business Cards", color: "#a8e6cf", darkColor: "#6ba88f" },
  { name: "Brochures", color: "#ffd3b6", darkColor: "#cc9d7d" },
  { name: "Stickers", color: "#ffaaa5", darkColor: "#cc5545" },
  { name: "T-Shirts", color: "#95e1d3", darkColor: "#5a9885" },
  { name: "Mugs", color: "#c7ceea", darkColor: "#7d7fa8" },
  { name: "Banners", color: "#ff6b35", darkColor: "#cc3b1f" },
  { name: "Flyers", color: "#4ecdc4", darkColor: "#2a8280" },
  { name: "Posters", color: "#f7b801", darkColor: "#b88800" },
]

export function GlassmorphicCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let position = 0
    let isAnimating = true

    const scroll = () => {
      if (!isAnimating) return

      position += 1
      container.scrollLeft = position

      // Loop back when reaching the end
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        position = 0
        container.scrollLeft = 0
      }

      requestAnimationFrame(scroll)
    }

    const timeoutId = setTimeout(() => scroll(), 500)

    return () => {
      clearTimeout(timeoutId)
      isAnimating = false
    }
  }, [])

  return (
    <div className="relative w-screen left-1/2 right-1/2 md:-mx-[51vw] -mx-[52vw] h-16 overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black/40 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/40 to-transparent z-20 pointer-events-none" />

      <div className="absolute  backdrop-blur-md  border-y border-white/20 shadow-2xl" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/5 pointer-events-none" />

      <div
        ref={containerRef}
        className="absolute inset-0 flex gap-4 overflow-x-hidden scroll-smooth px-8 items-center "
        style={{ scrollBehavior: "auto" }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="flex-shrink-0 h-10 px-5 py-2 max-w-30 min-w-30 flex items-center justify-center md:text-base text-sm font-semibold whitespace-nowrap transition-all duration-300 hover:shadow-md"
            style={{
              backgroundColor: service.darkColor,
              color: "white",
            }}
          >
            {service.name}
          </div>
        ))}
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
