import { motion } from 'framer-motion';
import heroMockup from '../assets/mockup-laptop.webp';

function Hero({ startAnimation }) {
  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text Content */}
        <motion.div
          className="text-center md:text-left"
          initial={startAnimation ? { opacity: 0, y: 30 } : false}
          animate={startAnimation ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900  sm:text-5xl md:text-6xl">
            <span className="block mb-1">Custom Websites</span>
            <span className="block bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              That Help You Get Found
            </span>
            <div className="mt-2 text-lg sm:text-xl text-primary font-medium">
              SEO-Optimized. Lightning Fast. Built to Scale.
            </div>
          </h1>

          <p className="uppercase tracking-widest text-sm text-primary font-semibold my-3">
            Florida-Based Web Studio
          </p>

          <div className="flex justify-center md:justify-start gap-4 text-gray-500 text-sm mb-6">
            <span className="flex items-center gap-1">⚡ <span>Fast</span></span>
            <span className="flex items-center gap-1">🔍 <span>SEO Ready</span></span>
            <span className="flex items-center gap-1">📱 <span>Responsive</span></span>
          </div>

          <p className="mt-6 max-w-md text-lg text-gray-600 ">
            Slate Web Studio builds clean, fast, and search-friendly websites that turn visitors into customers.
          </p>

          <div className="mt-8">
            <a
              href="#contact"
              className="inline-block bg-primary text-white font-medium px-6 py-3 rounded-full hover:bg-primary-hover transition duration-300"
            >
              Let’s Build Your Website 🚀
            </a>
          </div>
        </motion.div>

        {/* Right: Device Mockup - Desktop Only */}
        <motion.div
          className="hidden md:flex justify-end"
          initial={startAnimation ? { opacity: 0, scale: 0.9 } : false}
          animate={startAnimation ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
        >
          <img
            src={heroMockup}
            alt="Website preview"
            loading="lazy"
            className="max-w-[600px] w-full rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
