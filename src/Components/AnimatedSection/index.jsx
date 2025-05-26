import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ id, title, children, delay = 0, className = '' }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className={` ${className}`} // <--- aqui é onde a mágica acontece
  >
    {title && <h2 className="text-3xl font-extrabold mb-6">{title}</h2>}
    {children}
  </motion.section>
);

export default AnimatedSection;
