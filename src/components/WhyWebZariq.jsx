import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiZap, FiShield, FiTrendingUp, FiAward, FiClock, FiUsers } from 'react-icons/fi';

const WhyWebZariq = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: FiZap,
      title: 'Lightning Fast',
      description: 'Optimized performance that keeps your users engaged and search engines happy.',
    },
    {
      icon: FiShield,
      title: 'Secure & Reliable',
      description: 'Built with security best practices and robust architecture for peace of mind.',
    },
    {
      icon: FiTrendingUp,
      title: 'Growth Focused',
      description: 'Every feature is designed to help your business scale and succeed.',
    },
    {
      icon: FiAward,
      title: 'Premium Quality',
      description: 'Agency-level craftsmanship with attention to every detail.',
    },
    {
      icon: FiClock,
      title: 'On-Time Delivery',
      description: 'We respect deadlines and deliver projects when we promise.',
    },
    {
      icon: FiUsers,
      title: 'Ongoing Support',
      description: '24/7 support to ensure your website runs smoothly always.',
    },
  ];

  return (
    <section
      id="why-webzariq"
      ref={ref}
      className="py-24 bg-slate-900 dark:bg-slate-950 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwYmFja2dyb3VuZHxlbnwwfHx8fDE3NzA3MzI4ODV8MA&ixlib=rb-4.1.0&q=85"
          alt="Background Pattern"
          className="w-full h-full object-cover"
        />
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
              Why Choose WebZariq
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto mb-8"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We combine technical excellence with creative innovation to deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-yellow-600/0 group-hover:from-amber-500/5 group-hover:to-yellow-600/5 rounded-2xl transition-all duration-300"></div>

                {/* Icon */}
                <div className="relative mb-6">
                  <div className="inline-flex p-4 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyWebZariq;
