import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="bg-white py-24 px-6">
      <Helmet>
        <title>Contact | Slate Web Studio</title>
        <meta
          name="description"
          content="Get in touch with Slate Web Studio. Fill out the form or reach us by phone or email. Let’s build your next project together."
        />
        <link rel="canonical" href="https://slatewebstudio.com/contact" />
      </Helmet>

      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-custom-blue"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Get in <span className="text-primary">Touch</span>
        </motion.h1>

        <motion.p
          className="text-gray-600 text-center mb-12"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeUp}
        >
          We'd love to hear from you — fill out the form or reach us directly.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form or Success Message */}
          <motion.div
            className="rounded-3xl shadow-xl overflow-hidden"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
          >
            {submitted ? (
              <motion.div
                className="w-full h-full bg-blue-50 border border-blue-200 text-blue-800 px-10 py-16 text-center relative"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold mb-3">Message Sent Successfully</h3>
                <p className="text-base max-w-md mx-auto text-blue-700">
                  Thanks for reaching out! We'll get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="absolute top-4 right-5 text-blue-500 hover:text-blue-700 text-xl font-bold"
                  aria-label="Close"
                >
                  ×
                </button>
              </motion.div>
            ) : (
              <form
                action="https://getform.io/f/bmdkoeqa"
                method="POST"
                onSubmit={() => setSubmitted(true)}
                className="bg-gray-50 p-8 space-y-6"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-custom-blue outline-none"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-custom-blue outline-none"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-custom-blue outline-none"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-primary text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="flex flex-col justify-center space-y-6 text-lg text-gray-700"
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeUp}
          >
            <div>
              <h3 className="font-bold text-gray-900 mb-1">📍 Address</h3>
              <p>Pembroke Pines, Florida</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">📞 Phone</h3>
              <p>(123) 456-1234</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">📧 Email</h3>
              <p>info@slatewebstudio.com</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">📣 Social</h3>
              <div className="flex space-x-4 text-custom-blue items-center">
                <a
                  href="https://instagram.com/slatewebstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 text-2xl"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
