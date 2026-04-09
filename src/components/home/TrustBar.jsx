import { motion } from 'framer-motion';
import { Clock, Award, Shield, MapPin } from 'lucide-react';

const trustItems = [
  { icon: Clock,  number: '35+',    label: 'Years Experience',   sub: 'Est. 1989' },
  { icon: Award,  number: '1,000+', label: 'Projects Completed', sub: 'Across Ontario' },
  { icon: Shield, number: '100%',   label: 'Fully Insured',      sub: '$5M Liability' },
  { icon: MapPin, number: '160km',  label: 'Service Radius',     sub: 'From London, ON' },
];

/**
 * Trust bar — 4 key credibility stats.
 */
export default function TrustBar() {
  return (
    <section className="bg-white border-y border-gray-100" aria-label="Trust indicators">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100">
          {trustItems.map(({ icon: Icon, number, label, sub }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ backgroundColor: '#FAFAFA' }}
              className="flex flex-col items-center text-center gap-1.5 py-9 px-4 transition-colors duration-200 rounded-none first:rounded-l-none last:rounded-r-none"
            >
              {/* Icon bubble */}
              <div className="w-11 h-11 bg-gold/8 rounded-2xl flex items-center justify-center mb-2 group-hover:bg-gold/15 transition-colors"
                style={{ background: 'rgba(201,168,76,0.09)' }}
              >
                <Icon className="text-gold" size={20} strokeWidth={2} />
              </div>

              {/* Number */}
              <div className="text-[2.25rem] font-extrabold text-charcoal leading-none tracking-tight">
                {number}
              </div>

              {/* Label */}
              <div className="text-sm font-semibold text-charcoal/70">{label}</div>

              {/* Sub */}
              <div className="text-xs text-gray-400 font-medium">{sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
