import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

/**
 * Wrapper for page sections with consistent fade-in-on-scroll behavior.
 */
export default function SectionWrapper({ children, className, id }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-80px' }}
      className={cn('section-padding', className)}
    >
      {children}
    </motion.section>
  );
}
