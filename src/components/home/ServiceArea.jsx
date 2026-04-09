import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const serviceAreas = [
  'London, ON', 'St. Thomas, ON', 'Strathroy, ON', 'Woodstock, ON',
  'Stratford, ON', 'Kitchener, ON', 'Waterloo, ON', 'Cambridge, ON',
  'Sarnia, ON', 'Tillsonburg, ON', 'Ingersoll, ON', 'Aylmer, ON',
  'Brantford, ON', 'Goderich, ON', 'Simcoe, ON',
];

/**
 * Service area section with area list and map placeholder.
 */
export default function ServiceArea() {
  return (
    <section className="section-padding bg-white" aria-labelledby="area-heading">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left, content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="section-label mb-2">Where We Work</p>
            <h2 id="area-heading" className="section-title mb-4">
              Serving London &amp; 160km Surrounding Area
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Based in London, Ontario, our crews travel up to 160km to serve homeowners and businesses across Southwestern Ontario. No job is too far, call us to confirm your area.
            </p>

            {/* Area tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="flex items-center gap-1.5 bg-gray-100 hover:bg-gold/10 hover:text-gold text-gray-600 text-sm font-medium px-3 py-1.5 rounded-full transition-colors cursor-default"
                >
                  <MapPin size={12} />
                  {area}
                </span>
              ))}
              <span className="bg-gold/10 text-gold text-sm font-medium px-3 py-1.5 rounded-full">
                + more...
              </span>
            </div>

            <p className="text-gray-500 text-sm">
              Don't see your city? <a href="tel:+12264481189" className="text-gold font-semibold hover:underline">Call (226) 448-1189</a>, we likely serve your area.
            </p>
          </motion.div>

          {/* Right, map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover border border-gray-200 aspect-[4/3]">
              {/* Map placeholder, replace with Google Maps embed */}
              <div className="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center gap-3">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center">
                  <MapPin className="text-gold" size={32} />
                </div>
                <p className="text-charcoal font-bold">Service Area Map</p>
                <p className="text-gray-400 text-sm">London, ON, 160km radius</p>
                <p className="text-xs text-gray-300">(Replace with Google Maps embed)</p>
              </div>

              {/* Overlay label */}
              <div className="absolute top-4 left-4 bg-gold text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                📍 160km Coverage
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
