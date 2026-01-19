'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/pathways', label: 'Immigration Pathways' },
    { href: '/resources', label: 'Resources' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-neutral-200 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-white font-semibold text-lg">BC</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-serif font-semibold text-neutral-800 text-lg leading-tight">
                Blanca Correa Law
              </div>
              <div className="text-xs text-neutral-500">
                Immigration Attorney
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neutral-600 hover:text-primary text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Phone */}
            <a
              href="tel:+19195551234"
              className="flex items-center gap-2 text-sm text-neutral-600 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">(919) 555-1234</span>
            </a>

            {/* CTA Button */}
            <Link
              href="/consultation"
              className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-600 transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-neutral-700" />
            ) : (
              <Menu className="w-6 h-6 text-neutral-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-neutral-200 animate-in slide-in-from-top-5 duration-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-neutral-700 hover:text-primary font-medium py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-4 border-t border-neutral-200 flex flex-col gap-3">
                {/* Phone Mobile */}
                <a
                  href="tel:+19195551234"
                  className="flex items-center gap-2 px-4 py-3 rounded-lg bg-secondary-50 text-secondary-700 hover:bg-secondary-100 font-medium transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>(919) 555-1234</span>
                </a>

                {/* CTA Mobile */}
                <Link
                  href="/consultation"
                  className="btn-primary text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
