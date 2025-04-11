import { FaLaptopCode, FaSearch, FaPaintBrush, FaTools } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function HomeServices() {
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

        {/* Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="p-6 bg-blue-50 border border-blue-100 shadow-sm rounded-xl hover:shadow-md hover:bg-blue-100 transition"
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            to="/services"
            className="inline-block bg-primary text-white font-medium px-8 py-4 rounded-full text-lg hover:bg-primary-hover transition shadow hover:scale-105"
          >
            Explore All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeServices;
