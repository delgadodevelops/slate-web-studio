import { FaLaptopCode, FaSearch, FaPaintBrush, FaTools } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Services() {
  const services = [
    {
      icon: <FaLaptopCode size={28} />,
      title: 'Web Design',
      description: 'Clean, responsive websites built for performance and SEO.',
    },
    {
      icon: <FaSearch size={28} />,
      title: 'SEO Optimization',
      description: 'Get found on Google with local, technical & on-page SEO.',
    },
    {
      icon: <FaPaintBrush size={28} />,
      title: 'Branding & Logos',
      description: 'Custom logos and brand kits to give your business identity.',
    },
    {
      icon: <FaTools size={28} />,
      title: 'Maintenance & Support',
      description: 'Ongoing updates, speed optimization & hosting help.',
    },
  ];

  return (
    <section id="services" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">What We Do</h2>
        <p className="text-gray-600 mb-12 max-w-xl mx-auto">
          We offer a full suite of services to launch, grow, and maintain your digital presence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="p-6 border border-gray-100 shadow-sm rounded-xl hover:shadow-md hover:border-primary transition"
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
