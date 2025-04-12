import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import foamexImg from '../assets/portfolio-foamex.png';
import placeholderImg from '../assets/desktop-gray.png';

const projects = [
  {
    title: 'Foamex Detailing',
    description: 'A high-performance site for a car detailing brand.',
    image: foamexImg,
    liveUrl: 'https://foamexdetailing.com',
  },
  {
    title: 'Sunset Realty',
    description: 'Modern real estate website with MLS integration.',
    image: placeholderImg,
    liveUrl: '#',
  },
  {
    title: 'Juice Lab',
    description: 'A colorful e-comm site for a smoothie startup.',
    image: placeholderImg,
    liveUrl: '#',
  },
];

export default function Portfolio() {
  return (
    <>
      <Helmet>
        <title>Portfolio | Slate Web Studio</title>
        <meta
          name="description"
          content="Browse our latest web design and development work. See how we build fast, responsive, and SEO-ready websites for small businesses."
        />
        <meta property="og:title" content="Portfolio | Slate Web Studio" />
        <meta
          property="og:description"
          content="Browse our recent projects — fast, SEO-optimized websites that help brands stand out online."
        />
        <meta property="og:image" content="https://slatewebstudio.com/og-image.jpg" />
        <meta property="og:url" content="https://slatewebstudio.com/portfolio" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio | Slate Web Studio" />
        <meta
          name="twitter:description"
          content="Clean and modern websites built with SEO in mind. See our work."
        />
        <meta name="twitter:image" content="https://slatewebstudio.com/og-image.jpg" />
      </Helmet>

      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <motion.h2
            className="text-center text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 font-outfit"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Featured <span className="text-primary">Projects</span>
          </motion.h2>

          {/* Section Description */}
          <motion.p
            className="text-center text-gray-600  max-w-2xl mx-auto mb-16 font-outfit text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            A curated selection of recent web design projects that showcase our clean aesthetic,
            responsive builds, and SEO-first approach.
          </motion.p>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-20">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-left"
              >
                {/* Image with hover animation */}
                <motion.div
                  className="overflow-hidden group"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-contain transition-transform duration-500 ease-in-out scale-95 group-hover:scale-100"
                  />
                </motion.div>

                {/* Text Content */}
                <div className="mt-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900  mb-2 font-outfit">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600  mb-4 font-outfit leading-relaxed">
                    {project.description}
                  </p>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary text-white font-medium px-5 py-2 rounded-full text-sm hover:bg-primary-hover transition duration-300 ease-in-out shadow hover:shadow-md"
                    >
                      View Live <FiExternalLink size={16} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
