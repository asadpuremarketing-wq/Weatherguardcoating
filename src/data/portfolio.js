/**
 * Portfolio / project gallery data for Weather Guard Coatings
 */
export const portfolioItems = [
  {
    id: 1,
    title: 'Victorian Home Exterior, Full Repaint',
    category: 'residential',
    location: 'London, ON',
    year: 2024,
    before: '/images/portfolio-1-before.jpg',
    after: '/images/portfolio-1-after.jpg',
    description: 'Complete exterior repaint of a 1920s Victorian home. Full strip & prep, prime coat, and 2-coat finish in Sherwin-Williams Duration.',
    tags: ['exterior', 'victorian', 'full repaint'],
  },
  {
    id: 2,
    title: 'Commercial Office Complex',
    category: 'commercial',
    location: 'Kitchener, ON',
    year: 2024,
    before: '/images/portfolio-2-before.jpg',
    after: '/images/portfolio-2-after.jpg',
    description: '3-floor commercial office repaint completed over two weekends with zero business disruption.',
    tags: ['commercial', 'office', 'interior'],
  },
  {
    id: 3,
    title: 'Heritage Farmstead, Barn & Silos',
    category: 'farm',
    location: 'Strathroy, ON',
    year: 2024,
    before: '/images/portfolio-3-before.jpg',
    after: '/images/portfolio-3-after.jpg',
    description: 'Complete coating of a 5-bay dairy barn and 2 grain silos using industrial alkyd system.',
    tags: ['farm', 'barn', 'silos'],
  },
  {
    id: 4,
    title: 'Retail Strip Mall, Roof Coating',
    category: 'roof',
    location: 'London, ON',
    year: 2024,
    before: '/images/portfolio-4-before.jpg',
    after: '/images/portfolio-4-after.png',
    description: 'Elastomeric roof coating on 18,000 sq ft flat roof, solved persistent leak issues and reduced cooling costs.',
    tags: ['roof', 'commercial', 'flat roof'],
  },
  {
    id: 5,
    title: 'Custom Craftsman Home Interior',
    category: 'residential',
    location: 'St. Thomas, ON',
    year: 2023,
    before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    after: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
    description: 'Full interior repaint of 4,200 sq ft craftsman-style home including detailed trim and cabinetry work.',
    tags: ['interior', 'trim', 'cabinetry'],
  },
  {
    id: 6,
    title: 'Industrial Warehouse, Epoxy Floors & Walls',
    category: 'commercial',
    location: 'Woodstock, ON',
    year: 2023,
    before: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&q=80',
    after: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80',
    description: '22,000 sq ft industrial warehouse, epoxy floor coating and full wall treatment over 8 days.',
    tags: ['industrial', 'epoxy', 'warehouse'],
  },
];

export const portfolioCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'farm', label: 'Farm & Agricultural' },
  { id: 'roof', label: 'Roof Coating' },
];

export default portfolioItems;
