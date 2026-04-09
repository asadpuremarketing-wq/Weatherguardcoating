# Weather Guard Coatings — Website

A production-ready website for **Weather Guard Coatings**, a professional painting contractor serving London and Southwestern Ontario.

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | 19 | UI framework |
| Vite | 8 | Build tool |
| Tailwind CSS | 3 | Styling |
| React Router | 6 | Client-side routing |
| React Hook Form | – | Form handling |
| Zod | – | Form validation |
| Framer Motion | – | Subtle animations |
| react-helmet-async | – | SEO per-page meta tags |
| lucide-react | – | Icons |

---

## Getting Started

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173)

### Build for production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## Deploy to Vercel

1. Push this project to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub
3. Vercel will auto-detect Vite — no extra config needed
4. Click **Deploy**

The `vercel.json` file handles SPA routing (all paths → `index.html`).

---

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx        # Sticky nav with dropdown + mobile menu
│   │   ├── Footer.jsx        # Full footer with links + contact
│   │   └── MobileCTABar.jsx  # Sticky bottom bar (Call + Quote)
│   ├── home/
│   │   ├── HeroSection.jsx   # 2-col hero with video + lead form
│   │   ├── TrustBar.jsx      # 4-stat trust strip
│   │   ├── ReviewsSection.jsx
│   │   ├── ProblemSolution.jsx
│   │   ├── BeforeAfter.jsx   # Interactive drag slider
│   │   ├── ServicesSnapshot.jsx
│   │   ├── ProcessSection.jsx
│   │   ├── WhyUs.jsx         # Dark background trust cards
│   │   └── ServiceArea.jsx
│   └── common/
│       ├── LeadForm.jsx      # React Hook Form + Zod validation
│       ├── ReviewCard.jsx
│       ├── VideoTestimonial.jsx
│       ├── ServiceCard.jsx
│       ├── BeforeAfterCard.jsx  # Drag slider comparison
│       ├── CTASection.jsx      # Reusable CTA with dark/light variant
│       ├── HeroVideo.jsx       # YouTube embed with thumbnail
│       └── SectionWrapper.jsx  # Framer Motion scroll animator
├── pages/
│   ├── Home.jsx
│   ├── Services.jsx
│   ├── ServiceDetail.jsx   # Template for all service pages
│   ├── Portfolio.jsx       # Filterable grid + modal
│   ├── Reviews.jsx
│   ├── About.jsx           # Story + timeline + values
│   ├── Contact.jsx
│   └── ThankYou.jsx
├── data/
│   ├── services.js
│   ├── reviews.js
│   ├── portfolio.js
│   └── process.js
└── lib/
    └── utils.js            # Tailwind class merge utility
```

---

## Pages

| Route | Page |
|-------|------|
| `/` | Homepage |
| `/services` | Services listing |
| `/services/:slug` | Individual service page |
| `/portfolio` | Filterable project gallery |
| `/reviews` | All reviews + rating summary |
| `/about` | Company story + values |
| `/contact` | Contact form + map |
| `/thank-you` | Form submission success |

---

## Customization

### Replace placeholder content

| Item | Location |
|------|---------|
| Phone number | `src/components/layout/Header.jsx` — `PHONE` constant |
| Email | `src/components/layout/Footer.jsx` — `EMAIL` constant |
| Hero video | `src/components/common/HeroVideo.jsx` — `YOUTUBE_ID` |
| Services | `src/data/services.js` |
| Reviews | `src/data/reviews.js` |
| Portfolio | `src/data/portfolio.js` |
| Google Maps | `src/components/home/ServiceArea.jsx` + `src/pages/Contact.jsx` |

### Connect Google Analytics

Uncomment the `gtag` script in `index.html` and replace `G-XXXXXXXXXX` with your Measurement ID.

### Connect form to backend

In `src/components/common/LeadForm.jsx`, replace the `await new Promise(...)` mock with a real API call:

```js
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});
```

---

## Design System

| Token | Value |
|-------|-------|
| Primary font | Inter (Google Fonts) |
| Accent color (gold) | `#C9A84C` |
| Dark background | `#1C1C1E` |
| Button style | Gold fill / charcoal outline |
| Border radius | `rounded-xl` (1rem) |
