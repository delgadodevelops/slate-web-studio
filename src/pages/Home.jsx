import { useEffect, useState } from "react";
import Preloader from "../components/Preloader";
import Hero from "../components/Hero";
import HomeServices from "../components/HomeServices";
import About from "../components/About";
import Contact from "../components/Contact";
import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <title>Slate Web Studio | Custom Websites & SEO in Florida</title>
        <meta
          name="description"
          content="Slate Web Studio builds custom, SEO-ready websites for Florida businesses. Mobile-friendly, lightning fast, and performance optimized."
        />
        <meta
          name="keywords"
          content="custom website design florida, web design agency pembroke pines, SEO-focused website studio, mobile-friendly websites, modern web design for small businesses, florida web development studio"
        />
        <link rel="canonical" href="https://slatewebstudio.com/" />

        {/* LocalBusiness Structured Data */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Slate Web Studio",
        "image": "https://slatewebstudio.com/og-image.jpg",
        "url": "https://slatewebstudio.com",
        "telephone": "+1-123-456-1234",
        "email": "info@slatewebstudio.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Pembroke Pines",
          "addressRegion": "FL",
          "postalCode": "33028",
          "addressCountry": "US"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "09:00",
          "closes": "18:00"
        },
        "description": "Slate Web Studio is a Florida-based creative agency building custom websites, branding, and SEO solutions for modern businesses.",
        "sameAs": [
          "https://instagram.com/slatewebstudio"
        ]
      }
    `}
        </script>
      </Helmet>

      <Hero startAnimation={startAnimation} />
      <HomeServices />
      <About />
      <Contact />
    </>
  );
}
