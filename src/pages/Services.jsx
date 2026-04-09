import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import ServiceCard from '../components/common/ServiceCard';
import CTASection from '../components/common/CTASection';
import services from '../data/services';
import BreadcrumbSchema from '../components/seo/BreadcrumbSchema';

const BASE_URL = 'https://weatherguardcoating.ca';

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Painting Services London Ontario | Residential, Commercial & Farm | Weather Guard Coating</title>
        <meta
          name="description"
          content="Professional residential, commercial, farm & roof coating services in London, Ontario. 35+ years experience, WSIB insured, free written estimates. Serving 160km radius from London."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${BASE_URL}/services`} />
        <meta property="og:title" content="Painting Services London Ontario | Weather Guard Coating" />
        <meta property="og:description" content="Residential, commercial, farm & roof coating services in London ON. 35+ years. Free estimates." />
        <meta property="og:url" content={`${BASE_URL}/services`} />
        <meta property="og:type" content="website" />
      </Helmet>

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: BASE_URL },
          { name: 'Services', url: `${BASE_URL}/services` },
        ]}
      />

      <main id="main-content" className="pt-24">
        {/* Page hero */}
        <section className="bg-charcoal py-20">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">What We Offer</p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                Professional Painting &amp; Coating Services
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                Whether it's a single-family home, a commercial complex, a working farm, or a flat roof needing protection. We have the expertise and equipment to deliver exceptional results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services grid */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, i) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <ServiceCard service={service} className="h-full" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why choose us callout */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="bg-gold/5 border border-gold/20 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto text-center">
              <p className="section-label mb-3">All Services Include</p>
              <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-6">
                Our Standard, No Exceptions
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
                {[
                  'Free written estimate',
                  'Detailed project timeline',
                  'Professional surface preparation',
                  'Premium paint products',
                  'Fully insured crew on-site',
                  'Clean site daily',
                  'Final walkthrough & touch-ups',
                  '3-year workmanship warranty',
                  'Post-project follow-up',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-gold font-bold">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
    </>
  );
}
