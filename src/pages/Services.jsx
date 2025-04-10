import { motion } from 'framer-motion';
import {
  FaLaptopCode,
  FaSearch,
  FaPaintBrush,
  FaTools,
} from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

const webDesignTiers = [
  {
    title: 'Starter',
    price: '$799+',
    features: ['1-page site', 'Mobile responsive', 'Contact form', 'Launch in 1 week'],
  },
  {
    title: 'Professional',
    price: '$1499+',
    features: ['Multi-page site', 'Custom design', 'SEO basics', 'Logo included'],
    highlight: true,
    mostPopular: true,
  },
  {
    title: 'Premium',
    price: '$2499+',
    features: ['Full custom site', 'Advanced SEO', 'Branding kit', 'Maintenance plan'],
  },
];

const seoTiers = [
  {
    title: 'SEO Starter Pack',
    price: '$450 (one-time)',
    features: [
      'Full site audit',
      'On-page optimization',
      'Keyword setup & tracking',
      'Search console + sitemap setup',
    ],
  },
  {
    title: 'Monthly Growth',
    price: '$600/mo',
    features: [
      'Ongoing keyword tracking',
      'Monthly content optimization',
      'Backlink strategy & outreach',
      'Performance reporting',
    ],
    highlight: true,
    mostPopular: true,
  },
  {
    title: 'Local SEO Boost',
    price: '$350/mo',
    features: [
      'Local keyword targeting',
      'Google Business optimization',
      'Review strategy',
      'Citations & local directories',
    ],
  },
];

const brandingOptions = [
  {
    title: 'Logo Design',
    price: '$500',
    features: ['3 concepts', '2 revisions', 'Final files included'],
  },
  {
    title: 'Brand Kit',
    price: '$950',
    features: ['Logo + Colors + Fonts', 'Style guide', 'Social graphics'],
    mostPopular: true,
  },
];

const maintenanceTiers = [
  {
    title: 'Essential',
    price: '$99/mo',
    features: ['Security updates', 'Monthly backups', 'Basic edits'],
  },
  {
    title: 'Pro',
    price: '$199/mo',
    features: ['All Essential', 'Priority edits', 'Content updates'],
    mostPopular: true,
  },
];

function PricingSection({ title, description, plans }) {
  return (
    <div className="mb-24 text-center">
      <motion.h2
        className="text-3xl font-bold mb-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          className="text-gray-600 max-w-xl mx-auto mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {description}
        </motion.p>
      )}
      <div
        className={`grid gap-8 ${
          plans.length === 2
            ? 'md:grid-cols-2 justify-center'
            : 'md:grid-cols-3'
        }`}
      >
        {plans.map((plan, i) => (
          <motion.div
            key={plan.title}
            className={`relative border p-6 rounded-xl shadow-md hover:shadow-xl transition ${
              plan.highlight
                ? 'border-primary bg-primary/5 dark:bg-primary/10'
                : 'border-gray-200 dark:border-slate-700'
            }`}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            {plan.mostPopular && (
              <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full shadow z-10">
                Most Popular
              </span>
            )}
            <h3 className="text-xl font-bold text-primary mb-2">{plan.title}</h3>
            <p className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">{plan.price}</p>
            <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2 mb-4">
              {plan.features.map((f, idx) => (
                <li key={idx}>✅ {f}</li>
              ))}
            </ul>
            <a
              href="/contact"
              className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-primary-hover transition"
            >
              Get Started
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <PricingSection
        title="Web Design Packages"
        description="Clean, modern, responsive websites tailored to your business goals."
        plans={webDesignTiers}
      />
      <PricingSection
        title="SEO Plans"
        description="Whether you're just getting started or ready to scale, these SEO options help your business get found and grow organically."
        plans={seoTiers}
      />
      <PricingSection
        title="Branding & Logo Design"
        description="Make your brand memorable with a bold, professional visual identity."
        plans={brandingOptions}
      />
      <PricingSection
        title="Website Maintenance"
        description="We’ll take care of the technical stuff — you focus on running your business."
        plans={maintenanceTiers}
      />
    </section>
  );
}
