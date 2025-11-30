import Link from 'next/link';
import { ArrowRight, Globe, Heart, MapPin, Scale, Users } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 md:py-32">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-soft mb-6">
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-neutral-700">
                Serving North Carolina • English & Spanish
              </span>
            </div>
            
            <h1 className="text-display font-bold text-neutral-900 mb-6">
              Your Bridge to Immigration Success in{' '}
              <span className="text-primary">North Carolina</span>
            </h1>
            
            <p className="text-body text-neutral-700 mb-8 max-w-2xl">
              Navigate your immigration journey with confidence. Get personalized guidance, 
              understand your options, and take the next step toward belonging.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/assessment" className="btn-primary inline-flex items-center justify-center gap-2">
                Find Your Pathway
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/consultation" className="btn-outline inline-flex items-center justify-center gap-2">
                Schedule Consultation
              </Link>
            </div>

            {/* Language Toggle */}
            <div className="mt-8 flex items-center gap-3">
              <button className="text-sm font-medium text-primary underline underline-offset-4">
                English
              </button>
              <span className="text-neutral-400">|</span>
              <button className="text-sm font-medium text-neutral-600 hover:text-primary transition-colors">
                Español
              </button>
            </div>
          </div>
        </div>

        {/* Decorative pathway element */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-20"></div>
      </section>

      {/* Immigration Pathways Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-h1 font-bold text-neutral-900 mb-4">
              Explore Your Immigration Pathways
            </h2>
            <p className="text-body text-neutral-700 max-w-2xl mx-auto">
              Every immigration journey is unique. Discover which pathway is right for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Family-Based Immigration */}
            <div className="card-pathway group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-h3 font-bold text-neutral-900 mb-3">
                Family-Based Immigration
              </h3>
              <p className="text-neutral-700 mb-4">
                Reunite with loved ones. Navigate the process of bringing family members to the United States.
              </p>
              <Link href="/pathways/family" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Employment Visas */}
            <div className="card-pathway group">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-h3 font-bold text-neutral-900 mb-3">
                Employment Visas
              </h3>
              <p className="text-neutral-700 mb-4">
                Work in the United States. Explore employment-based visa options for professionals and workers.
              </p>
              <Link href="/pathways/employment" className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Citizenship */}
            <div className="card-pathway group">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Scale className="w-6 h-6 text-accent-700" />
              </div>
              <h3 className="text-h3 font-bold text-neutral-900 mb-3">
                Citizenship & Naturalization
              </h3>
              <p className="text-neutral-700 mb-4">
                Become a U.S. citizen. Understand the naturalization process and requirements.
              </p>
              <Link href="/pathways/citizenship" className="inline-flex items-center gap-2 text-accent-700 font-semibold hover:gap-3 transition-all">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/assessment" className="btn-primary inline-flex items-center gap-2">
              Take Our Free Assessment
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-h1 font-bold text-neutral-900 mb-4">
              Why Choose Blanca Correa Law
            </h2>
            <p className="text-body text-neutral-700 max-w-2xl mx-auto">
              Experience the difference of truly bilingual, culturally-informed immigration guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  Authentic Bilingual Service
                </h3>
                <p className="text-neutral-700">
                  Not just translation—culturally adapted content and communication in both English and Spanish.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  Local North Carolina Expertise
                </h3>
                <p className="text-neutral-700">
                  Deep understanding of regional USCIS offices, procedures, and the Triangle area immigrant community.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-accent-600 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  Human-Centered Approach
                </h3>
                <p className="text-neutral-700">
                  We understand the emotional journey of immigration and provide compassionate, personalized guidance.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                  <Scale className="w-5 h-5 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  Interactive Guidance Tools
                </h3>
                <p className="text-neutral-700">
                  Self-service assessment tools help you understand your options before your first consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-700">
        <div className="container-custom text-center">
          <h2 className="text-h1 font-bold text-white mb-6">
            Ready to Start Your Immigration Journey?
          </h2>
          <p className="text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
            Take the first step today. Schedule a consultation or use our free assessment tool to explore your options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation" className="bg-white text-primary px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:bg-primary-50 focus:ring-4 focus:ring-white/20 inline-flex items-center justify-center gap-2">
              Schedule Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/assessment" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:bg-white/10 focus:ring-4 focus:ring-white/20 inline-flex items-center justify-center gap-2">
              Free Assessment Tool
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
