import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Heart, Users, Scale, Shield, FileText, Globe } from 'lucide-react';

export const metadata = {
  title: 'Immigration Pathways - Blanca Correa Law',
  description: 'Explore your immigration options. Family-based immigration, employment visas, citizenship, and humanitarian relief services in North Carolina.',
};

export default function PathwaysPage() {
  const pathways = [
    {
      icon: Heart,
      title: 'Family-Based Immigration',
      description: 'Reunite with your loved ones through family sponsorship. We handle spouse, parent, child, and sibling petitions with care and precision.',
      features: [
        'Immediate relative petitions',
        'Family preference categories',
        'Fiancé(e) visas (K-1)',
        'Adjustment of status',
      ],
      link: '/pathways/family',
      color: 'primary',
    },
    {
      icon: Users,
      title: 'Employment-Based Immigration',
      description: 'Navigate work visa options and employment-based green cards for professionals, skilled workers, and investors.',
      features: [
        'H-1B specialty occupation visas',
        'L-1 intracompany transfers',
        'Employment-based green cards',
        'Labor certification (PERM)',
      ],
      link: '/pathways/employment',
      color: 'secondary',
    },
    {
      icon: Scale,
      title: 'Citizenship & Naturalization',
      description: 'Achieve your dream of becoming a U.S. citizen. We guide you through the naturalization process from start to finish.',
      features: [
        'N-400 applications',
        'Citizenship eligibility assessment',
        'Interview preparation',
        'Derivative citizenship',
      ],
      link: '/pathways/citizenship',
      color: 'accent',
    },
    {
      icon: Shield,
      title: 'Humanitarian Relief',
      description: 'Seek protection and safety through asylum, VAWA, and other humanitarian immigration options.',
      features: [
        'Asylum applications',
        'VAWA self-petitions',
        'U visas for crime victims',
        'T visas for trafficking survivors',
      ],
      link: '/services',
      color: 'secondary',
    },
    {
      icon: FileText,
      title: 'Adjustment of Status',
      description: 'Apply for a green card while remaining in the United States. We ensure your application is complete and accurate.',
      features: [
        'Form I-485 preparation',
        'Supporting documentation',
        'Interview preparation',
        'Work authorization (EAD)',
      ],
      link: '/services',
      color: 'primary',
    },
    {
      icon: Globe,
      title: 'Consular Processing',
      description: 'Obtain your immigrant visa through a U.S. embassy or consulate abroad with our comprehensive support.',
      features: [
        'DS-260 preparation',
        'Document collection',
        'Interview guidance',
        'Visa issuance support',
      ],
      link: '/services',
      color: 'accent',
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-neutral-50 to-white overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
                Immigration Pathways
              </p>
              <h1 className="text-4xl md:text-5xl font-serif font-semibold text-neutral-800 leading-tight mb-6">
                Find Your Path to the United States
              </h1>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                Every immigration journey is unique. We help you understand your options 
                and guide you through the process with clarity and care.
              </p>
              <Link href="/consultation" className="btn-primary inline-flex items-center gap-2">
                Schedule a Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative hidden lg:block">
              <Image
                src="/images/statue-liberty.jpg"
                alt="Statue of Liberty - Symbol of American Immigration"
                width={500}
                height={400}
                className="rounded-2xl shadow-lg object-cover"
              />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pathways Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-neutral-800 mb-4">
              Explore Your Options
            </h2>
            <p className="text-neutral-600">
              Select a pathway below to learn more about your immigration options 
              and how we can assist you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pathways.map((pathway) => {
              const Icon = pathway.icon;
              return (
                <div key={pathway.title} className="card-elegant group">
                  <div className={`w-14 h-14 bg-${pathway.color}/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-${pathway.color}/20 transition-colors`}>
                    <Icon className={`w-7 h-7 text-${pathway.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                    {pathway.title}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-4 leading-relaxed">
                    {pathway.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {pathway.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-neutral-600">
                        <div className={`w-1.5 h-1.5 rounded-full bg-${pathway.color}`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={pathway.link}
                    className={`inline-flex items-center gap-2 text-${pathway.color} font-medium text-sm hover:gap-3 transition-all`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Assessment CTA */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-neutral-800 mb-4">
              Not Sure Which Pathway is Right for You?
            </h2>
            <p className="text-neutral-600 mb-8">
              Take our free assessment to help identify your immigration options, 
              or schedule a consultation to discuss your specific situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/assessment" className="btn-primary inline-flex items-center justify-center gap-2">
                Take Free Assessment
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/consultation" className="btn-outline inline-flex items-center justify-center gap-2">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white border-t border-neutral-200">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-neutral-600">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>Licensed Immigration Attorney</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-primary" />
              <span>Bilingual Services</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-primary" />
              <span>Compassionate Guidance</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
