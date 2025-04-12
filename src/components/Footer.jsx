import { motion } from 'framer-motion';
import { FaInstagram, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/logo-slate-web-studio.png';

export default function Footer() {
  return (
    <motion.footer
      className="bg-white  border-t border-gray-200 py-12 px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Slate Web Studio" className="h-10 w-auto" />
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-600  mb-6">
          <a href="/" className="hover:text-primary transition">Home</a>
          <a href="/services" className="hover:text-primary transition">Services</a>
          <a href="/portfolio" className="hover:text-primary transition">Portfolio</a>
          <a href="/about" className="hover:text-primary transition">About</a>
          <a href="/contact" className="hover:text-primary transition">Contact</a>
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-xl text-gray-500  mb-6">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-primary transition">
            <FaInstagram />
          </a>
          <a href="mailto:info@slatewebstudio.com" className="hover:text-primary transition">
            <FaEnvelope />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-400 ">
          &copy; {new Date().getFullYear()} Slate Web Studio. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
