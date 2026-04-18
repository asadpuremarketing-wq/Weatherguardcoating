import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';
import { gtagReportCallConversion } from '../../lib/gtag';

const PHONE = '(226) 448-1189';
const PHONE_HREF = 'tel:+12264481189';

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Residential Painting', href: '/services/residential-painting' },
      { label: 'Commercial Painting', href: '/services/commercial-painting' },
      { label: 'Farm Painting', href: '/services/farm-painting' },
      { label: 'Roof Coating', href: '/services/roof-coating' },
    ],
  },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  // Track scroll for sticky header style change
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white shadow-[0_2px_20px_rgba(0,0,0,0.1)] border-b border-gray-100/80'
          : 'bg-white backdrop-blur-md'
      )}
    >
      {/* Top bar, phone strip (prominent for call conversion) */}
      <div className="bg-charcoal text-white py-2 hidden sm:block">
        <div className="container-custom flex items-center justify-between">
          <span className="text-gray-400 text-xs">Serving London &amp; Surrounding Ontario, Residential · Commercial · Farm · Roof Coating</span>
          <a
            href={PHONE_HREF}
            className="flex items-center gap-2 font-bold text-sm hover:text-gold-light transition-colors group"
            aria-label={`Call us at ${PHONE}`}
            onClick={() => gtagReportCallConversion(PHONE_HREF)}
          >
            <div className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center">
              <Phone size={12} className="text-gold" />
            </div>
            <span className="text-gold">{PHONE}</span>
            <span className="text-gray-500 text-xs font-normal">,  Call us now</span>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-custom">
        <div className="flex items-center justify-between h-[4.25rem]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="Weather Guard Coatings Home">
            <div className="w-10 h-10 bg-charcoal rounded-xl flex items-center justify-center shadow-xs">
              <span className="text-gold font-black text-base leading-none tracking-tight">WG</span>
            </div>
            <div className="leading-tight">
              <div className="font-extrabold text-charcoal text-[0.95rem] leading-tight tracking-tight">Weather Guard</div>
              <div className="text-[0.7rem] text-gray-400 font-semibold tracking-widest uppercase leading-tight">Coatings</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Main navigation">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative group">
                  <button
                    className={cn(
                      'flex items-center gap-1 px-3 py-2 rounded-md text-sm font-semibold transition-colors',
                      isActive(link.href)
                        ? 'text-gold'
                        : 'text-charcoal hover:text-gold'
                    )}
                    aria-haspopup="true"
                    aria-expanded={servicesOpen}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {link.label}
                    <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                  </button>
                  {/* Dropdown */}
                  <div
                    className="absolute top-full left-0 mt-1 w-52 bg-white shadow-lg rounded-lg border border-gray-100 py-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className={cn(
                          'block px-4 py-2 text-sm font-medium transition-colors',
                          location.pathname === child.href
                            ? 'text-gold bg-gold/5'
                            : 'text-charcoal hover:text-gold hover:bg-gray-50'
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                    <div className="border-t border-gray-100 mt-1.5 pt-1.5">
                      <Link
                        to="/services"
                        className="block px-4 py-2 text-sm font-semibold text-gold hover:bg-gold/5 transition-colors"
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={cn(
                    'relative px-3.5 py-2 text-sm font-semibold transition-colors duration-200',
                    isActive(link.href)
                      ? 'text-gold'
                      : 'text-charcoal/80 hover:text-gold'
                  )}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-gold rounded-full" />
                  )}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 text-charcoal/80 font-semibold text-sm hover:text-gold transition-colors duration-200"
              onClick={() => gtagReportCallConversion(PHONE_HREF)}
            >
              <Phone size={15} />
              {PHONE}
            </a>
            <Link to="/contact" className="btn-primary text-sm px-6 py-2.5">
              Get Free Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-md text-charcoal hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg animate-fade-in">
          <div className="container-custom py-4 flex flex-col gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-semibold text-charcoal hover:bg-gray-50"
                    onClick={() => setServicesOpen(!servicesOpen)}
                  >
                    {link.label}
                    <ChevronDown size={14} className={cn('transition-transform', servicesOpen && 'rotate-180')} />
                  </button>
                  {servicesOpen && (
                    <div className="ml-4 mt-1 mb-2 flex flex-col gap-0.5 border-l-2 border-gold/30 pl-3">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-gold transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={cn(
                    'block px-3 py-2.5 rounded-md text-sm font-semibold transition-colors',
                    isActive(link.href) ? 'text-gold bg-gold/5' : 'text-charcoal hover:bg-gray-50'
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="border-t border-gray-100 mt-2 pt-4 flex flex-col gap-3">
              <a
                href={PHONE_HREF}
                className="btn-secondary text-sm w-full text-center"
                onClick={() => gtagReportCallConversion(PHONE_HREF)}
              >
                <Phone size={15} />
                Call {PHONE}
              </a>
              <Link to="/contact" className="btn-primary text-sm w-full text-center">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
