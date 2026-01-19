import Link from 'next/link';
import { ArrowRight, FileText, ExternalLink, BookOpen, HelpCircle, Download, Shield } from 'lucide-react';

export const metadata = {
  title: 'Immigration Resources - Blanca Correa Law',
  description: 'Helpful immigration resources, guides, and information. Learn about the immigration process, forms, and frequently asked questions.',
};

export default function ResourcesPage() {
  const guides = [
    {
      title: 'Understanding Family-Based Immigration',
      description: 'A comprehensive guide to bringing family members to the United States through sponsorship.',
      category: 'Family Immigration',
      link: '/pathways/family',
    },
    {
      title: 'The Naturalization Process Explained',
      description: 'Step-by-step overview of becoming a U.S. citizen through naturalization.',
      category: 'Citizenship',
      link: '/pathways/citizenship',
    },
    {
      title: 'Employment Visa Options',
      description: 'Overview of work visas and employment-based green card categories.',
      category: 'Employment',
      link: '/pathways/employment',
    },
    {
      title: 'Preparing for Your USCIS Interview',
      description: 'Tips and guidance for a successful immigration interview.',
      category: 'General',
      link: '/consultation',
    },
  ];

  const usefulLinks = [
    {
      title: 'USCIS Official Website',
      description: 'U.S. Citizenship and Immigration Services official portal.',
      url: 'https://www.uscis.gov',
    },
    {
      title: 'USCIS Case Status',
      description: 'Check the status of your pending immigration case.',
      url: 'https://egov.uscis.gov/casestatus/landing.do',
    },
    {
      title: 'USCIS Forms',
      description: 'Download official immigration forms and instructions.',
      url: 'https://www.uscis.gov/forms',
    },
    {
      title: 'Processing Times',
      description: 'Check current USCIS processing times by form type.',
      url: 'https://egov.uscis.gov/processing-times/',
    },
    {
      title: 'State Department Visa Information',
      description: 'Information about visa applications and consular processing.',
      url: 'https://travel.state.gov/content/travel/en/us-visas.html',
    },
    {
      title: 'Visa Bulletin',
      description: 'Monthly updates on visa availability dates.',
      url: 'https://travel.state.gov/content/travel/en/legal/visa-law0/visa-bulletin.html',
    },
  ];

  const faqs = [
    {
      question: 'How long does the immigration process take?',
      answer: 'Processing times vary significantly depending on the type of application, your country of origin, and current USCIS workloads. Family-based cases can range from several months to several years. We provide realistic timelines during your consultation.',
    },
    {
      question: 'What documents do I need for my immigration case?',
      answer: 'Required documents depend on your specific case type. Generally, you will need identity documents, proof of relationships, financial evidence, and supporting documentation. We provide a detailed checklist tailored to your case.',
    },
    {
      question: 'Can I work while my application is pending?',
      answer: 'In many cases, you can apply for work authorization (Employment Authorization Document) while your case is pending. Eligibility depends on your immigration status and the type of application filed.',
    },
    {
      question: 'What happens if my case is denied?',
      answer: 'If your case is denied, you may have options to appeal, file a motion to reopen, or explore alternative pathways. We review denial notices carefully and advise on the best course of action.',
    },
    {
      question: 'Do I need an attorney for my immigration case?',
      answer: 'While not legally required, having an experienced immigration attorney significantly improves your chances of success. Immigration law is complex, and errors can result in delays, denials, or serious consequences.',
    },
    {
      question: 'How much does immigration legal help cost?',
      answer: 'Fees vary based on the complexity of your case. We provide transparent pricing and discuss all costs during your initial consultation. We believe quality legal help should be accessible.',
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
              Resources
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-neutral-800 leading-tight mb-6">
              Immigration Resources & Guides
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Helpful information to support your immigration journey. 
              For personalized guidance, schedule a consultation with our office.
            </p>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-serif font-semibold text-neutral-800">
              Immigration Guides
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {guides.map((guide) => (
              <Link 
                key={guide.title}
                href={guide.link}
                className="card-elegant group flex flex-col"
              >
                <span className="text-xs font-medium text-primary uppercase tracking-wider mb-2">
                  {guide.category}
                </span>
                <h3 className="text-lg font-semibold text-neutral-800 mb-2 group-hover:text-primary transition-colors">
                  {guide.title}
                </h3>
                <p className="text-sm text-neutral-600 mb-4 flex-grow">
                  {guide.description}
                </p>
                <span className="inline-flex items-center gap-2 text-primary font-medium text-sm">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Useful Links Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-8">
            <ExternalLink className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-serif font-semibold text-neutral-800">
              Useful Government Links
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {usefulLinks.map((link) => (
              <a
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl border border-neutral-200 p-6 hover:shadow-md hover:border-primary/20 transition-all group"
              >
                <h3 className="font-semibold text-neutral-800 mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                  {link.title}
                  <ExternalLink className="w-4 h-4 text-neutral-400" />
                </h3>
                <p className="text-sm text-neutral-600">
                  {link.description}
                </p>
              </a>
            ))}
          </div>

          <p className="text-xs text-neutral-500 mt-6 text-center">
            These links are provided for informational purposes. We are not affiliated with these government websites.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-serif font-semibold text-neutral-800">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-neutral-200 pb-6">
                <h3 className="font-semibold text-neutral-800 mb-3">
                  {faq.question}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-700">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">
              Have Questions About Your Case?
            </h2>
            <p className="text-primary-100 mb-8">
              These resources provide general information. For advice specific to your 
              situation, schedule a consultation with our office.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/consultation" 
                className="bg-white text-primary-700 px-8 py-4 rounded-xl font-medium hover:bg-neutral-100 transition-colors inline-flex items-center justify-center gap-2"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/contact" 
                className="border border-white/30 text-white px-8 py-4 rounded-xl font-medium hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-neutral-100 border-t border-neutral-200">
        <div className="container-custom">
          <div className="flex items-start gap-3 max-w-4xl mx-auto">
            <Shield className="w-5 h-5 text-neutral-500 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-neutral-500">
              <strong>Disclaimer:</strong> The information provided on this page is for general 
              informational purposes only and does not constitute legal advice. Immigration law 
              is complex and changes frequently. For advice specific to your situation, please 
              schedule a consultation with our office.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
