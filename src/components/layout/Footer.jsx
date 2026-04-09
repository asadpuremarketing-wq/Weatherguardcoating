import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Globe, Share2, ExternalLink } from 'lucide-react';

const PHONE = '(226) 448-1189';
const PHONE_HREF = 'tel:+12264481189';
const EMAIL = 'WeatherGuardcoating@gmail.com';

const footerLinks = {
  services: [
    { label: 'Residential Painting', href: '/services/residential-painting' },
    { label: 'Commercial Painting', href: '/services/commercial-painting' },
    { label: 'Farm Painting', href: '/services/farm-painting' },
    { label: 'Roof Coating', href: '/services/roof-coating' },
    { label: 'All Services', href: '/services' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  areas: [
    'London, ON',
    'St. Thomas, ON',
    'Strathroy, ON',
    'Woodstock, ON',
    'Stratford, ON',
    'Kitchener-Waterloo',
    'Tillsonburg, ON',
    'Sarnia, ON',
    'Ingersoll, ON',
    'Brantford, ON',
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white" aria-label="Footer">
      {/* Main footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                <span className="text-white font-extrabold text-lg">WG</span>
              </div>
              <div>
                <div className="font-extrabold text-white text-base leading-tight">Weather Guard</div>
                <div className="text-xs text-gray-400 font-medium tracking-wide">Coatings</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Serving Southwestern Ontario for over 35 years. Professional painting and coatings for residential, commercial, farm, and industrial properties.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Website" className="w-9 h-9 bg-charcoal-light rounded-lg flex items-center justify-center text-gray-400 hover:text-gold hover:bg-charcoal-muted transition-colors">
                <Globe size={16} />
              </a>
              <a href="#" aria-label="Social Media" className="w-9 h-9 bg-charcoal-light rounded-lg flex items-center justify-center text-gray-400 hover:text-gold hover:bg-charcoal-muted transition-colors">
                <Share2 size={16} />
              </a>
              <a href="#" aria-label="External Link" className="w-9 h-9 bg-charcoal-light rounded-lg flex items-center justify-center text-gray-400 hover:text-gold hover:bg-charcoal-muted transition-colors">
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-400 text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-400 text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 mt-6">Service Areas</h3>
            <ul className="space-y-1.5">
              {footerLinks.areas.map((area) => (
                <li key={area} className="text-gray-400 text-sm">{area}</li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a href={PHONE_HREF} className="flex items-start gap-3 text-gray-400 hover:text-gold transition-colors group">
                  <Phone size={15} className="mt-0.5 shrink-0 group-hover:text-gold" />
                  <span className="text-sm">{PHONE}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-start gap-3 text-gray-400 hover:text-gold transition-colors group">
                  <Mail size={15} className="mt-0.5 shrink-0 group-hover:text-gold" />
                  <span className="text-sm">{EMAIL}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={15} className="mt-0.5 shrink-0" />
                <span className="text-sm">611 Wonderland Rd N, Unit 225<br />London, Ontario N6H 5N7</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Clock size={15} className="mt-0.5 shrink-0" />
                <span className="text-sm">
                  Mon to Fri: 7am to 5pm<br />
                  Sat: 8am to 2pm<br />
                  Emergency calls welcome
                </span>
              </li>
            </ul>
            <Link to="/contact" className="btn-primary mt-6 text-sm w-full text-center">
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-charcoal-muted">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © {year} Weather Guard Coating. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span>WSIB Insured</span>
            <span>•</span>
            <span>Licensed &amp; Insured</span>
            <span>•</span>
            <span>
              Website by{' '}
              <a
                href="https://www.puremarketing.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light transition-colors font-semibold"
              >
                Pure Marketing &amp; Advertising
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
