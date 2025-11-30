import Link from 'next/link';
import { Heart, ArrowRight, CheckCircle, Clock, FileText, Users, AlertCircle } from 'lucide-react';

export const metadata = {
  title: 'Family-Based Immigration - Blanca Correa Law',
  description: 'Reunite with your loved ones through family-based immigration. Expert guidance on spouse visas, parent petitions, and family green cards in North Carolina.',
};

export default function FamilyImmigrationPage() {
  const processSteps = [
    {
      step: 1,
      title: 'Determine Eligibility',
      description: 'Assess your relationship and determine which family-based category applies to your situation.',
      duration: '1-2 weeks',
    },
    {
      step: 2,
      title: 'File Petition (Form I-130)',
      description: 'Submit the immigrant petition for your family member with supporting documentation.',
      duration: '12-24 months',
    },
    {
      step: 3,
      title: 'Wait for Priority Date',
      description: 'For preference categories, wait until your priority date becomes current.',
      duration: 'Varies by category',
    },
    {
      step: 4,
      title: 'Apply for Green Card',
      description: 'File adjustment of status (if in U.S.) or consular processing (if abroad).',
      duration: '8-18 months',
    },
    {
      step: 5,
      title: 'Attend Interview',
      description: 'Complete biometrics and attend the immigration interview.',
      duration: '2-6 months',
    },
    {
      step: 6,
      title: 'Receive Green Card',
      description: 'Upon approval, your family member receives their permanent resident card.',
      duration: '2-4 weeks',
    },
  ];

  const categories = [
    {
      title: 'Immediate Relatives (No Wait Time)',
      icon: Heart,
      color: 'primary',
      relationships: [
        'Spouses of U.S. citizens',
        'Unmarried children under 21 of U.S. citizens',
        'Parents of U.S. citizens (if petitioner is 21+)',
      ],
      benefits: [
        'No annual quota limits',
        'Fastest processing times',
        'Can apply for work authorization immediately',
      ],
    },
    {
      title: 'Family Preference Categories',
      icon: Users,
      color: 'secondary',
      relationships: [
        'F1: Unmarried adult children of U.S. citizens',
        'F2A: Spouses and children of green card holders',
        'F2B: Unmarried adult children of green card holders',
        'F3: Married children of U.S. citizens',
        'F4: Siblings of U.S. citizens (if petitioner is 21+)',
      ],
      benefits: [
        'Path to permanent residence',
        'Can eventually sponsor other family members',
        'Access to U.S. education and healthcare',
      ],
    },
  ];

  const requirements = [
    {
      title: 'Petitioner Requirements',
      items: [
        'Must be a U.S. citizen or lawful permanent resident',
        'Must be at least 21 years old (for some categories)',
        'Must meet minimum income requirements (Form I-864)',
        'Must prove genuine family relationship',
      ],
    },
    {
      title: 'Beneficiary Requirements',
      items: [
        'Must have qualifying family relationship',
        'Must be admissible to the United States',
        'Must not have certain criminal or immigration violations',
        'Must undergo medical examination',
      ],
    },
    {
      title: 'Documentation Needed',
      items: [
        'Proof of U.S. citizenship or permanent residence',
        'Birth certificates and marriage certificates',
        'Proof of termination of previous marriages',
        'Financial documents (tax returns, pay stubs)',
        'Police certificates and medical records',
      ],
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-soft mb-6">
                <Heart className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-neutral-700">
                  Family-Based Immigration
                </span>
              </div>
              
              <h1 className="text-display font-bold text-neutral-900 mb-6">
                Reunite With Your Loved Ones
              </h1>
              
              <p className="text-body text-neutral-700 mb-8">
                Family is everything. We help U.S. citizens and permanent residents bring their 
                family members to the United States through the family-based immigration process.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/consultation" className="btn-primary inline-flex items-center justify-center gap-2">
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/assessment" className="btn-outline inline-flex items-center justify-center gap-2">
                  Check Eligibility
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-pathway shadow-card p-8">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">
                Quick Facts
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-neutral-900">Processing Time</p>
                    <p className="text-sm text-neutral-600">12-36 months (varies by category)</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-neutral-900">Main Form</p>
                    <p className="text-sm text-neutral-600">Form I-130 (Petition for Alien Relative)</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Users className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-neutral-900">Who Can Petition</p>
                    <p className="text-sm text-neutral-600">U.S. citizens and green card holders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-h1 font-bold text-neutral-900 mb-4">
              Family Immigration Categories
            </h2>
            <p className="text-body text-neutral-700 max-w-2xl mx-auto">
              Different family relationships fall into different categories, each with its own 
              processing times and requirements.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.title} className="card-pathway">
                  <div className={`w-12 h-12 bg-${category.color}/10 rounded-lg flex items-center justify-center mb-6`}>
                    <Icon className={`w-6 h-6 text-${category.color}`} />
                  </div>
                  
                  <h3 className="text-h3 font-bold text-neutral-900 mb-4">
                    {category.title}
                  </h3>
                  
                  <div className="mb-6">
                    <p className="font-semibold text-neutral-900 mb-3">Eligible Relationships:</p>
                    <ul className="space-y-2">
                      {category.relationships.map((rel) => (
                        <li key={rel} className="flex items-start gap-2 text-neutral-700">
                          <CheckCircle className={`w-5 h-5 text-${category.color} flex-shrink-0 mt-0.5`} />
                          <span>{rel}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-neutral-900 mb-3">Benefits:</p>
                    <ul className="space-y-2">
                      {category.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2 text-neutral-700">
                          <CheckCircle className={`w-5 h-5 text-${category.color} flex-shrink-0 mt-0.5`} />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-h1 font-bold text-neutral-900 mb-4">
              The Family Immigration Process
            </h2>
            <p className="text-body text-neutral-700 max-w-2xl mx-auto">
              Understanding the steps involved helps you prepare for your family's immigration journey.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={step.step} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                      {step.step}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="w-0.5 h-16 bg-primary/20 mx-auto mt-4" />
                    )}
                  </div>
                  
                  <div className="flex-1 pb-8">
                    <div className="bg-white rounded-lg p-6 shadow-soft">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-neutral-900">
                          {step.title}
                        </h3>
                        <span className="text-sm font-medium text-primary bg-primary-50 px-3 py-1 rounded-full">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-neutral-700">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-h1 font-bold text-neutral-900 mb-4">
              Requirements & Documentation
            </h2>
            <p className="text-body text-neutral-700 max-w-2xl mx-auto">
              Proper documentation is crucial for a successful family immigration petition.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {requirements.map((req) => (
              <div key={req.title} className="bg-neutral-50 rounded-pathway p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-4">
                  {req.title}
                </h3>
                <ul className="space-y-3">
                  {req.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-neutral-700">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Challenges */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h1 font-bold text-neutral-900 mb-8 text-center">
              Common Challenges & How We Help
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border-l-4 border-primary">
                <div className="flex gap-4">
                  <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-neutral-900 mb-2">Long Wait Times</h3>
                    <p className="text-neutral-700 mb-2">
                      Some family preference categories have wait times of several years.
                    </p>
                    <p className="text-sm text-neutral-600">
                      <strong>Our Solution:</strong> We help you understand realistic timelines and explore 
                      alternative options that may be faster.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border-l-4 border-secondary">
                <div className="flex gap-4">
                  <AlertCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-neutral-900 mb-2">Income Requirements</h3>
                    <p className="text-neutral-700 mb-2">
                      Petitioners must meet minimum income thresholds to sponsor family members.
                    </p>
                    <p className="text-sm text-neutral-600">
                      <strong>Our Solution:</strong> We guide you through using joint sponsors or 
                      alternative evidence of financial support.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border-l-4 border-accent-600">
                <div className="flex gap-4">
                  <AlertCircle className="w-6 h-6 text-accent-700 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-neutral-900 mb-2">Proving Genuine Relationships</h3>
                    <p className="text-neutral-700 mb-2">
                      USCIS carefully scrutinizes family relationships, especially marriages.
                    </p>
                    <p className="text-sm text-neutral-600">
                      <strong>Our Solution:</strong> We help you compile compelling evidence and prepare 
                      for interviews to demonstrate the authenticity of your relationship.
                    </p>
                  </div>
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
            Ready to Bring Your Family Together?
          </h2>
          <p className="text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
            Let us guide you through the family immigration process. Schedule a consultation 
            to discuss your specific situation and explore your options.
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
              href="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:bg-white/10 focus:ring-4 focus:ring-white/20 inline-flex items-center justify-center gap-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
