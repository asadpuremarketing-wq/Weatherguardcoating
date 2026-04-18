import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Send, Loader2, User, PhoneCall, Mail, ChevronDown, CheckCircle, Lock, Zap, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import { sendFormEmails } from '../../lib/emailService';
import { gtagReportCallConversion, gtagReportFormConversion } from '../../lib/gtag';

const PHONE = '+12264481189';
const PHONE_HREF = 'tel:+15195550192';

// ── Validation Schema ────────────────────────────────────────────────
const quoteSchema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .regex(/^[\d\s\-\(\)\+]+$/, 'Invalid phone number'),
  email: z.string().email('Please enter a valid email address'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().optional(),
});

const serviceOptions = [
  { value: '', label: 'Select a service...' },
  { value: 'residential', label: 'Residential Painting' },
  { value: 'commercial', label: 'Commercial Painting' },
  { value: 'farm', label: 'Farm & Agricultural Painting' },
  { value: 'roof-coating', label: 'Roof Coating' },
  { value: 'other', label: 'Other / Not Sure Yet' },
];

const trustItems = [
  { icon: CheckCircle, label: 'No obligation' },
  { icon: Zap, label: 'Fast response' },
  { icon: Lock, label: 'Your info stays private' },
];

// ── Individual field wrapper ─────────────────────────────────────────
function Field({ icon: Icon, error, children, hint }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="relative">
        {Icon && (
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            <Icon size={15} />
          </div>
        )}
        {children}
      </div>
      {hint && !error && (
        <p className="text-[11px] text-gray-400 leading-snug">{hint}</p>
      )}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="form-error"
          >
            <span className="text-red-500">⚠</span> {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

/**
 * Premium lead capture form, CRO-optimized.
 * React Hook Form + Zod. Used in Hero + Contact page.
 */
export default function LeadForm({ className, compact = false }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(quoteSchema),
    defaultValues: { name: '', phone: '', email: '', service: '', message: '' },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError(null);

    // Fire Google Ads conversion immediately on valid submit — do NOT wait
    // for the email to send, otherwise the event can be dropped.
    gtagReportFormConversion();

    try {
      await sendFormEmails(data);
      reset();
      setSubmitted(true);
    } catch (err) {
      console.error('Email send failed:', err);
      setSubmitError('Something went wrong sending your request. Please call us directly or try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── Success state ──────────────────────────────────────────────────
  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn(
          'bg-white rounded-3xl border border-gray-100 p-8 md:p-10 text-center',
          'shadow-[0_8px_48px_rgba(0,0,0,0.15),0_2px_8px_rgba(0,0,0,0.06)]',
          className
        )}
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="text-green-600" size={40} />
        </div>
        <h3 className="text-2xl font-extrabold text-charcoal mb-2 tracking-tight">
          Thanks, your request has been sent.
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs mx-auto">
          We'll get back to you within 24 hours. In the meantime, feel free to call us directly.
        </p>
        <a
          href={PHONE_HREF}
          className="btn-primary w-full justify-center mb-4"
          onClick={() => gtagReportCallConversion(PHONE_HREF)}
        >
          <Phone size={16} />
          Call Us Now: {PHONE}
        </a>
        <p className="text-xs text-gray-400">
          You can also browse our{' '}
          <a href="/portfolio" className="text-gold hover:underline font-medium">portfolio</a>{' '}
          or{' '}
          <a href="/reviews" className="text-gold hover:underline font-medium">reviews</a>{' '}
          while you wait.
        </p>
      </motion.div>
    );
  }

  return (
    <div
      className={cn(
        'bg-white rounded-3xl border border-gray-100 p-7 md:p-9',
        'shadow-[0_8px_48px_rgba(0,0,0,0.15),0_2px_8px_rgba(0,0,0,0.06)]',
        className
      )}
    >
      {/* ── Form header ── */}
      <div className="mb-6">
        <span className="section-label block mb-2">Free Estimate</span>
        <h2 className="text-2xl font-extrabold text-charcoal leading-tight tracking-tight">
          Get Your Free Quote Today
        </h2>
        <p className="text-gray-400 text-sm mt-1.5 leading-relaxed">
          No pressure · No hidden costs · Just a clear estimate
        </p>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-6" />

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
        {/* Full Name */}
        <Field icon={User} error={errors.name?.message}>
          <input
            id="form-name"
            type="text"
            placeholder="Full Name *"
            className={cn('form-input pl-10', errors.name && 'form-input-error')}
            {...register('name')}
            autoComplete="name"
            aria-label="Full Name"
          />
        </Field>

        {/* Phone, visually emphasized as #1 priority after name */}
        <Field icon={PhoneCall} error={errors.phone?.message}>
          <input
            id="form-phone"
            type="tel"
            placeholder="Phone Number * (best way to reach you)"
            className={cn(
              'form-input pl-10 font-semibold',
              errors.phone && 'form-input-error'
            )}
            {...register('phone')}
            autoComplete="tel"
            aria-label="Phone Number"
          />
        </Field>

        {/* Email */}
        <Field icon={Mail} error={errors.email?.message}>
          <input
            id="form-email"
            type="email"
            placeholder="Email Address *"
            className={cn('form-input pl-10', errors.email && 'form-input-error')}
            {...register('email')}
            autoComplete="email"
            aria-label="Email Address"
          />
        </Field>

        {/* Service */}
        <Field error={errors.service?.message}>
          <div className="relative">
            <select
              id="form-service"
              className={cn('form-input pr-10 appearance-none cursor-pointer', errors.service && 'form-input-error')}
              {...register('service')}
              aria-label="Service Needed"
            >
              {serviceOptions.map((o) => (
                <option key={o.value} value={o.value} disabled={o.value === ''}>
                  {o.label}
                </option>
              ))}
            </select>
            <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </Field>

        {/* Message */}
        {!compact && (
          <Field hint="Tell us about the property, service needed, or your timing.">
            <textarea
              id="form-message"
              rows={3}
              placeholder="Project details (optional)"
              className="form-input resize-none"
              {...register('message')}
              aria-label="Project details"
            />
          </Field>
        )}

        {/* Submit error */}
        {submitError && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700"
          >
            <AlertCircle size={16} className="shrink-0 mt-0.5" />
            <span>{submitError}</span>
          </motion.div>
        )}

        {/* Submit */}
        <button
          type="submit"
          id="form-submit"
          disabled={isSubmitting}
          className="btn-primary w-full text-base py-4 mt-1 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? (
            <><Loader2 className="animate-spin" size={18} /> Sending Request...</>
          ) : (
            <><Send size={17} /> Get My Free Quote</>
          )}
        </button>

        {/* Reassurance line below button */}
        <p className="text-center text-xs text-gray-400 -mt-1 font-medium">
          No pressure. No hidden costs. Just a clear estimate.
        </p>

        {/* Trust row */}
        <div className="flex items-center justify-center gap-4 pt-1">
          {trustItems.map(({ icon: Icon, label }) => (
            <span key={label} className="flex items-center gap-1.5 text-[11px] text-gray-400 font-medium">
              <Icon size={12} className="text-green-500 shrink-0" />
              {label}
            </span>
          ))}
        </div>

        {/* Phone CTA divider */}
        <div className="relative my-1">
          <div className="h-px bg-gray-100" />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-xs text-gray-400 font-medium whitespace-nowrap">
            Prefer to call?
          </span>
        </div>

        <a
          href={PHONE_HREF}
          className="flex items-center justify-center gap-2 text-charcoal font-bold text-sm py-3 rounded-xl border border-gray-200 hover:border-gold hover:text-gold transition-all duration-200"
          id="form-call-cta"
          onClick={() => gtagReportCallConversion(PHONE_HREF)}
        >
          <Phone size={15} />
          {PHONE}, We're ready to help
        </a>
      </form>
    </div>
  );
}
