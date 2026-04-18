import { Phone, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gtagReportCallConversion } from '../../lib/gtag';

const PHONE_HREF = 'tel:+15195550192';
const PHONE_DISPLAY = '+12264481189';

/**
 * Sticky mobile CTA bar — fixed at bottom on small screens.
 * Hidden on lg+ since desktop has nav CTAs.
 */
export default function MobileCTABar() {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.5, ease: 'easeOut' }}
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden pb-safe"
    >
      {/* Shadow bar at top for separation */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div
        className="flex items-stretch bg-white border-t border-gray-100"
        style={{ boxShadow: '0 -4px 24px rgba(0,0,0,0.12)' }}
      >
        {/* Call button */}
        <a
          href={PHONE_HREF}
          id="mobile-cta-call"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 py-3.5 text-charcoal hover:bg-gray-50 transition-colors active:bg-gray-100"
          aria-label={`Call ${PHONE_DISPLAY}`}
          onClick={() => gtagReportCallConversion(PHONE_HREF)}
        >
          <Phone size={20} className="text-charcoal" />
          <span className="text-[11px] font-bold tracking-wide text-charcoal">Call Now</span>
        </a>

        {/* Divider */}
        <div className="w-px bg-gray-100 my-2" />

        {/* Quote button */}
        <Link
          to="/contact"
          id="mobile-cta-quote"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 py-3.5 bg-gold hover:bg-gold-dark transition-colors active:bg-gold-dark"
          aria-label="Get a free quote"
        >
          <MessageSquare size={20} className="text-white" />
          <span className="text-[11px] font-bold tracking-wide text-white">Free Quote</span>
        </Link>
      </div>
    </motion.div>
  );
}
