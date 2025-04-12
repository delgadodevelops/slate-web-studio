import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Contact() {
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

      <motion.form
        action="https://getform.io/f/bmdkoeqa" // Replace with your real Getform URL
        method="POST"
        className="max-w-2xl mx-auto bg-gray-50 p-10 rounded-3xl shadow-lg space-y-6"
        initial="hidden"
        animate="visible"
        custom={2}
        variants={fadeUp}
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            required
            className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
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
    </section>
  );
}
