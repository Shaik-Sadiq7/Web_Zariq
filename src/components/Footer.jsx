import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiMail, FiMapPin, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 dark:bg-black border-t border-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent mb-4">
                WebZariq
              </h3>
            </motion.div>
            <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
              Building valuable websites with modern technology and timeless design principles. 
              Your digital success is our mission.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://instagram.com/Webzariq"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 bg-slate-900 rounded-lg hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
              >
                <FaInstagram className="w-5 h-5 text-slate-300" />
              </motion.a>
              <motion.a
                href="https://wa.me/919036201856"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 bg-slate-900 rounded-lg hover:bg-green-500 transition-all duration-300"
              >
                <FaWhatsapp className="w-5 h-5 text-slate-300" />
              </motion.a>
              <motion.a
                href="mailto:webzariq@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 bg-slate-900 rounded-lg hover:bg-amber-500 transition-all duration-300"
              >
                <FiMail className="w-5 h-5 text-slate-300" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Work', 'Process', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())}
                    className="text-slate-400 hover:text-amber-400 transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-slate-400">
                <FiMapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-amber-400" />
                <span>Hospet, Karnataka<br />583201</span>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <FiMail className="w-5 h-5 mt-0.5 flex-shrink-0 text-amber-400" />
                <a href="mailto:webzariq@gmail.com" className="hover:text-amber-400 transition-colors duration-200">
                  webzariq@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <FaWhatsapp className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-400" />
                <a href="https://wa.me/919036201856" className="hover:text-amber-400 transition-colors duration-200">
                  +91 9036201856
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm flex items-center gap-1">
              © {new Date().getFullYear()} WebZariq. Made with 
              <FiHeart className="text-red-500 w-4 h-4 mx-1" /> 
              in India
            </p>
            <div className="flex gap-6 text-sm">
              <button className="text-slate-400 hover:text-amber-400 transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="text-slate-400 hover:text-amber-400 transition-colors duration-200">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
