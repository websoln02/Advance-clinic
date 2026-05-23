/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import HeaderBanner from './components/HeaderBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Timings from './components/Timings';
import BookingForm from './components/BookingForm';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50/20 text-neutral-850 selection:bg-sky-500 selection:text-white font-sans antialiased scroll-smooth">
      {/* 1. Header Announcement Bar */}
      <HeaderBanner />

      {/* 2. Responsive Sticky Navigation */}
      <Navbar />

      <main>
        {/* 3. Hero Visual Section */}
        <Hero />

        {/* 4. Detailed About Narrative */}
        <About />

        {/* 5. Medical Services Grid */}
        <Services />

        {/* 6. Why Choose US Columns */}
        <WhyChooseUs />

        {/* 7. Standalone Shift Timings Grid with Live Status */}
        <Timings />

        {/* 8. Interactive Booking Form & Local Appts Dashboard */}
        <BookingForm />

        {/* 9. Testimonials Grid Review Cards */}
        <Testimonials />

        {/* 10. Photo Gallery & Lightbox Viewer */}
        <Gallery />

        {/* 11. FAQ Accordion Panels */}
        <FAQ />

        {/* 12. Contact Direct Info with Local Google Map */}
        <Contact />
      </main>

      {/* 13. Dynamic Footnotes, Quick navigations & Map links */}
      <Footer />

      {/* 14. Support Beacons & Sticky Command Ribbon */}
      <FloatingCTA />
    </div>
  );
}
