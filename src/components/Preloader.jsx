import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/s-logo-white.png'; // Adjust path if needed

const Preloader = ({ onFinish }) => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowPreloader(false);
      if (onFinish) onFinish();
    }, 2000); // duration covers logo + text reveal

    return () => clearTimeout(timeout);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {showPreloader && (
<motion.div
  className="fixed inset-0 bg-blue-600 flex flex-col items-center justify-center text-white z-[9999]"
  initial={{ opacity: 1 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.8, ease: 'easeInOut' }}
>
          {/* Logo */}
          <motion.img
            src={logo}
            alt="Slate Web Studio Logo"
            className="h-20 w-20 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          />

          {/* Text Reveal */}
          <div className="relative overflow-hidden h-10">
            <motion.div
              className="text-3xl font-bold tracking-widest font-outfit uppercase"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              transition={{
                duration: 0.6,
                ease: 'easeInOut',
                delay: 0.2,
              }}
            >
              Slate Web Studio
            </motion.div>

            {/* Reveal mask */}
            <motion.div
              className="absolute top-0 left-0 h-full w-full bg-blue-600 z-10"
              initial={{ x: 0 }}
              animate={{ x: '100%' }}
              transition={{
                duration: 1.2,
                ease: 'easeInOut',
                delay: 0.6,
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
