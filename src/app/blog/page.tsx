import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';

export const metadata = {
  title: 'Immigration Law Blog - The Correa Firm',
  description: 'Stay informed with the latest immigration news, guides, and legal updates from The Correa Firm.',
};

const blogPosts = [
  {
    slug: 'understanding-family-based-immigration-2024',
    title: 'Understanding Family-Based Immigration in 2024: A Complete Guide',
    excerpt: 'Family-based immigration remains one of the most common pathways to lawful permanent residence in the United States. Learn about the process, requirements, and what to expect.',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80',
    category: 'Family Immigration',
    author: 'Blanca Correa, Esq.',
    date: 'January 15, 2024',
    readTime: '8 min read',
  },
  {
    slug: 'steps-to-us-citizenship-naturalization',
    title: 'The 10 Steps to U.S. Citizenship Through Naturalization',
    excerpt: 'Becoming a U.S. citizen is a significant milestone. This comprehensive guide walks you through each step of the naturalization process, from eligibility to the oath ceremony.',
    image: 'https://images.unsplash.com/photo-1569974507005-6dc61f97fb5c?w=800&q=80',
    category: 'Citizenship',
    author: 'Blanca Correa, Esq.',
    date: 'January 10, 2024',
    readTime: '12 min read',
  },
  {
    slug: 'ice-detention-know-your-rights',
    title: 'ICE Detention: Know Your Rights and What to Do',
    excerpt: 'If you or a loved one faces immigration detention, understanding your rights is crucial. Learn what to expect, how to find help, and the steps to take during this difficult time.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
    category: 'Immigration Rights',
    author: 'Blanca Correa, Esq.',
    date: 'January 5, 2024',
    readTime: '10 min read',
  },
  {
    slug: 'green-card-through-marriage',
    title: 'How to Get a Green Card Through Marriage: Process & Timeline',
    excerpt: 'Marriage to a U.S. citizen or permanent resident can provide a path to a green card. Understand the requirements, interview process, and typical timeline.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    category: 'Family Immigration',
    author: 'Blanca Correa, Esq.',
    date: 'December 28, 2023',
    readTime: '9 min read',
  },
  {
    slug: 'work-permits-ead-explained',
    title: 'Work Permits (EAD) Explained: Who Qualifies and How to Apply',
    excerpt: 'An Employment Authorization Document allows certain immigrants to work legally in the U.S. Learn who qualifies, how to apply, and processing times.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
    category: 'Employment',
    author: 'Blanca Correa, Esq.',
    date: 'December 20, 2023',
    readTime: '7 min read',
  },
  {
    slug: 'asylum-process-united-states',
    title: 'Seeking Asylum in the United States: A Step-by-Step Guide',
    excerpt: 'Asylum provides protection for those fleeing persecution. This guide explains eligibility, the application process, and what to expect at your asylum interview.',
    image: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=800&q=80',
    category: 'Humanitarian',
    author: 'Blanca Correa, Esq.',
    date: 'December 15, 2023',
    readTime: '11 min read',
  },
];

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1);

  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="py-16 bg-white border-b border-neutral-200">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
              Immigration Law Blog
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-neutral-800 leading-tight mb-4">
              Insights & Legal Updates
            </h1>
            <p className="text-lg text-neutral-600">
              Stay informed with the latest immigration news, legal guides, and updates 
              from The Correa Firm. Knowledge is your first step toward success.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-6">
            Featured Article
          </h2>
          <Link href={`/blog/${featuredPost.slug}`} className="group">
            <div className="grid lg:grid-cols-2 gap-8 bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-200 hover:shadow-md transition-shadow">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="text-xs font-medium text-primary uppercase tracking-wider mb-3">
                  {featuredPost.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-semibold text-neutral-800 mb-4 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-neutral-600 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-neutral-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Recent Posts Grid */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-serif font-semibold text-neutral-800 mb-8">
            Recent Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="group bg-neutral-50 rounded-xl overflow-hidden border border-neutral-200 hover:shadow-md transition-all"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-semibold text-neutral-800 mt-2 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-neutral-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-neutral-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-primary-700">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-4">
              Stay Informed on Immigration Law
            </h2>
            <p className="text-primary-100 mb-8">
              Subscribe to receive updates on immigration policy changes, legal guides, 
              and important deadlines.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 outline-none"
              />
              <button
                type="submit"
                className="bg-white text-primary-700 px-6 py-3 rounded-lg font-medium hover:bg-neutral-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
