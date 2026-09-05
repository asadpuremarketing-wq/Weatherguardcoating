import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { gtagReportCallConversion } from '../../lib/gtag';

const PHONE = '(226) 448-1189';
const PHONE_HREF = 'tel:+12264481189';
const EMAIL = 'WeatherGuardcoating@gmail.com';
const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61574512059845';
const INSTAGRAM_URL = 'https://www.instagram.com/weatherguardcoating/';

// lucide-react dropped brand icons — small inline SVGs instead
function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16} {...props}>
      <path d="M13.5 21v-7.5h2.5l.5-3H13.5V8.5c0-.9.25-1.5 1.55-1.5H16.5V4.3C16.2 4.26 15.2 4.17 14 4.17c-2.4 0-4 1.46-4 4.15V10.5H7.5v3H10V21h3.5z" />
    </svg>
  );
}
function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width={16} height={16} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const footerLinks = {
  services: [
    { label: 'Residential Painting', href: '/services/residential-painting' },
    { label: 'Interior Painting', href: '/services/interior-painting' },
    { label: 'Commercial Painting', href: '/services/commercial-painting' },
    { label: 'Farm Painting', href: '/services/farm-painting' },
    { label: 'Custom Barn & Farm Painting', href: '/services/custom-barn-farm-painting' },
    { label: 'Roof Coating', href: '/services/roof-coating' },
    { label: 'Grain Bin Base Sealing', href: '/services/grain-bin-base-sealing' },
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
            <Link to="/" className="inline-flex items-center mb-4">
              <img
                src="/images/logo.png"
                alt="Weather Guard Coatings"
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Serving Southwestern Ontario for over 35 years. Professional painting and coatings for residential, commercial, farm, and industrial properties.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Weather Guard Coating on Facebook"
                className="w-9 h-9 bg-charcoal-light rounded-lg flex items-center justify-center text-gray-400 hover:text-gold hover:bg-charcoal-muted transition-colors"
              >
                <FacebookIcon />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Weather Guard Coating on Instagram"
                className="w-9 h-9 bg-charcoal-light rounded-lg flex items-center justify-center text-gray-400 hover:text-gold hover:bg-charcoal-muted transition-colors"
              >
                <InstagramIcon />
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
                <a href={PHONE_HREF} className="flex items-start gap-3 text-gray-400 hover:text-gold transition-colors group" onClick={() => gtagReportCallConversion(PHONE_HREF)}>
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
              Built and Managed by{' '}
              <a
                href="https://www.puremarketing.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light transition-colors font-semibold"
              >
                Pure Marketing
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
