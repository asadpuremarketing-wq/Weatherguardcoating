import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/home/HeroSection';
import TrustBar from '../components/home/TrustBar';
import ReviewsSection from '../components/home/ReviewsSection';
import ProblemSolution from '../components/home/ProblemSolution';
import BeforeAfter from '../components/home/BeforeAfter';
import ServicesSnapshot from '../components/home/ServicesSnapshot';
import ProcessSection from '../components/home/ProcessSection';
import WhyUs from '../components/home/WhyUs';
import ServiceArea from '../components/home/ServiceArea';
import CTASection from '../components/common/CTASection';
import LocalBusinessSchema from '../components/seo/LocalBusinessSchema';

const BASE_URL = 'https://weatherguardcoating.ca';

/**
 * Homepage — assembles all 12 sections in order as specified.
 */
export default function Home() {
  return (
    <>
      <Helmet>
        <title>Painting Contractor London Ontario | Weather Guard Coating</title>
        <meta
          name="description"
          content="Weather Guard Coating, London Ontario's trusted painting contractor since 1989. Residential, commercial, farm & roof coating. Fully insured, WSIB compliant. Free estimates. Call (226) 448-1189."
        />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={`${BASE_URL}/`} />
        <meta property="og:title" content="Painting Contractor London Ontario | Weather Guard Coating" />
        <meta property="og:description" content="Trusted painting contractor in London, Ontario since 1989. Residential, commercial, farm & roof coating. Free estimates, call (226) 448-1189." />
        <meta property="og:url" content={`${BASE_URL}/`} />
        <meta property="og:image" content={`${BASE_URL}/images/hero-video-thumbnail.jpg`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Painting Contractor London Ontario | Weather Guard Coating" />
        <meta name="twitter:description" content="London Ontario's trusted painting contractor since 1989. Free estimates." />
        <meta name="twitter:image" content={`${BASE_URL}/images/hero-video-thumbnail.jpg`} />
      </Helmet>

      {/* LocalBusiness + PaintingContractor structured data */}
      <LocalBusinessSchema />

      <main id="main-content">
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Trust bar */}
        <TrustBar />

        {/* 3. Reviews */}
        <ReviewsSection />

        {/* 4. Problem / Solution */}
        <ProblemSolution />

        {/* 5. Before / After */}
        <BeforeAfter />

        {/* 6. Services Snapshot */}
        <ServicesSnapshot />

        {/* 7. Process */}
        <ProcessSection />

        {/* 8. Why Us */}
        <WhyUs />

        {/* 9. Service Area */}
        <ServiceArea />

        {/* 10. Final CTA */}
        <CTASection
          title="Ready to Get Started?"
          subtitle="Get your free, detailed estimate within 24 hours. No pressure, no obligation."
        />
      </main>
    </>
  );
}
