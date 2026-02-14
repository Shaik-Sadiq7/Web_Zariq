import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { clients } from '../data/mockData';

const Clients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="clients"
      ref={ref}
      className="py-24 bg-slate-900 dark:bg-slate-950 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
              Trusted By
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto mb-8"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We've had the privilege of working with amazing clients who trust us with their digital presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 flex items-center justify-center h-32 cursor-pointer overflow-hidden"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 to-yellow-600/0 group-hover:from-amber-500/10 group-hover:to-yellow-600/10 transition-all duration-300"></div>
              
              <h3 className="text-xl font-bold text-slate-400 group-hover:text-amber-400 transition-colors duration-300 text-center relative z-10">
                {client.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
