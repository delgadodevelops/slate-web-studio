import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo-slate-web-studio.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full px-6 py-4 shadow-md sticky top-0 bg-white z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2">
          <img src={logo} alt="Slate Web Studio logo" className="h-10 md:h-12 w-auto" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-2">
          {[
            { href: '#services', label: 'Services' },
            { href: '#portfolio', label: 'Portfolio' },
            { href: '#about', label: 'About' },
            { href: '#contact', label: 'Contact' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-m text-primary font-medium px-4 py-2 rounded-full transition duration-500 hover:bg-primary hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden absolute top-16 left-0 w-full bg-white backdrop-blur-lg text-center px-6 py-6 shadow-md z-40"
          >
            <div className="flex flex-col space-y-4 text-sm font-medium">
              {['services', 'portfolio', 'about', 'contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  className="text-m text-primary font-medium px-4 py-2 rounded-full transition duration-500 hover:bg-primary hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
