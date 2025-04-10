import { motion } from 'framer-motion';
import {
  FaLaptopCode,
  FaSearch,
  FaPaintBrush,
  FaTools,
} from 'react-icons/fa';

const services = [
  {
    title: 'Custom Web Design',
    description:
      'We build blazing-fast, responsive websites tailored to your brand and optimized to convert visitors into clients.',
    icon: <FaLaptopCode className="text-3xl text-primary" />,
    image: 'https://picsum.photos/600/400?random=1',
  },
  {
    title: 'SEO Optimization',
    description:
      'Get found on Google with optimized content, technical SEO, and local strategies to drive real results.',
    icon: <FaSearch className="text-3xl text-primary" />,
    image: 'https://picsum.photos/600/400?random=2',
  },
  {
    title: 'Logo & Branding',
    description:
      'From logo design to brand guides — we help you establish a consistent, pro-level identity across platforms.',
    icon: <FaPaintBrush className="text-3xl text-primary" />,
    image: 'https://picsum.photos/600/400?random=3',
  },
  {
    title: 'Site Maintenance',
    description:
      'Ongoing support, content updates, and performance monitoring — so your website never misses a beat.',
    icon: <FaTools className="text-3xl text-primary" />,
    image: 'https://picsum.photos/600/400?random=4',
  },
];

const pricing = [
  {
    title: 'Starter',
    price: '$799+',
    features: [
      '1-page website',
      'Mobile responsive',
      'Contact form',
      'Launch-ready in 1 week',
    ],
  },
  {
    title: 'Professional',
    price: '$1499+',
    features: [
      'Multi-page site',
      'Basic SEO setup',
      'Custom design',
      'Logo included',
    ],
    highlight: true,
  },
  {
    title: 'Premium',
    price: '$2499+',
    features: [
      'Full custom design',
      'Advanced SEO',
      'Branding kit',
      'Maintenance plan',
    ],
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden py-24 px-6 max-w-6xl mx-auto text-center z-10">
      {/* Background blobs */}
      <div className="absolute -top-20 left-0 w-[500px] h-[500px] bg-blue-100 dark:bg-blue-800 opacity-20 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-[-100px] right-0 w-[400px] h-[400px] bg-purple-100 dark:bg-purple-800 opacity-20 rounded-full blur-3xl z-0" />

      {/* Header */}
      <motion.h1
        className="text-4xl font-bold mb-6 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What We Offer
      </motion.h1>

      <motion.p
        className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-12 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        From stunning visuals to powerful SEO, Slate delivers results that grow your brand online.
      </motion.p>

      {/* Services */}
      <div className="relative z-10 grid gap-10 md:grid-cols-2 mb-24">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="bg-white dark:bg-slate-800 shadow-xl rounded-xl overflow-hidden text-left border border-gray-100 dark:border-slate-700 hover:shadow-2xl transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <div className="mb-3">{service.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pricing */}
      <motion.h2
        className="text-3xl font-bold mb-10 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Pricing Plans
      </motion.h2>

      <div className="relative z-10 grid md:grid-cols-3 gap-8 mb-24">
        {pricing.map((tier, index) => (
          <motion.div
            key={tier.title}
            className={`border p-6 rounded-xl shadow-lg transform transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${
              tier.highlight
                ? 'border-primary bg-primary/5 dark:bg-primary/10'
                : 'border-gray-200 dark:border-slate-700'
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-primary mb-2">{tier.title}</h3>
            <p className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
              {tier.price}
            </p>
            <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm">
              {tier.features.map((feature, i) => (
                <li key={i}>✅ {feature}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className="relative z-10 max-w-xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-bold mb-3">Need something custom?</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          We tailor every project to your brand, goals, and budget. Let’s chat about building something great.
        </p>
        <a
          href="/contact"
          className="inline-block bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary-hover transition"
        >
          Start Your Project 🚀
        </a>
      </motion.div>
    </section>
  );
}
