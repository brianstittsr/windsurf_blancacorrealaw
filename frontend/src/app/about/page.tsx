import Image from 'next/image';
import Link from 'next/link';
import { Scale, Heart, Users, Award, BookOpen, Globe } from 'lucide-react';

export const metadata = {
  title: 'About Us - Blanca Correa Law',
  description: 'Learn about Blanca Correa and our commitment to providing compassionate, expert immigration legal services in North Carolina.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-display font-bold text-neutral-900 mb-6">
              About Blanca Correa Law
            </h1>
            <p className="text-body text-neutral-700">
              We believe that every immigration journey deserves personalized attention, 
              cultural understanding, and unwavering advocacy. Our mission is to be your 
              bridge to immigration success in North Carolina.
            </p>
          </div>
        </div>
      </section>

      {/* Attorney Bio Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/5] bg-gradient-to-br from-primary-100 to-secondary-100 rounded-pathway overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-neutral-400">
                  {/* Placeholder for attorney photo */}
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Scale className="w-16 h-16 text-primary" />
                    </div>
                    <p className="text-sm">Attorney Photo</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-h1 font-bold text-neutral-900 mb-6">
                Meet Blanca Correa
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  Blanca Correa is a dedicated immigration attorney serving clients throughout 
                  North Carolina. With a deep understanding of both the legal complexities and 
                  the emotional journey of immigration, she provides compassionate, expert 
                  guidance to individuals and families navigating the U.S. immigration system.
                </p>
                <p>
                  As a bilingual attorney fluent in English and Spanish, Blanca ensures that 
                  language is never a barrier to accessing quality legal representation. Her 
                  practice is built on the belief that every client deserves to be heard, 
                  understood, and empowered throughout their immigration journey.
                </p>
                <p>
                  Blanca specializes in family-based immigration, employment visas, citizenship 
                  and naturalization, and humanitarian relief. She is committed to staying 
                  current with the ever-changing landscape of immigration law to provide her 
                  clients with the most effective legal strategies.
                </p>
              </div>

              {/* Credentials */}
              <div className="mt-8 space-y-3">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-neutral-900">Licensed Attorney</p>
                    <p className="text-sm text-neutral-600">North Carolina State Bar</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-neutral-900">Education</p>
                    <p className="text-sm text-neutral-600">Juris Doctor (J.D.) - [Law School Name]</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-neutral-900">Professional Memberships</p>
                    <p className="text-sm text-neutral-600">American Immigration Lawyers Association (AILA)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-h1 font-bold text-neutral-900 mb-4">
              Our Values
            </h2>
            <p className="text-body text-neutral-700 max-w-2xl mx-auto">
              These principles guide every decision we make and every client relationship we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Compassion */}
            <div className="card-pathway">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                Compassion
              </h3>
              <p className="text-neutral-700">
                We understand that immigration is more than paperwork—it's about families, 
                dreams, and futures. We treat every client with empathy and respect.
              </p>
            </div>

            {/* Excellence */}
            <div className="card-pathway">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                Excellence
              </h3>
              <p className="text-neutral-700">
                We maintain the highest standards of legal practice, staying current with 
                immigration law changes and pursuing the best outcomes for our clients.
              </p>
            </div>

            {/* Accessibility */}
            <div className="card-pathway">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-accent-700" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                Accessibility
              </h3>
              <p className="text-neutral-700">
                True bilingual service means more than translation—it means cultural 
                understanding and communication that makes you feel heard and supported.
              </p>
            </div>

            {/* Integrity */}
            <div className="card-pathway">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                Integrity
              </h3>
              <p className="text-neutral-700">
                We provide honest assessments, transparent pricing, and ethical representation. 
                Your trust is our most valuable asset.
              </p>
            </div>

            {/* Partnership */}
            <div className="card-pathway">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                Partnership
              </h3>
              <p className="text-neutral-700">
                We work alongside you throughout your immigration journey, providing guidance, 
                support, and advocacy every step of the way.
              </p>
            </div>

            {/* Education */}
            <div className="card-pathway">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-accent-700" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                Education
              </h3>
              <p className="text-neutral-700">
                We empower clients with knowledge about their options, rights, and the 
                immigration process, helping you make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h1 font-bold text-neutral-900 mb-8 text-center">
              Our Approach
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    Listen & Understand
                  </h3>
                  <p className="text-neutral-700">
                    We begin by truly listening to your story, understanding your goals, and 
                    assessing your unique situation. Every immigration case is different, and 
                    we take the time to understand yours.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    Develop Strategy
                  </h3>
                  <p className="text-neutral-700">
                    Based on your circumstances, we develop a comprehensive legal strategy 
                    tailored to your needs. We explain your options clearly and help you 
                    understand the best path forward.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    Guide & Support
                  </h3>
                  <p className="text-neutral-700">
                    Throughout the process, we guide you through each step, prepare your 
                    applications meticulously, and keep you informed. You'll never wonder 
                    what's happening with your case.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    Advocate & Achieve
                  </h3>
                  <p className="text-neutral-700">
                    We advocate tirelessly on your behalf, representing you with immigration 
                    authorities and working toward the best possible outcome for your case.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-700">
        <div className="container-custom text-center">
          <h2 className="text-h1 font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discuss your immigration needs and learn how we can help.
          </p>
          <Link 
            href="/consultation" 
            className="bg-white text-primary px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:bg-primary-50 focus:ring-4 focus:ring-white/20 inline-flex items-center justify-center gap-2"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
