'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Globe, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'es'>('en');

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === 'en' ? 'es' : 'en');
    // TODO: Integrate with next-i18next router
  };

  const navLinks = [
    { href: '/about', label: currentLanguage === 'en' ? 'About' : 'Acerca de' },
    { href: '/services', label: currentLanguage === 'en' ? 'Services' : 'Servicios' },
    { href: '/pathways', label: currentLanguage === 'en' ? 'Immigration Pathways' : 'Caminos Migratorios' },
    { href: '/resources', label: currentLanguage === 'en' ? 'Resources' : 'Recursos' },
    { href: '/contact', label: currentLanguage === 'en' ? 'Contact' : 'Contacto' },
  ];

  return (
    <nav className="bg-white border-b border-neutral-200 sticky top-0 z-50 shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-600 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-white font-bold text-xl">BC</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-neutral-900 text-lg leading-tight">
                Blanca Correa Law
              </div>
              <div className="text-xs text-neutral-600">
                {currentLanguage === 'en' ? 'Immigration Attorney' : 'Abogada de Inmigración'}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neutral-700 hover:text-primary font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-neutral-100 transition-colors"
              aria-label={currentLanguage === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés'}
            >
              <Globe className="w-4 h-4 text-neutral-600" />
              <span className="text-sm font-medium text-neutral-700">
                {currentLanguage === 'en' ? 'ES' : 'EN'}
              </span>
            </button>

            {/* Phone */}
            <a
              href="tel:+19195551234"
              className="flex items-center gap-2 px-4 py-2 text-secondary hover:text-secondary-600 font-medium transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">(919) 555-1234</span>
            </a>

            {/* CTA Button */}
            <Link
              href="/consultation"
              className="btn-primary"
            >
              {currentLanguage === 'en' ? 'Schedule Consultation' : 'Agendar Consulta'}
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
                {/* Language Toggle Mobile */}
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 px-4 py-3 rounded-lg bg-neutral-50 hover:bg-neutral-100 transition-colors"
                >
                  <Globe className="w-5 h-5 text-neutral-600" />
                  <span className="font-medium text-neutral-700">
                    {currentLanguage === 'en' ? 'Cambiar a Español' : 'Switch to English'}
                  </span>
                </button>

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
                  {currentLanguage === 'en' ? 'Schedule Consultation' : 'Agendar Consulta'}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
