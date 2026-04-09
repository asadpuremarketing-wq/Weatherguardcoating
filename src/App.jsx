import { BrowserRouter, Routes, Route, ScrollRestoration } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import MobileCTABar from './components/layout/MobileCTABar';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Portfolio from './pages/Portfolio';
import Reviews from './pages/Reviews';
import About from './pages/About';
import Contact from './pages/Contact';
import ThankYou from './pages/ThankYou';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

// Google Analytics — replace GA_MEASUREMENT_ID with your actual ID
// window.gtag('config', 'GA_MEASUREMENT_ID');

/**
 * Root application component with routing and layout.
 */
function AppLayout() {
  return (
    <>
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-gold text-white px-4 py-2 rounded-lg z-[100] font-semibold text-sm"
      >
        Skip to main content
      </a>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        {/* 404 — redirect home */}
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />

      {/* Sticky mobile CTA bar */}
      <MobileCTABar />
    </>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </HelmetProvider>
  );
}
