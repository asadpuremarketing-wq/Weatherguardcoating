import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, Award, Users, Heart, Wrench, CheckCircle } from 'lucide-react';
import CTASection from '../components/common/CTASection';
import { Link } from 'react-router-dom';
import BreadcrumbSchema from '../components/seo/BreadcrumbSchema';

const BASE_URL = 'https://weatherguardcoating.ca';

const values = [
  { icon: Shield, title: 'Integrity', desc: 'We say what we mean and mean what we say. No surprises on price, scope, or timeline.' },
  { icon: Award, title: 'Quality', desc: 'We use only premium materials and never cut corners on prep work, the foundation of lasting results.' },
  { icon: Users, title: 'Respect', desc: 'For your property, your time, and your budget. We treat every home and business like it\'s our own.' },
  { icon: Heart, title: 'Community', desc: 'Proudly local. We live and work in Southwestern Ontario and are invested in the quality of our communities.' },
  { icon: Wrench, title: 'Craftsmanship', desc: 'Painting is a skilled trade. We take pride in our craft and hold ourselves to the highest professional standards.' },
  { icon: CheckCircle, title: 'Accountability', desc: 'We stand behind every project with a written warranty and post-project follow-up. Your satisfaction is guaranteed.' },
];

const milestones = [
  { year: '1989', event: 'Weather Guard Coatings founded in London, Ontario by a single crew of 3 professionals.' },
  { year: '1995', event: 'Expanded into commercial painting, serving local businesses and property managers.' },
  { year: '2003', event: 'Added agricultural and farm painting services to serve Southwestern Ontario\'s farming community.' },
  { year: '2010', event: 'Launched roof coating division, becoming one of the few contractors offering full-service coatings.' },
  { year: '2018', event: 'Grew to a team of 25+ professionals serving clients within a 160km radius of London.' },
  { year: '2024', event: 'Surpassed 1,000 completed projects and 127 five-star Google reviews.' },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Weather Guard Coating | 35+ Years in London, Ontario</title>
        <meta
          name="description"
          content="Founded in 1989 in London, Ontario, Weather Guard Coating has grown to one of Southwestern Ontario's most trusted painting contractors. Learn our story, our team, and our values."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${BASE_URL}/about`} />
        <meta property="og:title" content="About Weather Guard Coating | 35+ Years in London, Ontario" />
        <meta property="og:description" content="Founded in 1989, Weather Guard Coating is London Ontario's trusted painting contractor. 35+ years, 1,000+ projects, 127 five-star reviews." />
        <meta property="og:url" content={`${BASE_URL}/about`} />
        <meta property="og:type" content="website" />
      </Helmet>

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: BASE_URL },
          { name: 'About', url: `${BASE_URL}/about` },
        ]}
      />

      <main id="main-content" className="pt-24">
        {/* Hero */}
        <section className="bg-charcoal py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">Who We Are</p>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
                  35 Years of Painting Done Right
                </h1>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Founded in 1989 in London, Ontario, Weather Guard Coatings has grown from a 3-person crew to one of Southwestern Ontario's most trusted painting contractors, with over 1,000 completed projects and a team of 25+ experienced professionals.
                </p>
                <p className="text-gray-400 leading-relaxed text-base">
                  We built this company on the belief that painting is more than just slapping colour on walls. It's about proper preparation, premium materials, skilled application, and treating every property with the same care we'd give our own homes.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-2xl overflow-hidden shadow-dark"
              >
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt="Weather Guard Coatings team"
                  className="w-full h-80 object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Story / timeline */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <div className="text-center mb-12">
              <p className="section-label mb-2">Our Journey</p>
              <h2 className="section-title">35 Years in the Making</h2>
            </div>
            <div className="relative">
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-0.5" />
              <div className="space-y-8">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className={`flex gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className={`flex-1 md:pr-8 ${i % 2 !== 0 ? 'md:pl-8 md:pr-0' : ''} pl-14 md:pl-0`}>
                      <div className="card">
                        <div className="text-gold font-extrabold text-lg mb-1">{m.year}</div>
                        <p className="text-gray-600 text-sm leading-relaxed">{m.event}</p>
                      </div>
                    </div>
                    {/* Center dot */}
                    <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-gold border-4 border-white shadow -translate-x-1/2 mt-4" />
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="section-label mb-2">What We Stand For</p>
              <h2 className="section-title">Our Core Values</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {values.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="card"
                >
                  <div className="w-11 h-11 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="text-gold" size={20} />
                  </div>
                  <h3 className="font-bold text-charcoal mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-3xl text-center">
            <p className="section-label mb-2">Credentials</p>
            <h2 className="section-title mb-8">Licensed. Insured. Accountable.</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                { label: 'WSIB', sub: 'Fully Compliant', note: 'WSIB No. 123456789' },
                { label: '$5M', sub: 'Liability Insurance', note: 'Commercial General Liability' },
                { label: '3-Year', sub: 'Workmanship Warranty', note: 'On all projects' },
              ].map((item) => (
                <div key={item.label} className="bg-charcoal rounded-xl p-6 text-center">
                  <div className="text-3xl font-extrabold text-gold mb-1">{item.label}</div>
                  <div className="text-white font-semibold text-sm mb-1">{item.sub}</div>
                  <div className="text-gray-400 text-xs">{item.note}</div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link to="/contact" className="btn-primary">
                Work With a Contractor You Can Trust
              </Link>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
    </>
  );
}
