import Link from 'next/link';
import { Briefcase, ArrowRight, CheckCircle, Clock, FileText, Building, AlertCircle } from 'lucide-react';

export const metadata = {
  title: 'Employment-Based Immigration - Blanca Correa Law',
  description: 'Navigate work visas and employment-based green cards. Expert guidance on H-1B, L-1, TN visas, and employment immigration in North Carolina.',
};

export default function EmploymentImmigrationPage() {
  const visaTypes = [
    {
      title: 'H-1B Specialty Occupation',
      description: 'For professionals in specialty occupations requiring theoretical or technical expertise.',
      duration: 'Initial 3 years, extendable to 6 years',
      requirements: [
        'Bachelor\'s degree or higher (or equivalent)',
        'Job offer from U.S. employer',
        'Specialty occupation position',
        'Labor Condition Application (LCA) approved',
      ],
      benefits: [
        'Dual intent (can pursue green card)',
        'Spouse can apply for work authorization',
        'Can change employers with new petition',
      ],
    },
    {
      title: 'L-1 Intracompany Transfer',
      description: 'For employees transferring from a foreign office to a U.S. office of the same company.',
      duration: 'L-1A: up to 7 years, L-1B: up to 5 years',
      requirements: [
        'Worked for company abroad for 1 year in last 3 years',
        'Transferring to related U.S. company',
        'Manager/Executive (L-1A) or Specialized Knowledge (L-1B)',
        'Qualifying relationship between entities',
      ],
      benefits: [
        'No annual cap or lottery',
        'Faster processing available',
        'Path to green card (especially L-1A)',
      ],
    },
    {
      title: 'TN NAFTA Professional',
      description: 'For Canadian and Mexican citizens in certain professional occupations.',
      duration: 'Initial 3 years, renewable indefinitely',
      requirements: [
        'Canadian or Mexican citizenship',
        'Job offer in qualifying profession',
        'Required credentials for profession',
        'Temporary intent (not dual intent)',
      ],
      benefits: [
        'No annual cap',
        'Fast processing at port of entry',
        'Spouse and children can accompany',
      ],
    },
    {
      title: 'O-1 Extraordinary Ability',
      description: 'For individuals with extraordinary ability in sciences, arts, education, business, or athletics.',
      duration: 'Initial 3 years, renewable in 1-year increments',
      requirements: [
        'Extraordinary ability in field',
        'National or international recognition',
        'Substantial documentation of achievements',
        'Job offer or contract in field',
      ],
      benefits: [
        'No annual cap',
        'Dual intent allowed',
        'Can work for multiple employers',
      ],
    },
  ];

  const greenCardCategories = [
    {
      category: 'EB-1',
      title: 'Priority Workers',
      description: 'For individuals with extraordinary ability, outstanding professors/researchers, and multinational executives.',
      waitTime: 'Current (no backlog)',
      noLaborCert: true,
    },
    {
      category: 'EB-2',
      title: 'Advanced Degree Professionals',
      description: 'For professionals with advanced degrees or exceptional ability in sciences, arts, or business.',
      waitTime: '1-3 years (varies by country)',
      noLaborCert: false,
    },
    {
      category: 'EB-3',
      title: 'Skilled Workers & Professionals',
      description: 'For skilled workers, professionals with bachelor\'s degrees, and other workers.',
      waitTime: '2-5 years (varies by country)',
      noLaborCert: false,
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Determine Visa Category',
      description: 'Assess qualifications and job requirements to identify the most appropriate visa type.',
      duration: '1-2 weeks',
    },
    {
      step: 2,
      title: 'Employer Preparation',
      description: 'Employer files required applications (LCA, PERM, etc.) and gathers documentation.',
      duration: '2-6 months',
    },
    {
      step: 3,
      title: 'File Petition',
      description: 'Submit visa petition (Form I-129 for nonimmigrant, I-140 for immigrant) with USCIS.',
      duration: '3-8 months',
    },
    {
      step: 4,
      title: 'Visa Application',
      description: 'If outside U.S., apply for visa at consulate. If inside, file for status change.',
      duration: '2-4 months',
    },
    {
      step: 5,
      title: 'Entry/Status Change',
      description: 'Enter U.S. with visa or receive approval for status change.',
      duration: '1-2 weeks',
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-50 via-white to-primary-50 py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-soft mb-6">
                <Briefcase className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-neutral-700">
                  Employment-Based Immigration
                </span>
              </div>
              
              <h1 className="text-display font-bold text-neutral-900 mb-6">
                Build Your Career in the United States
              </h1>
              
              <p className="text-body text-neutral-700 mb-8">
                Whether you're a skilled professional, executive, or specialized worker, we help 
                you navigate work visas and employment-based green cards to achieve your career goals.
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
                  <Clock className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-neutral-900">Processing Time</p>
                    <p className="text-sm text-neutral-600">3-12 months (varies by visa type)</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <FileText className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-neutral-900">Main Forms</p>
                    <p className="text-sm text-neutral-600">I-129 (nonimmigrant), I-140 (immigrant)</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Building className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-neutral-900">Employer Required</p>
                    <p className="text-sm text-neutral-600">Most employment visas require sponsorship</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Visa Types */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-h1 font-bold text-neutral-900 mb-4">
              Common Work Visa Types
            </h2>
            <p className="text-body text-neutral-700 max-w-2xl mx-auto">
              Different visa categories serve different types of workers and employment situations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {visaTypes.map((visa) => (
              <div key={visa.title} className="card-pathway">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-h3 font-bold text-neutral-900">
                    {visa.title}
                  </h3>
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-secondary" />
                  </div>
                </div>
                
                <p className="text-neutral-700 mb-4">{visa.description}</p>
                
                <div className="bg-secondary-50 rounded-lg px-4 py-2 mb-6 inline-block">
                  <p className="text-sm font-medium text-secondary-900">
                    Duration: {visa.duration}
                  </p>
                </div>
                
                <div className="mb-6">
                  <p className="font-semibold text-neutral-900 mb-3">Requirements:</p>
                  <ul className="space-y-2">
                    {visa.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-2 text-sm text-neutral-700">
                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <p className="font-semibold text-neutral-900 mb-3">Key Benefits:</p>
                  <ul className="space-y-2">
                    {visa.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm text-neutral-700">
                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Green Card Categories */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-h1 font-bold text-neutral-900 mb-4">
              Employment-Based Green Cards
            </h2>
            <p className="text-body text-neutral-700 max-w-2xl mx-auto">
              Permanent residence through employment offers long-term stability and career flexibility.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {greenCardCategories.map((gc) => (
              <div key={gc.category} className="bg-white rounded-pathway p-6 shadow-card">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full text-white font-bold text-xl mb-3">
                    {gc.category}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    {gc.title}
                  </h3>
                </div>
                
                <p className="text-neutral-700 text-sm mb-4 text-center">
                  {gc.description}
                </p>
                
                <div className="space-y-3">
                  <div className="bg-neutral-50 rounded-lg p-3">
                    <p className="text-xs font-semibold text-neutral-600 mb-1">Wait Time</p>
                    <p className="text-sm font-medium text-neutral-900">{gc.waitTime}</p>
                  </div>
                  
                  {gc.noLaborCert && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <p className="text-xs font-semibold text-green-800">
                        ✓ No Labor Certification Required
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-h1 font-bold text-neutral-900 mb-4">
              The Employment Immigration Process
            </h2>
            <p className="text-body text-neutral-700 max-w-2xl mx-auto">
              Understanding the process helps you and your employer prepare effectively.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={step.step} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                      {step.step}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="w-0.5 h-16 bg-secondary/20 mx-auto mt-4" />
                    )}
                  </div>
                  
                  <div className="flex-1 pb-8">
                    <div className="bg-neutral-50 rounded-lg p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-neutral-900">
                          {step.title}
                        </h3>
                        <span className="text-sm font-medium text-secondary bg-secondary-50 px-3 py-1 rounded-full">
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

      {/* Common Challenges */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h1 font-bold text-neutral-900 mb-8 text-center">
              Common Challenges & Solutions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border-l-4 border-secondary">
                <div className="flex gap-4">
                  <AlertCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-neutral-900 mb-2">H-1B Lottery System</h3>
                    <p className="text-neutral-700 mb-2">
                      H-1B visas are subject to an annual cap and lottery system, making approval uncertain.
                    </p>
                    <p className="text-sm text-neutral-600">
                      <strong>Our Solution:</strong> We help identify alternative visa options (L-1, O-1, TN) 
                      and develop backup strategies if lottery is unsuccessful.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border-l-4 border-primary">
                <div className="flex gap-4">
                  <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-neutral-900 mb-2">Labor Certification Process</h3>
                    <p className="text-neutral-700 mb-2">
                      PERM labor certification requires proving no qualified U.S. workers are available.
                    </p>
                    <p className="text-sm text-neutral-600">
                      <strong>Our Solution:</strong> We guide employers through the recruitment process 
                      and ensure compliance with all DOL requirements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border-l-4 border-accent-600">
                <div className="flex gap-4">
                  <AlertCircle className="w-6 h-6 text-accent-700 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-neutral-900 mb-2">Maintaining Status</h3>
                    <p className="text-neutral-700 mb-2">
                      Changing employers or job duties can affect visa status and require new petitions.
                    </p>
                    <p className="text-sm text-neutral-600">
                      <strong>Our Solution:</strong> We advise on portability rules, timing of job changes, 
                      and ensure continuous legal status throughout transitions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Employers */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-h1 font-bold text-neutral-900 mb-6">
              For Employers
            </h2>
            <p className="text-body text-neutral-700 mb-8">
              Hiring international talent requires understanding complex immigration regulations. 
              We help employers navigate the sponsorship process efficiently and compliantly.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 text-left mb-8">
              <div className="bg-neutral-50 rounded-lg p-6">
                <h3 className="font-bold text-neutral-900 mb-3">We Help Employers With:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-neutral-700">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Determining appropriate visa categories</span>
                  </li>
                  <li className="flex items-start gap-2 text-neutral-700">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Labor Condition Applications (LCA)</span>
                  </li>
                  <li className="flex items-start gap-2 text-neutral-700">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>PERM labor certification</span>
                  </li>
                  <li className="flex items-start gap-2 text-neutral-700">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>I-9 compliance and audits</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-neutral-50 rounded-lg p-6">
                <h3 className="font-bold text-neutral-900 mb-3">Benefits of Working With Us:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-neutral-700">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Streamlined petition preparation</span>
                  </li>
                  <li className="flex items-start gap-2 text-neutral-700">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Reduced risk of RFEs and denials</span>
                  </li>
                  <li className="flex items-start gap-2 text-neutral-700">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Compliance with changing regulations</span>
                  </li>
                  <li className="flex items-start gap-2 text-neutral-700">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Dedicated support throughout process</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <Link href="/consultation" className="btn-primary inline-flex items-center gap-2">
              Schedule Employer Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-secondary to-secondary-700">
        <div className="container-custom text-center">
          <h2 className="text-h1 font-bold text-white mb-6">
            Ready to Advance Your Career?
          </h2>
          <p className="text-xl text-secondary-50 mb-8 max-w-2xl mx-auto">
            Let us help you navigate employment-based immigration. Schedule a consultation 
            to discuss your work visa or green card options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/consultation" 
              className="bg-white text-secondary px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:bg-secondary-50 focus:ring-4 focus:ring-white/20 inline-flex items-center justify-center gap-2"
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
