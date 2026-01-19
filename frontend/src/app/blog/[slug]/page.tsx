import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { notFound } from 'next/navigation';

const blogPosts: Record<string, {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  content: string;
}> = {
  'understanding-family-based-immigration-2024': {
    title: 'Understanding Family-Based Immigration in 2024: A Complete Guide',
    excerpt: 'Family-based immigration remains one of the most common pathways to lawful permanent residence in the United States.',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=80',
    category: 'Family Immigration',
    author: 'Blanca Correa, Esq.',
    date: 'January 15, 2024',
    readTime: '8 min read',
    content: `
## What is Family-Based Immigration?

Family-based immigration allows U.S. citizens and lawful permanent residents (green card holders) to sponsor certain family members for immigration to the United States. This pathway accounts for approximately two-thirds of all legal immigration to the U.S. each year.

## Who Can Sponsor Family Members?

### U.S. Citizens Can Sponsor:
- **Immediate Relatives** (no annual cap):
  - Spouse
  - Unmarried children under 21
  - Parents (if the citizen is 21 or older)

- **Family Preference Categories** (subject to annual limits):
  - Unmarried adult children (21 and older)
  - Married children of any age
  - Siblings (if the citizen is 21 or older)

### Green Card Holders Can Sponsor:
- Spouse
- Unmarried children (any age)

## The Process: Step by Step

### Step 1: File Form I-130 (Petition for Alien Relative)
The U.S. citizen or permanent resident sponsor files Form I-130 with USCIS to establish the qualifying family relationship.

### Step 2: Wait for Priority Date
For preference categories, you must wait until your priority date becomes current according to the Visa Bulletin.

### Step 3: Apply for Immigrant Visa or Adjustment of Status
- **If abroad**: Apply for an immigrant visa through consular processing
- **If in the U.S.**: File Form I-485 to adjust status to permanent resident

### Step 4: Attend Interview
Complete a visa interview at a U.S. consulate or USCIS office.

### Step 5: Receive Green Card
Upon approval, receive your green card and become a lawful permanent resident.

## Current Processing Times

Processing times vary significantly based on:
- The relationship category
- The country of birth of the beneficiary
- Current USCIS workloads

Immediate relatives typically see faster processing, while preference categories may involve multi-year waits.

## Common Challenges

1. **Proving the Relationship**: You must provide substantial evidence of the genuine nature of your family relationship.

2. **Financial Requirements**: Sponsors must demonstrate they can financially support the immigrant (Affidavit of Support).

3. **Inadmissibility Issues**: Prior immigration violations, criminal history, or health issues may create barriers.

## How We Can Help

Navigating family-based immigration requires careful attention to detail and thorough documentation. At The Correa Firm, we guide families through every step of this process, ensuring your petition is complete and accurate.

**Contact us today for a consultation to discuss your family's immigration options.**
    `,
  },
  'steps-to-us-citizenship-naturalization': {
    title: 'The 10 Steps to U.S. Citizenship Through Naturalization',
    excerpt: 'Becoming a U.S. citizen is a significant milestone. This comprehensive guide walks you through each step of the naturalization process.',
    image: 'https://images.unsplash.com/photo-1569974507005-6dc61f97fb5c?w=1200&q=80',
    category: 'Citizenship',
    author: 'Blanca Correa, Esq.',
    date: 'January 10, 2024',
    readTime: '12 min read',
    content: `
## The Path to U.S. Citizenship

Naturalization is the process by which a foreign national becomes a U.S. citizen. It's a significant step that grants you the full rights and responsibilities of citizenship, including the right to vote, hold certain government positions, and petition for family members.

## Eligibility Requirements

Before applying, you must meet these basic requirements:

- Be at least 18 years old
- Be a lawful permanent resident (green card holder)
- Have continuous residence in the U.S. for at least 5 years (or 3 years if married to a U.S. citizen)
- Be physically present in the U.S. for at least 30 months of the 5 years
- Live in the state where you apply for at least 3 months
- Demonstrate good moral character
- Pass English and civics tests
- Be willing to take the Oath of Allegiance

## The 10 Steps to Citizenship

### Step 1: Determine Your Eligibility
Review all requirements carefully. Use the USCIS eligibility calculator or consult with an immigration attorney to confirm you qualify.

### Step 2: Gather Required Documents
Collect:
- Copy of your green card
- Passport photos
- Tax returns for the past 5 years
- Travel records
- Marriage/divorce certificates (if applicable)
- Court records (if applicable)

### Step 3: Complete Form N-400
Fill out the Application for Naturalization carefully. Any errors or omissions can delay your case.

### Step 4: Pay the Filing Fee
The current fee is $725 ($640 application fee + $85 biometrics fee). Fee waivers are available for qualifying applicants.

### Step 5: Submit Your Application
File online through your USCIS account or mail your application to the appropriate USCIS lockbox.

### Step 6: Attend Biometrics Appointment
USCIS will schedule you for fingerprinting and photo capture at a local Application Support Center.

### Step 7: Complete the Interview
Attend your naturalization interview where a USCIS officer will:
- Review your application
- Test your English speaking, reading, and writing
- Administer the civics test (10 questions from a list of 100)

### Step 8: Receive a Decision
You'll receive one of three decisions:
- **Granted**: You passed and will be scheduled for the oath ceremony
- **Continued**: Additional documentation or a re-test is needed
- **Denied**: Your application was not approved (you may appeal)

### Step 9: Take the Oath of Allegiance
Attend your naturalization ceremony and take the Oath of Allegiance to the United States.

### Step 10: Receive Your Certificate of Naturalization
Congratulations! You are now a U.S. citizen. Apply for your U.S. passport and register to vote.

## The Civics Test

You must correctly answer 6 out of 10 questions about U.S. history and government. Study materials are available on the USCIS website.

**Sample Questions:**
- What is the supreme law of the land?
- What do we call the first ten amendments to the Constitution?
- How many U.S. Senators are there?

## Timeline Expectations

The naturalization process typically takes 8-12 months from application to oath ceremony, though times vary by location and individual circumstances.

## How We Can Help

The naturalization process can be complex, especially if you have travel history, past legal issues, or gaps in residence. The Correa Firm provides comprehensive naturalization assistance, including:

- Eligibility assessment
- Application preparation
- Interview preparation
- Civics test coaching

**Schedule a consultation to begin your journey to citizenship.**
    `,
  },
  'ice-detention-know-your-rights': {
    title: 'ICE Detention: Know Your Rights and What to Do',
    excerpt: 'If you or a loved one faces immigration detention, understanding your rights is crucial.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80',
    category: 'Immigration Rights',
    author: 'Blanca Correa, Esq.',
    date: 'January 5, 2024',
    readTime: '10 min read',
    content: `
## Understanding ICE Detention

Immigration and Customs Enforcement (ICE) detention is a serious matter that affects thousands of individuals and families each year. Whether you're personally at risk or supporting a loved one, knowing your rights and the process is essential.

## Your Constitutional Rights

**Everyone in the United States has certain rights, regardless of immigration status:**

### The Right to Remain Silent
- You do not have to answer questions about your immigration status, where you were born, or how you entered the country
- You can say: "I wish to remain silent" or "I want to speak to a lawyer"

### The Right to an Attorney
- You have the right to speak with an attorney before answering any questions
- If you cannot afford an attorney, you may be able to find free legal help

### The Right to Refuse Consent to Search
- ICE cannot search your home without a warrant signed by a judge
- You can say: "I do not consent to a search"

### The Right to a Hearing
- In most cases, you have the right to appear before an immigration judge

## What to Do If ICE Comes to Your Door

1. **Do not open the door** unless they have a warrant signed by a judge
2. **Ask to see the warrant** through a window or under the door
3. **Remain calm** and do not run or resist
4. **Do not sign anything** without speaking to an attorney
5. **Do not lie** or provide false documents

## What to Do If You Are Detained

### Immediately:
- Stay calm and do not resist
- State clearly: "I wish to remain silent and want to speak to a lawyer"
- Do not sign any documents, especially voluntary departure forms
- Memorize your A-number (alien registration number)

### Contact Family:
- You have the right to make phone calls
- Provide family with your A-number and location
- Ask them to contact an immigration attorney immediately

### At Your Hearing:
- You have the right to present your case to an immigration judge
- You may be eligible for bond (release while your case proceeds)
- You may have defenses to deportation

## Types of Relief from Removal

Even in detention, you may qualify for:

- **Asylum**: If you fear persecution in your home country
- **Cancellation of Removal**: For long-term residents with U.S. citizen or permanent resident family
- **VAWA**: For victims of domestic violence
- **U Visa**: For victims of certain crimes who assisted law enforcement
- **Withholding of Removal**: If you face torture or persecution

## Finding a Detained Person

If a family member has been detained:

1. **Call the ICE Detainee Locator**: 1-888-351-4024
2. **Search online**: https://locator.ice.gov
3. **Contact local ICE field offices**
4. **Reach out to immigrant advocacy organizations**

## Bond Hearings

Many detained individuals are eligible for bond, which allows release while the case proceeds. Factors considered include:

- Flight risk (likelihood of appearing at future hearings)
- Danger to the community
- Immigration history
- Family ties in the U.S.
- Employment history

## How We Can Help

Immigration detention is frightening, but you don't have to face it alone. The Correa Firm provides:

- **Emergency consultations** for detained individuals
- **Bond hearing representation**
- **Defense against deportation**
- **Family support and guidance**

## Important Resources

- **National Immigrant Justice Center**: 312-660-1370
- **American Immigration Lawyers Association**: aila.org
- **ICE Detainee Locator**: locator.ice.gov

**If you or a loved one is facing detention, contact us immediately for urgent assistance.**
    `,
  },
  'green-card-through-marriage': {
    title: 'How to Get a Green Card Through Marriage: Process & Timeline',
    excerpt: 'Marriage to a U.S. citizen or permanent resident can provide a path to a green card.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80',
    category: 'Family Immigration',
    author: 'Blanca Correa, Esq.',
    date: 'December 28, 2023',
    readTime: '9 min read',
    content: `
## Marriage-Based Green Cards

Marriage to a U.S. citizen or lawful permanent resident is one of the most common paths to obtaining a green card. However, the process requires careful documentation and attention to detail.

## Two Pathways

### Spouse of U.S. Citizen
- Considered an "immediate relative"
- No annual visa limits
- Faster processing times

### Spouse of Green Card Holder
- Falls under preference category
- Subject to annual visa limits
- Longer wait times

## The Process

### Step 1: File Form I-130
The U.S. citizen or permanent resident spouse files a petition to establish the marital relationship.

### Step 2: Adjustment of Status or Consular Processing
- **In the U.S.**: File Form I-485 to adjust status
- **Abroad**: Process through a U.S. consulate

### Step 3: Attend Interview
Both spouses attend an interview to verify the marriage is genuine.

### Step 4: Receive Green Card
- If married less than 2 years: Receive conditional 2-year green card
- If married 2+ years: Receive 10-year green card

## Conditional Green Card

If you've been married less than 2 years when your green card is approved, you'll receive a conditional green card valid for 2 years. Before it expires, you must file Form I-751 to remove conditions.

## Proving a Bona Fide Marriage

USCIS will look for evidence that your marriage is genuine:
- Joint bank accounts
- Joint lease or mortgage
- Joint insurance policies
- Photos together over time
- Birth certificates of children
- Affidavits from friends and family

## Timeline

- **Spouse of U.S. Citizen (in U.S.)**: 12-18 months
- **Spouse of U.S. Citizen (abroad)**: 10-14 months
- **Spouse of Green Card Holder**: 2-3+ years

## Contact Us

Marriage-based immigration cases require thorough preparation. Contact The Correa Firm for guidance through this important process.
    `,
  },
  'work-permits-ead-explained': {
    title: 'Work Permits (EAD) Explained: Who Qualifies and How to Apply',
    excerpt: 'An Employment Authorization Document allows certain immigrants to work legally in the U.S.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80',
    category: 'Employment',
    author: 'Blanca Correa, Esq.',
    date: 'December 20, 2023',
    readTime: '7 min read',
    content: `
## What is an EAD?

An Employment Authorization Document (EAD), commonly called a work permit, is an identity document that proves you are authorized to work in the United States.

## Who Needs an EAD?

Not everyone needs an EAD to work. The following groups are authorized to work without one:
- U.S. citizens
- Lawful permanent residents (green card holders)
- Certain visa holders (H-1B, L-1, etc.)

## Who Can Apply for an EAD?

Common categories include:
- Adjustment of status applicants
- Asylum applicants (after 180 days)
- DACA recipients
- TPS holders
- Certain visa holders' spouses
- Students seeking practical training

## How to Apply

### Step 1: Determine Eligibility
Identify which category applies to your situation.

### Step 2: Complete Form I-765
Fill out the Application for Employment Authorization.

### Step 3: Gather Documents
- Passport photos
- Copy of current immigration documents
- Evidence of eligibility

### Step 4: Pay the Fee
The fee is $410 (fee waivers available for some categories).

### Step 5: Submit and Wait
Processing times vary from 3-7 months.

## Automatic Extensions

If you're renewing your EAD in certain categories, you may receive an automatic extension while your renewal is pending.

## Contact Us

Need help with your work permit application? The Correa Firm can assist with EAD applications and renewals.
    `,
  },
  'asylum-process-united-states': {
    title: 'Seeking Asylum in the United States: A Step-by-Step Guide',
    excerpt: 'Asylum provides protection for those fleeing persecution.',
    image: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=1200&q=80',
    category: 'Humanitarian',
    author: 'Blanca Correa, Esq.',
    date: 'December 15, 2023',
    readTime: '11 min read',
    content: `
## What is Asylum?

Asylum is a form of protection that allows individuals who meet the definition of a refugee to remain in the United States. To qualify, you must demonstrate that you have suffered persecution or have a well-founded fear of persecution based on:

- Race
- Religion
- Nationality
- Political opinion
- Membership in a particular social group

## Types of Asylum

### Affirmative Asylum
Applied for by individuals not in removal proceedings. Cases are heard by USCIS asylum officers.

### Defensive Asylum
Claimed as a defense against removal in immigration court before an immigration judge.

## The One-Year Filing Deadline

You must file for asylum within one year of arriving in the United States, with limited exceptions for:
- Changed circumstances
- Extraordinary circumstances

## The Affirmative Asylum Process

### Step 1: File Form I-589
Submit your Application for Asylum and Withholding of Removal.

### Step 2: Biometrics Appointment
Attend fingerprinting at an Application Support Center.

### Step 3: Asylum Interview
Meet with an asylum officer to present your case.

### Step 4: Decision
Receive approval, referral to immigration court, or denial.

## Preparing Your Case

Strong asylum cases include:
- Detailed personal declaration
- Country condition evidence
- Corroborating documents
- Expert testimony (when available)

## Work Authorization

You may apply for work authorization 180 days after filing your asylum application if no decision has been made.

## How We Can Help

Asylum cases are complex and require thorough preparation. The Correa Firm provides compassionate representation for asylum seekers, helping you document your case and prepare for your interview or hearing.

**Contact us for a confidential consultation about your asylum case.**
    `,
  },
};

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts[slug];
  if (!post) return { title: 'Article Not Found' };
  
  return {
    title: `${post.title} - The Correa Firm`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts[slug];
  
  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-8 bg-neutral-50 border-b border-neutral-200">
        <div className="container-custom">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary-600 font-medium mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          
          <div className="max-w-3xl">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-neutral-800 leading-tight mt-3 mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative h-64 md:h-96 lg:h-[500px]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg prose-neutral max-w-none">
              <div 
                className="[&>h2]:text-2xl [&>h2]:font-serif [&>h2]:font-semibold [&>h2]:text-neutral-800 [&>h2]:mt-10 [&>h2]:mb-4
                           [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-neutral-800 [&>h3]:mt-8 [&>h3]:mb-3
                           [&>p]:text-neutral-700 [&>p]:leading-relaxed [&>p]:mb-4
                           [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul>li]:text-neutral-700 [&>ul>li]:mb-2
                           [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-4 [&>ol>li]:text-neutral-700 [&>ol>li]:mb-2
                           [&>strong]:font-semibold [&>strong]:text-neutral-800"
                dangerouslySetInnerHTML={{ 
                  __html: post.content
                    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
                    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
                    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                    .replace(/^- (.+)$/gm, '<li>$1</li>')
                    .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
                    .replace(/\n\n/g, '</p><p>')
                    .replace(/^(?!<[hulo])/gm, '<p>')
                    .replace(/(?<![>])$/gm, '</p>')
                }}
              />
            </article>

            {/* CTA */}
            <div className="mt-12 p-8 bg-primary-50 rounded-2xl border border-primary-100">
              <h3 className="text-xl font-serif font-semibold text-neutral-800 mb-3">
                Need Legal Assistance?
              </h3>
              <p className="text-neutral-600 mb-6">
                If you have questions about your immigration case, The Correa Firm is here to help. 
                Schedule a consultation to discuss your options.
              </p>
              <Link 
                href="/consultation"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors"
              >
                Schedule a Consultation
              </Link>
            </div>

            {/* Share */}
            <div className="mt-8 pt-8 border-t border-neutral-200">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-neutral-700">Share this article:</span>
                <div className="flex gap-2">
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-lg bg-neutral-100 hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-lg bg-neutral-100 hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-lg bg-neutral-100 hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
