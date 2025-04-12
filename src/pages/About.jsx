import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FaBolt, FaHandshake, FaChartLine, FaLaptopCode } from "react-icons/fa";
import showcaseImage from "../assets/stock-studio.png"; // Replace with your real image

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Slate Web Studio</title>
        <meta
          name="description"
          content="Learn more about Slate Web Studio — a Florida-based web design agency building custom, SEO-optimized websites for modern brands."
        />
        <meta
          name="keywords"
          content="florida-based web design agency, creative design studio florida, full-service web and SEO studio, custom-coded websites florida"
        />
        <meta property="og:title" content="About Us | Slate Web Studio" />
        <meta
          property="og:description"
          content="Slate Web Studio crafts bold, fast, SEO-optimized websites and branding to help businesses stand out."
        />
        <meta
          property="og:image"
          content="https://slatewebstudio.com/og-image.jpg"
        />
        <meta property="og:url" content="https://slatewebstudio.com/about" />
      </Helmet>

      <section className="bg-white  text-gray-900  py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 font-outfit">
              Building Brands Through Bold Digital Design
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Slate Web Studio is a Florida-based creative agency crafting
              custom websites, branding, and SEO solutions for modern businesses
              ready to stand out.
            </p>
          </motion.div>

          {/* Showcase Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <img
              src={showcaseImage}
              alt="Our studio in action"
              className="rounded-xl shadow-lg w-full object-cover max-h-[600px] mx-auto"
            />
          </motion.div>

          {/* What We Stand For */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-2xl font-bold mb-10 text-center">
              What Drives Us
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { icon: <FaHandshake />, title: "Transparency" },
                { icon: <FaBolt />, title: "Speed & Performance" },
                { icon: <FaChartLine />, title: "Results-Driven" },
                { icon: <FaLaptopCode />, title: "Custom Solutions" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-blue-50  border-blue-100 rounded-xl"
                >
                  <div className="text-primary text-2xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold">{item.title}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Our Approach */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">How We Work</h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                {
                  step: "01",
                  label: "Discovery",
                  desc: "We learn your goals, audience, and brand.",
                },
                {
                  step: "02",
                  label: "Design",
                  desc: "We craft a tailored UI/UX aligned with your vision.",
                },
                {
                  step: "03",
                  label: "Build",
                  desc: "Fast, responsive code optimized for performance.",
                },
                {
                  step: "04",
                  label: "Launch + Grow",
                  desc: "We deploy, optimize for SEO, and support your growth.",
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl bg-slate-100  shadow-sm hover:shadow-md transition"
                >
                  <div className="text-primary text-xl font-bold mb-2">
                    {step.step}
                  </div>
                  <h4 className="font-semibold mb-1">{step.label}</h4>
                  <p className="text-sm text-gray-600 ">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">
              Tools We Build With
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center text-sm text-gray-700 ">
              {[
                { name: "Vite", logo: "⚡" },
                { name: "Tailwind CSS", logo: "🎨" },
                { name: "Framer Motion", logo: "🌀" },
                { name: "React", logo: "⚛️" },
                { name: "Formspree", logo: "✉️" },
              ].map((tool, i) => (
                <motion.div
                  key={i}
                  className="p-4 bg-gray-50  rounded-xl shadow-sm hover:shadow-md transition"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl mb-2">{tool.logo}</div>
                  <div className="font-semibold">{tool.name}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">
              Studio Stats
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center text-gray-800  font-outfit">
              {[
                { stat: "20+", label: "Websites Launched" },
                { stat: "1 Week", label: "Turnarounds Available" },
                { stat: "100%", label: "Custom-Built Designs" },
                { stat: "5⭐", label: "Client Satisfaction" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-blue-50  p-6 rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <div className="text-3xl font-bold text-primary mb-2">
                    {item.stat}
                  </div>
                  <div className="text-sm">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <div className="text-center mt-16">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl font-semibold mb-4"
            >
              Let’s Build Something Exceptional Together.
            </motion.h3>
            <a
              href="/contact"
              className="inline-block bg-primary text-white font-medium px-8 py-3 rounded-full hover:bg-primary-hover transition"
            >
              Get in Touch →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
