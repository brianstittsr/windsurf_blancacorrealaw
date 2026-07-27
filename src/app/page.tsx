import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Shield, 
  Heart, 
  Scale, 
  FileText, 
  Users, 
  Globe,
  CheckCircle,
  Clock,
  MessageCircle,
  Award,
  Lock
} from 'lucide-react';
import SectionDivider from '@/components/SectionDivider';

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Hero Section - Soft, Elegant */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Decorative wave background */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="rgba(196, 150, 143, 0.1)" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
          <svg className="absolute top-0 right-0 w-1/2 h-full opacity-30" viewBox="0 0 400 400" preserveAspectRatio="none">
            <path fill="rgba(196, 150, 143, 0.15)" d="M400,0 Q350,200 400,400 L400,0Z"></path>
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-lg">
              <h1 className="text-4xl md:text-5xl font-serif font-medium text-neutral-800 leading-tight mb-6">
                Trusted Immigration Guidance<br />
                <span className="text-primary">with Compassion and Integrity</span>
              </h1>
              
              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                Experienced support to navigate your path to a new beginning.
              </p>
              
              <Link 
                href="/consultation" 
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-600 text-white px-8 py-4 rounded-full font-medium transition-all shadow-md hover:shadow-lg"
              >
                Schedule a Consultation
              </Link>
            </div>

            {/* Hero Image */}
            <div className="relative hidden lg:flex justify-end">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/lawyer-consultation.jpg"
                  alt="Professional immigration attorney"
                  width={450}
                  height={500}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="relative flex justify-center">
              <div className="relative">
                {/* Decorative background shape */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary-100 to-primary-50 rounded-full opacity-50"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/attorney-professional.jpg"
                    alt="Blanca Correa, Immigration Attorney"
                    width={350}
                    height={420}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <SectionDivider title="Meet the Founder" className="justify-start mb-6" />
              <h2 className="text-2xl md:text-3xl font-serif font-medium text-neutral-800 mb-2">
                Blanca Correa, Esq.
              </h2>
              <p className="text-primary font-medium mb-4">Dedicated Immigration Attorney</p>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Over 15 Years of Experience Helping Immigrant Families
              </p>

              <Link 
                href="/about" 
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Learn More About Blanca
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services - Icon Cards */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <SectionDivider title="Our Services" className="mb-12" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {/* Family-Based Immigration */}
            <Link href="/pathways/family" className="bg-white rounded-2xl p-6 text-center shadow-sm border border-neutral-100 hover:shadow-md hover:border-primary/20 transition-all group">
              <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-100 transition-colors">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-sm font-medium text-neutral-700">
                Family-Based Immigration
              </h3>
            </Link>

            {/* Adjustment of Status */}
            <Link href="/services" className="bg-white rounded-2xl p-6 text-center shadow-sm border border-neutral-100 hover:shadow-md hover:border-primary/20 transition-all group">
              <div className="w-16 h-16 bg-secondary-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary-100 transition-colors">
                <FileText className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-sm font-medium text-neutral-700">
                Adjustment of Status
              </h3>
            </Link>

            {/* Consular Processing */}
            <Link href="/services" className="bg-white rounded-2xl p-6 text-center shadow-sm border border-neutral-100 hover:shadow-md hover:border-primary/20 transition-all group">
              <div className="w-16 h-16 bg-accent-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-100 transition-colors">
                <Globe className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-sm font-medium text-neutral-700">
                Consular Processing
              </h3>
            </Link>

            {/* VAWA & Humanitarian */}
            <Link href="/services" className="bg-white rounded-2xl p-6 text-center shadow-sm border border-neutral-100 hover:shadow-md hover:border-primary/20 transition-all group">
              <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-100 transition-colors">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-sm font-medium text-neutral-700">
                VAWA & Humanitarian Relief
              </h3>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionDivider title="Why Choose Us?" className="mb-12" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Scale className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-sm font-medium text-neutral-700">Licensed & Accredited</h3>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-sm font-medium text-neutral-700">Confidential & Caring</h3>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-sm font-medium text-neutral-700">Bilingual Support</h3>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-sm font-medium text-neutral-700">Detail-Oriented Guidance</h3>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect - Process Steps */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <SectionDivider title="What to Expect" className="mb-12" />

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="relative inline-block mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-xl font-serif font-semibold text-primary">1</span>
                  </div>
                </div>
                <h3 className="font-serif font-medium text-neutral-800 mb-2">Initial Consultation</h3>
                <p className="text-sm text-neutral-600">
                  Take our easy assessment to understand the initial steps for your case.
                </p>
              </div>

              <div className="text-center">
                <div className="relative inline-block mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-xl font-serif font-semibold text-primary">2</span>
                  </div>
                </div>
                <h3 className="font-serif font-medium text-neutral-800 mb-2">Case Preparation</h3>
                <p className="text-sm text-neutral-600">
                  Select your priorities and concentration for your case review to continue.
                </p>
              </div>

              <div className="text-center">
                <div className="relative inline-block mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-xl font-serif font-semibold text-primary">3</span>
                  </div>
                </div>
                <h3 className="font-serif font-medium text-neutral-800 mb-2">Guidance & Support</h3>
                <p className="text-sm text-neutral-600">
                  Seek a flow for your interests and case to ensure the best for your pathway.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-medium text-neutral-800 mb-4">
              Ready to Begin Your Immigration Journey?
            </h2>
            <p className="text-neutral-600 mb-8">
              Contact us today to find out how we can assist you.
            </p>
            <Link 
              href="/consultation" 
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-medium transition-all"
            >
              — Get in Touch —
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Trust Strip */}
      <section className="py-6 bg-neutral-100 border-t border-neutral-200">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center items-center gap-8 text-xs text-neutral-500">
            <div className="flex items-center gap-2">
              <span>Member of</span>
              <span className="font-semibold">AILA</span>
            </div>
            <div>Licensed & Insured</div>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
