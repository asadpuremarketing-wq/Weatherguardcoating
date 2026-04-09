/**
 * Services data for Weather Guard Coatings
 */
export const services = [
  {
    id: 'residential',
    slug: 'residential-painting',
    title: 'Residential Painting',
    shortDesc: 'Interior and exterior home painting that protects and beautifies your biggest investment.',
    fullDesc: 'Your home deserves expert care. We deliver premium interior and exterior residential painting with careful prep work, quality materials, and clean, professional execution every time.',
    icon: '🏠',
    image: '/images/service-residential.jpg',
    features: [
      'Interior & Exterior',
      'Full Surface Preparation',
      'Premium Paint Products',
      'Clean & Tidy Work Guarantee',
      'Detailed Touch-Ups Included',
    ],
    problems: [
      'Peeling paint making your home look neglected',
      'Contractors who leave a mess and disappear',
      'Paint that chips and fades within 2 years',
      'Hidden costs and vague estimates',
    ],
    faqs: [
      { q: 'How long does a residential paint job take?', a: 'Most exterior residential projects take 3 to 7 days depending on size and prep needed. We give you a detailed timeline upfront.' },
      { q: 'Do you provide a warranty?', a: 'Yes. We stand behind our work with a 3-year workmanship warranty on all residential projects.' },
      { q: 'What paint brands do you use?', a: 'We use Sherwin-Williams and Benjamin Moore, top-tier paints that last longer and look better.' },
    ],
  },
  {
    id: 'commercial',
    slug: 'commercial-painting',
    title: 'Commercial Painting',
    shortDesc: 'Professional commercial painting that minimizes downtime and delivers lasting results.',
    fullDesc: 'We handle commercial projects of all sizes, from office buildings to retail spaces, with minimal disruption to your business operations. Night and weekend scheduling available.',
    icon: '🏢',
    image: '/images/service-commercial.png',
    features: [
      'Day, Night & Weekend Scheduling',
      'Project Management Included',
      'Commercial-Grade Materials',
      'WSIB & Liability Insured',
      'Phased Painting Available',
    ],
    problems: [
      'Business disruption during painting',
      'Contractors without proper commercial insurance',
      'Inconsistent results across large surfaces',
      'Unprofessional crews on your property',
    ],
    faqs: [
      { q: 'Can you work outside business hours?', a: 'Absolutely. We offer evening, overnight, and weekend scheduling to keep your business running normally.' },
      { q: 'Are you WSIB insured?', a: 'Yes. We carry full WSIB coverage and $5M commercial general liability insurance.' },
      { q: 'Do you handle multi-building projects?', a: 'Yes. We have the crew size and project management experience to handle complex, multi-site commercial jobs.' },
    ],
  },
  {
    id: 'farm',
    slug: 'farm-painting',
    title: 'Farm & Agricultural Painting',
    shortDesc: 'Durable coatings for barns, silos, outbuildings, and farm structures built to last.',
    fullDesc: 'Farming structures face harsh conditions year-round. Our agricultural coatings are chosen for maximum durability, UV resistance, and weatherproofing to protect your investment for years.',
    icon: '🌾',
    image: '/images/service-farm.jpg',
    features: [
      'Barn & Silo Painting',
      'UV & Weather-Resistant Coatings',
      'High-Reach & Aerial Capabilities',
      'Farm-Safe Products',
      'Flexible Scheduling Around Operations',
    ],
    problems: [
      'Barns that look weathered and unprofessional',
      'Coatings that peel after one winter',
      'Contractors not equipped for large rural structures',
      'Disrupting farm operations during painting',
    ],
    faqs: [
      { q: 'Can you paint large barn structures?', a: 'Yes. We have the equipment, crew, and experience for large agricultural structures including tall silos and multi-bay barns.' },
      { q: 'What coating systems do you use on barns?', a: 'We use alkyd and elastomeric systems designed for metal, wood, and concrete barn surfaces, built for longevity in Ontario weather.' },
      { q: 'How do you handle working around livestock?', a: 'We use farm-safe, low-VOC products and schedule around your operations to minimize any impact on your animals or activities.' },
    ],
  },
  {
    id: 'roof-coating',
    slug: 'roof-coating',
    title: 'Roof Coating',
    shortDesc: 'Extend your roof life and improve energy efficiency with professional roof coating systems.',
    fullDesc: 'Our elastomeric and reflective roof coatings protect flat and low-slope roofs from water infiltration, UV damage, and thermal expansion, extending roof life by 10 to 15 years.',
    icon: '🏗️',
    image: '/images/service-roof.jpg',
    features: [
      'Flat & Low-Slope Roofs',
      'Elastomeric Waterproof Coatings',
      'Reflective & Cool Roof Options',
      'Leak Prevention',
      'Energy Efficiency Improvement',
    ],
    problems: [
      'Flat roof leaks costing thousands in damage',
      'Premature roof replacement costs',
      'Rising cooling costs from heat absorption',
      'Contractors who patch instead of solve',
    ],
    faqs: [
      { q: 'How long does a roof coating last?', a: 'Our coating systems are designed to last 10 to 15 years with proper application and routine maintenance.' },
      { q: 'Is roof coating cheaper than replacement?', a: 'Significantly cheaper. A coating can extend roof life at 20 to 30% of full replacement cost.' },
      { q: 'Can you coat metal roofs?', a: 'Yes. We apply specialized coatings for metal, TPO, EPDM, and built-up roofing systems.' },
    ],
  },
];

export const servicesBySlug = services.reduce((acc, s) => {
  acc[s.slug] = s;
  return acc;
}, {});

export default services;
