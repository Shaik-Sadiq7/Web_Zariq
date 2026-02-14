import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiSearch, FiLayers, FiCode, FiCheckCircle } from 'react-icons/fi';

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    {
      number: '01',
      title: 'Understand',
      description: 'We dive deep into your business goals, target audience, and unique challenges to create a tailored strategy.',
      icon: FiSearch,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      number: '02',
      title: 'Design',
      description: 'Our designers craft beautiful, user-centric interfaces that align with your brand and engage your audience.',
      icon: FiLayers,
      color: 'from-purple-500 to-pink-500',
    },
    {
      number: '03',
      title: 'Develop',
      description: 'We build robust, scalable solutions using cutting-edge technologies and best practices in web development.',
      icon: FiCode,
      color: 'from-amber-500 to-orange-500',
    },
    {
      number: '04',
      title: 'Deliver',
      description: 'We launch your project with thorough testing, optimization, and provide ongoing support for your success.',
      icon: FiCheckCircle,
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section
      id="process"
      ref={ref}
      className="py-24 bg-slate-950 dark:bg-black relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHw0fHx0ZWNoJTIwYmFja2dyb3VuZHxlbnwwfHx8fDE3NzA3MzI4ODV8MA&ixlib=rb-4.1.0&q=85"
          alt="Process Background"
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
              Our Process
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto mb-8"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A proven methodology that transforms ideas into exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                {/* Card */}
                <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 h-full hover:border-amber-500/50 transition-all duration-300">
                  {/* Step Number */}
                  <div className="text-6xl font-bold text-slate-800 mb-4 group-hover:text-slate-700 transition-colors duration-300">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${step.color} mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>

                  {/* Description */}
                  <p className="text-slate-400 leading-relaxed">{step.description}</p>

                  {/* Connecting Line (except last item on desktop) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-20 -right-4 w-8 h-0.5 bg-gradient-to-r from-slate-700 to-transparent"></div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
