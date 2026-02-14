import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, redirect to WhatsApp with the message
    const message = `Hi WebZariq! I'm ${formData.name}. ${formData.message}`;
    window.open(`https://wa.me/919036201856?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919036201856', '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:webzariq@gmail.com';
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 bg-slate-950 dark:bg-black relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto mb-8"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Ready to transform your digital presence? Get in touch with us today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                We're here to answer your questions and discuss how we can help bring your vision to life.
              </p>
            </div>

            {/* Contact Cards */}
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-start gap-4 p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl hover:border-amber-500/50 transition-all duration-300 cursor-pointer"
              onClick={handleWhatsApp}
            >
              <div className="p-3 bg-green-500/10 rounded-lg">
                <FaWhatsapp className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">WhatsApp</h4>
                <p className="text-slate-400">+91 9036201856</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-start gap-4 p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl hover:border-amber-500/50 transition-all duration-300 cursor-pointer"
              onClick={handleEmail}
            >
              <div className="p-3 bg-amber-500/10 rounded-lg">
                <FiMail className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Email</h4>
                <p className="text-slate-400">webzariq@gmail.com</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-start gap-4 p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl hover:border-amber-500/50 transition-all duration-300"
            >
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <FiMapPin className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Location</h4>
                <p className="text-slate-400">Hospet, Karnataka 583201</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-start gap-4 p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl hover:border-amber-500/50 transition-all duration-300 cursor-pointer"
              onClick={() => window.open('https://instagram.com/Webzariq', '_blank')}
            >
              <div className="p-3 bg-pink-500/10 rounded-lg">
                <FaInstagram className="w-6 h-6 text-pink-400" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Instagram</h4>
                <p className="text-slate-400">@Webzariq</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors duration-200"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors duration-200"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors duration-200 resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 font-semibold rounded-lg shadow-lg hover:shadow-amber-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send Message
                <FiSend />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
