import Link from "next/link"
import { Mail, Phone, MapPin } from 'lucide-react'
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="container mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Image src="/logo.png" alt="Print Cue" width={50} height={50} />
              <h4 className="text-xl font-bold">
                <span className="text-white">Print</span>
                <span className="text-blue-600">cue</span>
              </h4>
            </div>
            <p className="text-white/80 leading-relaxed">
              Your trusted partner for professional printing services. Quality prints, creative designs, and exceptional
              service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-xl font-bold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 transition-colors hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/catalogue" className="text-white/80 transition-colors hover:text-blue-600">
                  Catalogue
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 transition-colors hover:text-blue-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-xl font-bold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                <a href="tel:+2348080641891" className="text-white/80 transition-colors hover:text-blue-600">
                  +234 808 064 1891
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                <a href="mailto:printcue21@gmail.com" className="text-white/80 transition-colors hover:text-blue-600">
                  printcue21@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                <span className="text-white/80">35, Peace Estate Road, Command Ipaja Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Print Cue. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
