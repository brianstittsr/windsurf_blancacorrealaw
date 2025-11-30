import Link from 'next/link';
import { Flag, ArrowRight, CheckCircle, Clock, FileText, BookOpen, AlertCircle, Award } from 'lucide-react';

export const metadata = {
  title: 'Citizenship & Naturalization - Blanca Correa Law',
  description: 'Achieve your dream of U.S. citizenship. Expert guidance on naturalization, citizenship tests, and the path to becoming an American citizen in North Carolina.',
};

export default function CitizenshipPage() {
  const eligibilityPaths = [
    {
      title: '5-Year Rule',
      description: 'Most common path for permanent residents',
      icon: Clock,
      requirements: [
        'Permanent resident for at least 5 years',
        'Physically present in U.S. for at least 30 months',
        'Continuous residence in the U.S.',
        'Good moral character',
        'English and civics knowledge',
      ],
    },
    {
      title: '3-Year Rule (Spouse of U.S. Citizen)',
      description: 'Faster path for spouses of citizens',
      icon: CheckCircle,
      requirements: [
        'Married to U.S. citizen for at least 3 years',
        'Permanent resident for at least 3 years',
        'Living with citizen spouse',
        'Spouse has been citizen for 3 years',
        'Good moral character',
      ],
    },
    {
      title: 'Military Service',
      description: 'Special provisions for service members',
      icon: Award,
      requirements: [
        'Honorable service in U.S. Armed Forces',
        'May apply during service or within 6 months of discharge',
        'Reduced or waived residence requirements',
        'Good moral character',
        'English and civics knowledge',
      ],
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Determine Eligibility',
      description: 'Confirm you meet all requirements for naturalization based on your circumstances.',
      duration: '1-2 weeks',
      details: [
        'Calculate continuous residence',
        'Review travel history',
        'Assess good moral character',
        'Verify English proficiency',
      ],
    },
    {
      step: 2,
      title: 'Prepare Application',
      description: 'Complete Form N-400 and gather all required supporting documentation.',
      duration: '2-4 weeks',
      details: [
        'Complete N-400 application',
        'Gather supporting documents',
        'Prepare for potential issues',
        'Review application thoroughly',
      ],
    },
    {
      step: 3,
      title: 'Submit Application',
      description: 'File Form N-400 with USCIS along with required fees and documentation.',
      duration: '1 week',
      details: [
        'Submit application package',
        'Pay filing fees',
        'Receive receipt notice',
        'Track case status',
      ],
    },
    {
      step: 4,
      title: 'Biometrics Appointment',
      description: 'Attend appointment for fingerprinting and background check.',
      duration: '1-3 months wait',
      details: [
        'Receive biometrics notice',
        'Attend appointment',
        'Background check conducted',
        'FBI clearance obtained',
      ],
    },
    {
      step: 5,
      title: 'Citizenship Interview',
      description: 'Complete English and civics test and answer questions about your application.',
      duration: '8-18 months wait',
      details: [
        'Receive interview notice',
        'Study for civics test',
        'Prepare for English test',
        'Review application details',
      ],
    },
    {
      step: 6,
      title: 'Oath Ceremony',
      description: 'Take the Oath of Allegiance and receive your Certificate of Naturalization.',
      duration: '1-6 months',
      details: [
        'Receive oath ceremony notice',
        'Attend ceremony',
        'Take Oath of Allegiance',
        'Receive citizenship certificate',
      ],
    },
  ];

  const testPreparation = [
    {
      test: 'English Test',
      components: [
        'Speaking: Ability to speak and understand English',
        'Reading: Read one out of three sentences correctly',
        'Writing: Write one out of three sentences correctly',
      ],
      tips: [
        'Practice with USCIS vocabulary lists',
        'Take practice tests online',
        'Consider ESL classes if needed',
      ],
    },
    {
      test: 'Civics Test',
      components: [
        '100 possible questions about U.S. history and government',
        'Must answer 6 out of 10 questions correctly',
        'Questions asked orally during interview',
      ],
      tips: [
        'Study official USCIS 100 questions',
        'Use flashcards and practice apps',
        'Understand concepts, not just memorize',
      ],
    },
  ];

  const benefits = [
    {
      title: 'Voting Rights',
      description: 'Participate in federal, state, and local elections',
      icon: CheckCircle,
    },
    {
      title: 'U.S. Passport',
      description: 'Travel freely with one of the world\'s most powerful passports',
      icon: Flag,
    },
    {
      title: 'Federal Jobs',
      description: 'Access to federal employment opportunities',
      icon: Briefcase,
    },
    {
      title: 'Family Sponsorship',
      description: 'Sponsor family members with shorter wait times',
      icon: Users,
    },
    {
      title: 'No Deportation Risk',
      description: 'Cannot be deported (with rare exceptions)',
      icon: Shield,
    },
    {
      title: 'Citizenship for Children',
      description: 'Automatic citizenship for children born abroad',
      icon: Heart,
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent-50 via-white to-primary-50 py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-soft mb-6">
                <Flag className="w-4 h-4 text-accent-700" />
                <span className="text-sm font-medium text-neutral-700">
                  Citizenship & Naturalization
                </span>
              </div>
              
              <h1 className="text-display font-bold text-neutral-900 mb-6">
                Become a U.S. Citizen
              </h1>
              
              <p className="text-body text-neutral-700 mb-8">
                Achieving U.S. citizenship is a significant milestone. We guide you through every 
                step of the naturalization process, from eligibility assessment to oath ceremony.
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
                  <Clock className="w-5 h-5 text-accent-700 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-neutral-900">Processing Time</p>
                    <p className="text-sm text-neutral-600">10-24 months total</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <FileText className="w-5 h-5 text-accent-700 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-neutral-900">Main Form</p>
                    <p className="text-sm text-neutral-600">Form N-400 (Application for Naturalization)</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <BookOpen className="w-5 h-5 text-accent-700 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-neutral-900">Tests Required</p>
                    <p className="text-sm text-neutral-600">English and U.S. Civics (with exceptions)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Paths */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-h1 font-bold text-neutral-900 mb-4">
              Paths to Citizenship
            </h2>
            <p className="text-body text-neutral-700 max-w-2xl mx-auto">
              Different eligibility requirements apply based on your circumstances.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {eligibilityPaths.map((path) => {
              const Icon = path.icon;
              return (
                <div key={path.title} className="card-pathway">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-accent-700" />
                  </div>
                  
                  <h3 className="text-h3 font-bold text-neutral-900 mb-2">
                    {path.title}
                  </h3>
                  <p className="text-sm text-neutral-600 mb-6">{path.description}</p>
                  
                  <ul className="space-y-3">
                    {path.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-2 text-neutral-700">
                        <CheckCircle className="w-5 h-5 text-accent-700 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
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
              The Naturalization Process
            </h2>
            <p className="text-body text-neutral-700 max-w-2xl mx-auto">
              From application to oath ceremony, here's what to expect on your journey to citizenship.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {processSteps.map((step, index) => (
                <div key={step.step} className="bg-white rounded-pathway p-6 shadow-soft">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-accent-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-neutral-900 mb-1">
                        {step.title}
                      </h3>
                      <span className="text-xs font-medium text-accent-700 bg-accent-50 px-2 py-1 rounded">
                        {step.duration}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-neutral-700 mb-4">{step.description}</p>
                  
                  <ul className="space-y-2">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-sm text-neutral-600">
                        <CheckCircle className="w-4 h-4 text-accent-700 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Test Preparation */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-h1 font-bold text-neutral-900 mb-4">
              Test Preparation
            </h2>
            <p className="text-body text-neutral-700 max-w-2xl mx-auto">
              We help you prepare for both the English and civics tests required for naturalization.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testPreparation.map((test) => (
              <div key={test.test} className="bg-accent-50 rounded-pathway p-8">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="w-8 h-8 text-accent-700" />
                  <h3 className="text-h3 font-bold text-neutral-900">
                    {test.test}
                  </h3>
                </div>
                
                <div className="mb-6">
                  <p className="font-semibold text-neutral-900 mb-3">Components:</p>
                  <ul className="space-y-2">
                    {test.components.map((component) => (
                      <li key={component} className="flex items-start gap-2 text-neutral-700">
                        <CheckCircle className="w-5 h-5 text-accent-700 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{component}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <p className="font-semibold text-neutral-900 mb-3">Preparation Tips:</p>
                  <ul className="space-y-2">
                    {test.tips.map((tip) => (
                      <li key={tip} className="flex items-start gap-2 text-neutral-700">
                        <ArrowRight className="w-5 h-5 text-accent-700 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-neutral-50 rounded-lg p-6 max-w-2xl mx-auto">
              <h4 className="font-bold text-neutral-900 mb-3">Test Exemptions & Accommodations</h4>
              <p className="text-neutral-700 text-sm mb-4">
                Some applicants may qualify for exemptions from the English test or accommodations 
                based on age, time as permanent resident, or medical conditions.
              </p>
              <Link href="/consultation" className="text-accent-700 font-semibold hover:text-accent-800 inline-flex items-center gap-2">
                Learn if you qualify
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Citizenship */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-h1 font-bold text-neutral-900 mb-4">
              Benefits of U.S. Citizenship
            </h2>
            <p className="text-body text-neutral-700 max-w-2xl mx-auto">
              Citizenship provides rights and privileges that permanent residence does not offer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="bg-white rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-accent-700" />
                  </div>
                  <h3 className="font-bold text-neutral-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-neutral-600">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h1 font-bold text-neutral-900 mb-8 text-center">
              Common Issues & How We Help
            </h2>
            
            <div className="space-y-6">
              <div className="bg-neutral-50 rounded-lg p-6 border-l-4 border-accent-600">
                <div className="flex gap-4">
                  <AlertCircle className="w-6 h-6 text-accent-700 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-neutral-900 mb-2">Travel History Concerns</h3>
                    <p className="text-neutral-700 mb-2">
                      Extended trips abroad can break continuous residence or raise questions about U.S. ties.
                    </p>
                    <p className="text-sm text-neutral-600">
                      <strong>Our Solution:</strong> We analyze your travel history, calculate continuous 
                      residence, and prepare explanations for any extended absences.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-50 rounded-lg p-6 border-l-4 border-primary">
                <div className="flex gap-4">
                  <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-neutral-900 mb-2">Criminal History</h3>
                    <p className="text-neutral-700 mb-2">
                      Certain criminal convictions can affect good moral character and citizenship eligibility.
                    </p>
                    <p className="text-sm text-neutral-600">
                      <strong>Our Solution:</strong> We review your criminal history, determine impact on 
                      eligibility, and develop strategies to address concerns.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-50 rounded-lg p-6 border-l-4 border-secondary">
                <div className="flex gap-4">
                  <AlertCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-neutral-900 mb-2">Tax Compliance</h3>
                    <p className="text-neutral-700 mb-2">
                      USCIS reviews tax filing history as part of the good moral character assessment.
                    </p>
                    <p className="text-sm text-neutral-600">
                      <strong>Our Solution:</strong> We help ensure your tax records are in order and 
                      address any filing issues before applying.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent-600 to-accent-700">
        <div className="container-custom text-center">
          <h2 className="text-h1 font-bold text-white mb-6">
            Ready to Become a U.S. Citizen?
          </h2>
          <p className="text-xl text-accent-50 mb-8 max-w-2xl mx-auto">
            Let us guide you through the naturalization process. Schedule a consultation 
            to assess your eligibility and begin your journey to citizenship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/consultation" 
              className="bg-white text-accent-700 px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:bg-accent-50 focus:ring-4 focus:ring-white/20 inline-flex items-center justify-center gap-2"
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

// Import missing icons
import { Briefcase, Users, Shield, Heart } from 'lucide-react';
