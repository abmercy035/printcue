"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/catalogue", label: "Catalogue" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-slate-950 dark:border-slate-800 shadow-sm transition-colors">
      <nav className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Print Cue" width={50} height={50} />
          <span className="hidden text-xl font-bold md:inline text-[#1a1a1a] dark:text-white">
            Print<span className="text-blue-600 dark:text-blue-400">cue</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="font-medium text-[#1a1a1a] dark:text-slate-200 transition-colors hover:text-blue-600 dark:hover:text-blue-400">
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a href="tel:+2348080641891" className="flex items-center gap-2 font-semibold text-blue-600 dark:text-blue-400">
              <Phone className="h-4 w-4" />
              <span>+234 808 064 1891</span>
            </a>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[400px] sm:w-[500px]">
            <nav className="flex flex-col gap-4 pt-14 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-[#1a1a1a] dark:text-slate-200 transition-colors hover:text-blue-600 dark:hover:text-blue-400 h-12 border-2 border-transparent hover:border-blue-600 dark:hover:border-blue-400 flex items-center px-4 rounded-md"
                >
                  {link.label}
                </Link>
              ))}
              <a href="tel:+2348080641891" className="flex items-center gap-2 text-lg font-semibold text-blue-600 dark:text-blue-400 px-4">
                <Phone className="h-5 w-5" />
                <span>+234 808 064 1891</span>
              </a>
              <div className="border-t pt-4 mt-4 px-4">
                <ThemeToggle />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
