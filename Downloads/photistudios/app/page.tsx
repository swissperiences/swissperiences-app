'use client';

import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { Testimonial } from './components/Testimonial';
import { Services } from './components/Services';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { EntranceScreen } from './components/EntranceScreen';

/**
 * Home Page - Photi Studios Landing Page
 * Professional podcast production services landing page
 *
 * @returns Complete landing page with all sections
 */
export default function Home() {
  const [showEntrance, setShowEntrance] = useState(true);

  return (
    <>
      {showEntrance && <EntranceScreen onEnter={() => setShowEntrance(false)} />}

      {!showEntrance && (
        <main className="relative min-h-screen bg-white">
          <Header />

          <HeroSection />

        <Testimonial
          quote="We were blown away by Photi and his team. They exceeded expectations every step of the way: courteous, professional, always reachable and really good at their craft."
          name="Nicholas Bourbaki"
          title="Co-host of GoodDay DEMA - Top 50 Business Podcast"
          imageSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop"
        />

        <Services />

        <Testimonial
          quote="The professionalism with which Photi and his team handle their business is out of this world. Their client service is honestly best-in-class. I felt very taken care of."
          name="Nova"
          title="Founder and CEO of Swissperiences"
          imageSrc="/nova.jpg"
        />

        <FinalCTA />

        <Footer />
      </main>
      )}
    </>
  );
}
