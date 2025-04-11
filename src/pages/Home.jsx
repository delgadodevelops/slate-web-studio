import { useEffect, useState } from 'react';
import Preloader from '../components/Preloader';
import Hero from '../components/Hero';
import HomeServices from '../components/HomeServices';
import About from '../components/About';
import Contact from '../components/Contact';

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowPreloader(false);
      setStartAnimation(true);
    }, 2000); // Match preloader duration
    return () => clearTimeout(timeout);
  }, []);

  if (showPreloader) {
    return <Preloader />;
  }

  return (
    <>
      <Hero startAnimation={startAnimation} />
      <HomeServices />
      <About />
      <Contact />
    </>
  );
}
