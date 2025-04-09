function Contact() {
    return (
      <section id="contact" className="py-24 px-6 bg-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Let’s Work Together
          </h2>
          <p className="text-gray-600 mb-10">
            Have a project in mind? Drop me a message below and I’ll get back to you within 24 hours.
          </p>
  
          <form
            action="https://formspree.io/f/myzelgar" // replace with your actual Formspree URL
            method="POST"
            className="space-y-6 text-left"
          >
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                className="peer w-full rounded-lg border border-gray-200 bg-gray-50 px-4 pt-5 pb-2 text-sm focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary"
              >
                Your Name
              </label>
            </div>
  
            {/* Email */}
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                className="peer w-full rounded-lg border border-gray-200 bg-gray-50 px-4 pt-5 pb-2 text-sm focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary"
              >
                Your Email
              </label>
            </div>
  
            {/* Message */}
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="peer w-full rounded-lg border border-gray-200 bg-gray-50 px-4 pt-5 pb-2 text-sm focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                placeholder=" "
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-4 top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary"
              >
                Your Message
              </label>
            </div>
  
            <button
              type="submit"
              className="w-full bg-primary text-white font-medium py-3 rounded-lg hover:bg-primary-hover transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  }
  
  export default Contact;
  