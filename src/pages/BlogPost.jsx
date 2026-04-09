import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Phone, Tag } from 'lucide-react';
import { getBlogPostBySlug } from '../data/blogPosts';
import ArticleSchema from '../components/seo/ArticleSchema';
import BreadcrumbSchema from '../components/seo/BreadcrumbSchema';
import CTASection from '../components/common/CTASection';

const BASE_URL = 'https://weatherguardcoating.ca';
const PHONE = '(226) 448-1189';
const PHONE_HREF = 'tel:+12264481189';

/**
 * Renders markdown-like blog content with proper HTML semantics.
 * Handles: ##, ###, **bold**, tables, lists, checkboxes.
 */
function renderContent(content) {
  const lines = content.trim().split('\n');
  const elements = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Skip empty lines
    if (!line.trim()) { i++; continue; }

    // H2
    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="text-2xl font-extrabold text-charcoal mt-10 mb-4 leading-tight">
          {line.replace('## ', '')}
        </h2>
      );
      i++; continue;
    }

    // H3
    if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="text-xl font-bold text-charcoal mt-8 mb-3">
          {line.replace('### ', '')}
        </h3>
      );
      i++; continue;
    }

    // H4
    if (line.startsWith('#### ')) {
      elements.push(
        <h4 key={i} className="text-lg font-bold text-charcoal mt-6 mb-2">
          {line.replace('#### ', '')}
        </h4>
      );
      i++; continue;
    }

    // HR
    if (line.trim() === '---') {
      elements.push(<hr key={i} className="border-gray-200 my-8" />);
      i++; continue;
    }

    // Checkboxes
    if (line.startsWith('- [ ]') || line.startsWith('- [x]') || line.startsWith('- [X]')) {
      const checked = line.startsWith('- [x]') || line.startsWith('- [X]');
      const text = line.replace(/^- \[[xX ]\] /, '');
      elements.push(
        <div key={i} className="flex items-start gap-2 text-sm text-gray-700 my-1">
          <span className={`w-4 h-4 mt-0.5 shrink-0 rounded border flex items-center justify-center ${checked ? 'bg-gold border-gold text-white' : 'border-gray-300'}`}>
            {checked && '✓'}
          </span>
          <span dangerouslySetInnerHTML={{ __html: formatInline(text) }} />
        </div>
      );
      i++; continue;
    }

    // Bullet list items
    if (line.startsWith('- ') || line.startsWith('* ')) {
      const items = [];
      while (i < lines.length && (lines[i].startsWith('- ') || lines[i].startsWith('* '))) {
        items.push(lines[i].replace(/^[-*] /, ''));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="list-none space-y-2 my-4">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-2 text-gray-700 text-sm leading-relaxed">
              <span className="text-gold font-bold mt-0.5 shrink-0">•</span>
              <span dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Numbered list
    if (/^\d+\. /.test(line)) {
      const items = [];
      while (i < lines.length && /^\d+\. /.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\. /, ''));
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="list-decimal list-inside space-y-2 my-4 text-sm text-gray-700">
          {items.map((item, j) => (
            <li key={j} className="leading-relaxed pl-1" dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
          ))}
        </ol>
      );
      continue;
    }

    // Table (detect by |)
    if (line.startsWith('|')) {
      const tableLines = [];
      while (i < lines.length && lines[i].startsWith('|')) {
        tableLines.push(lines[i]);
        i++;
      }
      const [headerLine, , ...bodyLines] = tableLines;
      const headers = headerLine.split('|').filter(Boolean).map(h => h.trim());
      const rows = bodyLines.map(r => r.split('|').filter(Boolean).map(c => c.trim()));
      elements.push(
        <div key={`table-${i}`} className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse rounded-xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-charcoal text-white">
                {headers.map((h, j) => (
                  <th key={j} className="px-4 py-3 text-left font-semibold text-sm">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-3 text-gray-700 border-b border-gray-100" dangerouslySetInnerHTML={{ __html: formatInline(cell) }} />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // Paragraph with emoji indicators (✅, ❌, 🚩)
    if (line.trim()) {
      const isCallout = line.match(/^[✅❌🚩⚠️🔴🟡🟢]/);
      elements.push(
        <p
          key={i}
          className={`text-gray-700 text-sm leading-relaxed my-3 ${isCallout ? 'font-medium' : ''}`}
          dangerouslySetInnerHTML={{ __html: formatInline(line) }}
        />
      );
    }

    i++;
  }

  return elements;
}

function formatInline(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-charcoal font-bold">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code class="bg-gray-100 text-charcoal rounded px-1 font-mono text-xs">$1</code>');
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <>
      <Helmet>
        <title>{post.title} | Weather Guard Coating</title>
        <meta name="description" content={post.excerpt} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${BASE_URL}/blog/${post.slug}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={`${BASE_URL}/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={`${BASE_URL}${post.image}`} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content="Weather Guard Coating" />
        {post.keywords?.map((kw) => (
          <meta key={kw} name="keywords" content={kw} />
        ))}
      </Helmet>

      <ArticleSchema post={post} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: BASE_URL },
          { name: 'Blog', url: `${BASE_URL}/blog` },
          { name: post.title, url: `${BASE_URL}/blog/${post.slug}` },
        ]}
      />

      <main id="main-content" className="pt-24">
        {/* Hero */}
        <section className="bg-charcoal py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url(${post.image})` }} />
          <div className="container-custom relative z-10 max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Link to="/blog" className="inline-flex items-center gap-2 text-gold text-sm font-semibold mb-5 hover:underline">
                <ArrowLeft size={14} /> Back to Blog
              </Link>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs font-bold bg-gold text-white px-3 py-1 rounded-full flex items-center gap-1">
                  <Tag size={10} />{post.category}
                </span>
                <span className="text-gray-400 text-xs flex items-center gap-1">
                  <Calendar size={11} />
                  {new Date(post.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
                <span className="text-gray-400 text-xs flex items-center gap-1">
                  <Clock size={11} />{post.readTime}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
                {post.title}
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed">{post.excerpt}</p>
            </motion.div>
          </div>
        </section>

        {/* Article Body */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Main content */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                <meta itemProp="headline" content={post.title} />
                <meta itemProp="datePublished" content={post.date} />
                <div itemProp="articleBody">
                  {renderContent(post.content)}
                </div>

                {/* Post footer */}
                <div className="mt-10 p-5 bg-gold/5 border border-gold/20 rounded-2xl">
                  <p className="text-sm font-semibold text-charcoal mb-1">About the Author</p>
                  <p className="text-sm text-gray-600">
                    This article was written by the team at <strong>Weather Guard Coating</strong>, a professional painting contractor based in London, Ontario with 35+ years of experience serving Southwestern Ontario.
                  </p>
                </div>
              </motion.article>

              {/* Sidebar */}
              <aside className="space-y-6">
                {/* CTA Card */}
                <div className="bg-charcoal rounded-2xl p-6 sticky top-28">
                  <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-2">Free Estimate</p>
                  <h3 className="text-white font-extrabold text-xl mb-3 leading-tight">
                    Ready to Get Started?
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    Serving London, Ontario and surrounding areas. Free estimates, 3-year warranty, fully insured.
                  </p>
                  <Link to="/contact" className="btn-primary w-full text-center block mb-3 text-sm">
                    Get Free Quote
                  </Link>
                  <a href={PHONE_HREF} className="flex items-center justify-center gap-2 text-gold font-semibold text-sm hover:text-gold-light transition-colors">
                    <Phone size={14} /> {PHONE}
                  </a>
                </div>

                {/* Related services */}
                <div className="card">
                  <h3 className="font-bold text-charcoal text-sm mb-3">Our Services</h3>
                  <ul className="space-y-2">
                    {[
                      { label: 'Residential Painting', href: '/services/residential-painting' },
                      { label: 'Commercial Painting', href: '/services/commercial-painting' },
                      { label: 'Farm & Agricultural', href: '/services/farm-painting' },
                      { label: 'Roof Coating', href: '/services/roof-coating' },
                    ].map((s) => (
                      <li key={s.href}>
                        <Link to={s.href} className="text-sm text-gray-600 hover:text-gold font-medium transition-colors flex items-center gap-1">
                          → {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <CTASection
          title="Questions? We're Happy to Help."
          subtitle="Whether you're ready to book or just need advice, call us at (226) 448-1189. No pressure."
        />
      </main>
    </>
  );
}
