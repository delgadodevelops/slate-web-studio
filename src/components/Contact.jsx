import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("https://getform.io/f/bmdkoeqa", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setError(false);
  };

  return (
    <section className="bg-white py-24 px-6">
      <Helmet>
        <title>Contact | Slate Web Studio</title>
        <meta
          name="description"
          content="Reach out to Slate Web Studio. Let's build something great together."
        />
        <link rel="canonical" href="https://slatewebstudio.com/contact" />
      </Helmet>

      <div className="max-w-2xl mx-auto text-center">
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold mb-4 font-outfit text-gray-900"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Let's <span className="text-primary">Connect</span>
        </motion.h1>

        <motion.p
          className="text-gray-600 mb-10"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeUp}
        >
          Fill out the form and we'll be in touch as soon as possible.
        </motion.p>
      </div>

      {/* Success Message */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="max-w-2xl mx-auto bg-blue-50 border border-blue-200 p-6 rounded-2xl shadow text-center relative mb-10"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-blue-700 text-xl hover:text-blue-900"
            >
              &times;
            </button>
            <div className="flex flex-col items-center justify-center">
              <FaCheckCircle className="text-green-500 text-3xl mb-2" />
              <h2 className="text-xl font-bold text-blue-800 mb-1">
                Message Sent Successfully
              </h2>
              <p className="text-blue-700 text-sm">
                Thanks for reaching out! We’ll get back to you shortly.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-gray-50 p-10 rounded-3xl shadow-lg space-y-6"
        initial="hidden"
        animate="visible"
        custom={2}
        variants={fadeUp}
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            required
            className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Tell us about your project..."
            required
            className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary outline-none"
          />
        </div>
        <button
          type="submit"
          className="bg-primary text-white py-3 px-6 rounded-xl font-semibold hover:bg-primary-hover transition-all duration-300 w-full"
        >
          Send Message
        </button>
      </motion.form>

      {error && (
        <div className="max-w-2xl mx-auto mt-6 bg-red-100 text-red-700 text-sm p-4 rounded-xl text-center">
          Something went wrong. Please try again.
        </div>
      )}
    </section>
  );
}
