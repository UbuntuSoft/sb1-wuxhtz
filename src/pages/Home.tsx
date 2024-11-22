import React from 'react';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { Events } from '../components/Events';
import { Blog } from '../components/Blog';
import { News } from '../components/News';
import { Publications } from '../components/Publications';
import { FootprintCTA } from '../components/FootprintCTA';
import { Footer } from '../components/Footer';

export function Home() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation isScrolled={isScrolled} />
      <Hero />
      <Stats />
      <Events />
      <Blog />
      <News />
      <Publications />
      <FootprintCTA />
      <Footer />
    </div>
  );
}