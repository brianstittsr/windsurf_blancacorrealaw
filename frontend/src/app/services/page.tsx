import Link from 'next/link';
import { Heart, Briefcase, Flag, Shield, FileText, Users, ArrowRight, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Immigration Services - Blanca Correa Law',
  description: 'Comprehensive immigration legal services including family-based immigration, employment visas, citizenship, asylum, and more in North Carolina.',
};

export default function ServicesPage() {
  const services = [
    {
      icon: Heart,
      title: 'Family-Based Immigration',
      description: 'Reunite with your loved ones through family sponsorship petitions and green card applications.',
      features: [
        'Immediate relative petitions (spouses, parents, children)',
        'Family preference categories',
        'Fiancé(e) visas (K-1)',
        'Adjustment of status',
        'Consular processing',
      ],
      link: '/pathways/family',
      color: 'primary',
    },
    {
      icon: Briefcase,
      title: 'Employment-Based Immigration',
      description: 'Navigate work visa options and employment-based green cards for professionals and workers.',
      features: [
        'H-1B specialty occupation visas',
        'L-1 intracompany transfer visas',
        'TN NAFTA professional visas',
        'Employment-based green cards (EB-1, EB-2, EB-3)',
        'Labor certification (PERM)',
      ],
      link: '/pathways/employment',
      color: 'secondary',
    },
    {
      icon: Flag,
      title: 'Citizenship & Naturalization',
      description: 'Achieve your dream of becoming a U.S. citizen through the naturalization process.',
      features: [
        'Naturalization applications (N-400)',
        'Citizenship eligibility assessment',
        'Interview preparation',
        'Certificate of citizenship',
        'Derivative citizenship',
      ],
      link: '/pathways/citizenship',
      color: 'accent',
    },
    {
      icon: Shield,
      title: 'Asylum & Humanitarian Relief',
      description: 'Seek protection and safety through asylum and other humanitarian immigration options.',
      features: [
        'Asylum applications',
        'Withholding of removal',
        'Convention Against Torture (CAT)',
        'Special Immigrant Juvenile Status (SIJS)',
        'U visas for crime victims',
        'T visas for trafficking victims',
      ],
      link: '/pathways/asylum',
      color: 'primary',
    },
    {
      icon: FileText,
      title: 'Deportation Defense',
      description: 'Strong legal representation in removal proceedings and immigration court.',
      features: [
        'Removal defense',
        'Cancellation of removal',
        'Bond hearings',
        'Appeals to BIA and federal courts',
        'Motions to reopen or reconsider',
      ],
      link: '/services/deportation-defense',
      color: 'secondary',
    },
    {
      icon: Users,
      title: 'Other Immigration Services',
      description: 'Additional immigration services to meet your unique needs.',
      features: [
        'Travel documents and advance parole',
        'Work authorization (EAD)',
        'Waivers of inadmissibility',
        'Consular processing support',
        'Immigration status consultations',
      ],
      link: '/contact',
      color: 'accent',
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-display font-bold text-neutral-900 mb-6">
              Immigration Legal Services
            </h1>
            <p className="text-body text-neutral-700 mb-8">
              Comprehensive immigration law services tailored to your unique situation. 
              From family reunification to citizenship, we guide you through every step 
              of your immigration journey.
            </p>
            <Link href="/consultation" className="btn-primary inline-flex items-center gap-2">
              Schedule Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={service.title}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Icon & Title */}
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <div className={`w-16 h-16 bg-${service.color}/10 rounded-lg flex items-center justify-center mb-6`}>
                      <Icon className={`w-8 h-8 text-${service.color}`} />
                    </div>
                    <h2 className="text-h2 font-bold text-neutral-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-neutral-700 mb-6">
                      {service.description}
                    </p>
                    <Link 
                      href={service.link}
                      className={`inline-flex items-center gap-2 text-${service.color} font-semibold hover:gap-3 transition-all`}
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>

                  {/* Features List */}
                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <div className="bg-neutral-50 rounded-pathway p-8">
                      <h3 className="font-semibold text-neutral-900 mb-4">
                        Services Include:
                      </h3>
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <CheckCircle className={`w-5 h-5 text-${service.color} flex-shrink-0 mt-0.5`} />
                            <span className="text-neutral-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-h1 font-bold text-neutral-900 mb-4">
              How We Work With You
            </h2>
            <p className="text-body text-neutral-700 max-w-2xl mx-auto">
              Our proven process ensures you receive personalized attention and expert guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Initial Consultation
              </h3>
              <p className="text-neutral-700">
                We discuss your situation, goals, and immigration options in detail.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Case Assessment
              </h3>
              <p className="text-neutral-700">
                We evaluate your eligibility and develop a customized legal strategy.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Application Preparation
              </h3>
              <p className="text-neutral-700">
                We meticulously prepare and file your applications with supporting documentation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Ongoing Support
              </h3>
              <p className="text-neutral-700">
                We guide you through interviews, respond to requests, and keep you updated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h1 font-bold text-neutral-900 mb-12 text-center">
              Why Choose Blanca Correa Law
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 mb-2">
                    Bilingual Excellence
                  </h3>
                  <p className="text-neutral-700 text-sm">
                    Truly bilingual service with culturally adapted communication in English and Spanish.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 mb-2">
                    Local Expertise
                  </h3>
                  <p className="text-neutral-700 text-sm">
                    Deep knowledge of North Carolina USCIS offices and regional procedures.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-accent-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 mb-2">
                    Personalized Attention
                  </h3>
                  <p className="text-neutral-700 text-sm">
                    Direct access to your attorney, not just paralegals or assistants.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 mb-2">
                    Transparent Pricing
                  </h3>
                  <p className="text-neutral-700 text-sm">
                    Clear fee structures with no hidden costs or surprise charges.
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
            Take the first step toward your immigration goals. Schedule a consultation to discuss your case.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/consultation" 
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:bg-primary-50 focus:ring-4 focus:ring-white/20 inline-flex items-center justify-center gap-2"
            >
              Schedule Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/assessment" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:bg-white/10 focus:ring-4 focus:ring-white/20 inline-flex items-center justify-center gap-2"
            >
              Take Free Assessment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
