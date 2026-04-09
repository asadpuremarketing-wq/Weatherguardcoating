import { motion } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const painPoints = [
  'Vague estimates that balloon with surprise charges',
  'Crews who rush prep, paint that peels in 2 years',
  'Project managers who stop calling back after the deposit',
  'Painters who leave your property a mess',
  'Inconsistent quality, different crew, different results every time',
];

const solutions = [
  'Detailed written estimates, no hidden costs, ever',
  'Thorough surface preparation, we never cut corners on prep',
  'A single point of contact who communicates every step',
  "We treat your property like it's our own, clean site, every day",
  'The same experienced crew, trained to Weather Guard standards',
];

/**
 * Problem/Solution section with side-by-side contrast layout.
 */
export default function ProblemSolution() {
  return (
    <section className="section-padding bg-white" aria-labelledby="problem-heading">
      <div className="container-custom">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl mx-auto text-center mb-14"
        >
          <p className="section-label mb-3">The Weather Guard Difference</p>
          <h2 id="problem-heading" className="section-title mb-4">
            Tired of Contractors<br className="hidden md:block" /> Who Cut Corners?
          </h2>
          <div className="section-divider mb-5" />
          <p className="text-gray-500 text-[0.9375rem] leading-relaxed">
            We built Weather Guard Coatings because we saw how homeowners and business owners
            were being let down by painters who prioritized speed over quality.
          </p>
        </motion.div>

        {/* ── 2-col layout ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

          {/* Pain points */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-2xl p-7 border border-red-100"
            style={{ background: 'linear-gradient(145deg, #fff5f5 0%, #fff8f8 100%)' }}
          >
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 bg-red-100 rounded-xl flex items-center justify-center">
                <X className="text-red-500" size={18} />
              </div>
              <h3 className="font-extrabold text-red-700 text-base">The Problem Most People Face</h3>
            </div>
            <ul className="space-y-3.5">
              {painPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                    <X size={11} className="text-red-500" />
                  </span>
                  <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-2xl p-7 border border-emerald-100"
            style={{ background: 'linear-gradient(145deg, #f0fdf4 0%, #f5fef8 100%)' }}
          >
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 bg-emerald-100 rounded-xl flex items-center justify-center">
                <CheckCircle className="text-emerald-600" size={18} />
              </div>
              <h3 className="font-extrabold text-emerald-800 text-base">The Weather Guard Approach</h3>
            </div>
            <ul className="space-y-3.5">
              {solutions.map((sol) => (
                <li key={sol} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <CheckCircle size={11} className="text-emerald-600" />
                  </span>
                  <span className="text-gray-700 text-sm leading-relaxed">{sol}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ── CTA ── */}
        <div className="text-center mt-12">
          <Link to="/contact" className="btn-primary text-base px-9 py-4">
            Hire a Contractor You Can Trust
          </Link>
        </div>
      </div>
    </section>
  );
}
