import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import LeadForm from '../components/common/LeadForm';
import BreadcrumbSchema from '../components/seo/BreadcrumbSchema';

const BASE_URL = 'https://weatherguardcoating.ca';
const PHONE = '(226) 448-1189';
const PHONE_HREF = 'tel:+12264481189';
const EMAIL = 'WeatherGuardcoating@gmail.com';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact a Painting Contractor in London, Ontario | Free Estimate | Weather Guard Coating</title>
        <meta
          name="description"
          content="Contact Weather Guard Coating in London, Ontario for a free painting estimate. Call (226) 448-1189, email us, or fill out the form. Serving London and 160km radius. Fast 24-hour response."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${BASE_URL}/contact`} />
        <meta property="og:title" content="Contact Weather Guard Coating | London Ontario Painting Contractor" />
        <meta property="og:description" content="Get a free estimate from London Ontario's trusted painting contractor. Call (226) 448-1189. 24 hour response guaranteed." />
        <meta property="og:url" content={`${BASE_URL}/contact`} />
        <meta property="og:type" content="website" />
      </Helmet>

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: BASE_URL },
          { name: 'Contact', url: `${BASE_URL}/contact` },
        ]}
      />

      <main id="main-content" className="pt-24">
        {/* Page header */}
        <section className="bg-charcoal py-16">
          <div className="container-custom text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">Get In Touch</p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Contact Us</h1>
              <p className="text-gray-400 text-lg max-w-xl mx-auto">
                Ready to get started? Fill out the form below or give us a call. We respond to all inquiries within 24 hours.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Lead form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <LeadForm />
              </motion.div>

              {/* Contact info + map */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-col gap-6"
              >
                {/* Contact cards */}
                <div className="card">
                  <h3 className="font-bold text-charcoal mb-4 text-base">Contact Information</h3>
                  <ul className="space-y-4">
                    <li>
                      <a href={PHONE_HREF} className="flex items-start gap-3 group">
                        <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                          <Phone size={17} className="text-gold" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-0.5">Phone</p>
                          <p className="font-semibold text-charcoal group-hover:text-gold transition-colors">{PHONE}</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href={`mailto:${EMAIL}`} className="flex items-start gap-3 group">
                        <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                          <Mail size={17} className="text-gold" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-0.5">Email</p>
                          <p className="font-semibold text-charcoal group-hover:text-gold transition-colors text-sm break-all">{EMAIL}</p>
                        </div>
                      </a>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                        <MapPin size={17} className="text-gold" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-0.5">Location</p>
                        <p className="font-semibold text-charcoal text-sm">London, Ontario, Canada</p>
                        <p className="text-gray-400 text-xs">Serving 160km radius</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                        <Clock size={17} className="text-gold" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-0.5">Hours</p>
                        <p className="font-semibold text-charcoal text-sm">Mon to Fri: 7am to 5pm</p>
                        <p className="text-gray-400 text-xs">Sat: 8am to 2pm · Emergency calls welcome</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Google Maps embed */}
                <div className="rounded-2xl overflow-hidden shadow-card border border-gray-200 aspect-[4/3] relative">
                  <iframe
                    title="Weather Guard Coating Location, 611 Wonderland Rd N, London ON"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2919.3!2d-81.2753!3d42.9949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s611+Wonderland+Rd+N%2C+London%2C+ON+N6H+5N7!5e0!3m2!1sen!2sca!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0, position: 'absolute', inset: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
