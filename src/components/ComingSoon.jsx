import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo-slate-web-studio.png';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const launchDate = new Date('2025-05-15');
const startDate = new Date('2025-04-01');

function ComingSoon() {
  const [daysLeft, setDaysLeft] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = Math.max(0, launchDate - now);
      setDaysLeft(Math.ceil(diff / (1000 * 60 * 60 * 24)));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const res = await fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    });

    if (res.ok) {
      setSubmitted(true);
      form.reset();
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50 dark:from-slate-900 dark:to-slate-800 px-6 text-center overflow-hidden">

      {/* 🌊 Background blob */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1.4 }}
        transition={{ duration: 8, ease: 'easeOut' }}
        className="absolute -top-20 -left-32 w-[600px] h-[600px] bg-blue-300 rounded-full blur-[120px] z-0"
      />

      {/* 🎨 Floating SVG decor */}
      <svg className="absolute bottom-0 left-0 w-40 opacity-10 z-0" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50" fill="url(#grad)" />
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#9333ea" />
          </linearGradient>
        </defs>
      </svg>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-xl bg-white/90 dark:bg-slate-800/90 border border-gray-200 dark:border-slate-700 rounded-xl shadow-xl px-8 py-12 backdrop-blur-md"
      >

        {/* 🔥 Logo */}
        <motion.img
          src={logo}
          alt="Slate Web Studio logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mb-6 w-40 md:w-48"
        />

        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          Coming Soon
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          Our new digital studio experience is almost here.
        </p>

        {/* ⏳ Countdown + Progress Bar */}
        {daysLeft !== null && (
          <>
            <p className="text-sm text-gray-500 mb-2">
              Launching in <span className="font-semibold text-primary">{daysLeft} days</span>
            </p>

            <div className="w-full bg-gray-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden mb-6">
              <motion.div
                className="bg-primary h-full"
                initial={{ width: 0 }}
                animate={{
                  width: `${
                    100 -
                    Math.floor(((launchDate - new Date()) / (launchDate - startDate)) * 100)
                  }%`,
                }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              />
            </div>
          </>
        )}

        {/* 📥 Email Form or Message */}
        {submitted ? (
          <motion.p
            className="text-green-600 dark:text-green-400 text-md font-medium mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            🎉 You're on the list! We'll be in touch soon.
          </motion.p>
        ) : (
          <form
            action="https://formspree.io/f/your-form-id" // Replace with your Formspree ID
            method="POST"
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 sm:gap-2 justify-center mb-6"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            />
            <button
              type="submit"
              className="bg-primary text-white font-medium px-6 py-2 rounded-full hover:bg-primary-hover transition text-sm"
            >
              Notify Me
            </button>
          </form>
        )}

        {/* 🗣️ Quote */}
        <blockquote className="italic text-sm text-gray-400 mb-6 max-w-md mx-auto">
          “Good design isn’t just pretty — it’s strategic. We build websites that convert.”
        </blockquote>

        {/* 🌐 Socials */}
        <div className="flex justify-center gap-4 text-gray-400 text-xl mb-4">
          <a
            href="https://instagram.com/slatewebstudio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com/company/slatewebstudio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <FaLinkedin />
          </a>
        </div>

        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Slate Web Studio
        </p>
      </motion.div>
    </section>
  );
}

export default ComingSoon;
