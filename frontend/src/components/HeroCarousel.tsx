'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselSlide {
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  link: string;
  linkText: string;
}

const slides: CarouselSlide[] = [
  {
    image: '/images/statue-liberty.jpg',
    alt: 'Statue of Liberty - Symbol of American Freedom',
    title: 'Your American Dream Starts Here',
    subtitle: 'Navigate your path to citizenship with experienced guidance',
    link: '/pathways/citizenship',
    linkText: 'Citizenship Services',
  },
  {
    image: '/images/family-america.jpg',
    alt: 'Happy family in America',
    title: 'Reunite With Your Loved Ones',
    subtitle: 'Family-based immigration services to bring your family together',
    link: '/pathways/family',
    linkText: 'Family Immigration',
  },
  {
    image: '/images/courthouse.jpg',
    alt: 'American Courthouse - Justice System',
    title: 'Strong Legal Representation',
    subtitle: 'Tough advocacy with a compassionate approach',
    link: '/services',
    linkText: 'Our Services',
  },
  {
    image: '/images/legal-scales.jpg',
    alt: 'Scales of Justice',
    title: 'Fair & Balanced Legal Counsel',
    subtitle: 'Expert immigration law guidance you can trust',
    link: '/consultation',
    linkText: 'Schedule Consultation',
  },
  {
    image: '/images/us-passport.jpg',
    alt: 'US Passport - American Citizenship',
    title: 'Employment & Work Visas',
    subtitle: 'Build your career in the United States',
    link: '/pathways/employment',
    linkText: 'Employment Visas',
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-2xl shadow-xl">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
            <h2 className="text-2xl md:text-4xl font-serif font-bold mb-3 drop-shadow-lg">
              {slide.title}
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-6 max-w-xl drop-shadow">
              {slide.subtitle}
            </p>
            <Link
              href={slide.link}
              className="inline-flex items-center gap-2 bg-white/95 text-primary px-6 py-3 rounded-full font-semibold hover:bg-white transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {slide.linkText}
            </Link>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full transition-all duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full transition-all duration-200"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
