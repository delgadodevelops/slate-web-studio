import { motion } from 'framer-motion';
import logo from '../assets/logo-slate-web-studio.png'; // use your existing logo or a portrait later

function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Logo / Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={logo}
            alt="Slate Web Studio"
            className="max-w-[400px] md:max-w-[600px]"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Built for Brands That Want to Be Found
          </h2>
          <p className="text-gray-600 mb-4">
            Slate Web Studio is here to help small businesses show up, stand out, and scale up with fast, SEO-ready websites that reflect who they are.
          </p>
          <p className="text-gray-600">
            Whether you’re just getting started or need a total rebrand, we make it simple, clean, and impactful — without the fluff.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
