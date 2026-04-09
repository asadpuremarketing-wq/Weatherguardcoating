import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';
import blogPosts, { blogCategories } from '../data/blogPosts';
import CTASection from '../components/common/CTASection';
import BreadcrumbSchema from '../components/seo/BreadcrumbSchema';
import { cn } from '../lib/utils';

const BASE_URL = 'https://weatherguardcoating.ca';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Painting Tips & Advice for London, Ontario | Weather Guard Coating Blog</title>
        <meta
          name="description"
          content="Expert painting tips, cost guides, and local advice for London, Ontario homeowners and businesses. From interior painting to roof coatings. Learn from 35+ years of experience."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${BASE_URL}/blog`} />
        <meta property="og:title" content="Painting Tips & Advice for London, Ontario | Weather Guard Coating Blog" />
        <meta property="og:description" content="Expert painting tips, cost guides, and local advice for London Ontario homeowners." />
        <meta property="og:url" content={`${BASE_URL}/blog`} />
        <meta property="og:type" content="website" />
      </Helmet>

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: BASE_URL },
          { name: 'Blog', url: `${BASE_URL}/blog` },
        ]}
      />

      <main id="main-content" className="pt-24">
        {/* Page header */}
        <section className="bg-charcoal py-20" aria-labelledby="blog-heading">
          <div className="container-custom text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">Expert Advice</p>
              <h1 id="blog-heading" className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                Painting Tips & Guides<br className="hidden md:block" />
                <span className="text-gold"> for London, Ontario</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                35+ years of painting experience, shared as useful, honest advice for homeowners and businesses in London and Southwestern Ontario.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category filter */}
        <section className="bg-white border-b border-gray-100 sticky top-16 z-30">
          <div className="container-custom py-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {blogCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200',
                    activeCategory === cat
                      ? 'bg-gold text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog grid */}
        <section className="section-padding bg-gray-50" aria-label="Blog posts">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post, i) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="card p-0 overflow-hidden flex flex-col group"
                >
                  {/* Thumbnail */}
                  <Link to={`/blog/${post.slug}`} className="block relative h-52 overflow-hidden shrink-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      width="600"
                      height="400"
                    />
                    <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/10 transition-colors" />
                    <span className="absolute top-3 left-3 text-xs font-bold bg-gold text-white px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                  </Link>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-gray-400 text-xs mb-3">
                      <span className="flex items-center gap-1"><Calendar size={11} />{new Date(post.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                      <span className="flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
                    </div>
                    <Link to={`/blog/${post.slug}`}>
                      <h2 className="font-bold text-charcoal text-base leading-snug mb-2 group-hover:text-gold transition-colors line-clamp-3">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="mt-4 inline-flex items-center gap-1.5 text-gold font-semibold text-sm hover:gap-2.5 transition-all duration-200"
                    >
                      Read Article <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Ready for a Free Estimate?"
          subtitle="Our articles are free and so are our estimates. Call (226) 448-1189 or fill out a quick form."
        />
      </main>
    </>
  );
}
