import Button from '@/components/Button';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
function Hero() {
  return (
    <div className="hero">
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
          delay: 0.6,
        }}
      >
        Hi my name is
      </motion.h1>
      <motion.h2
        className="hero-title-large"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
          delay: 0.75,
        }}
      >
        Gurminder Singh.
      </motion.h2>
      <motion.h3
        className="hero-title-large hero-title-sub"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
          delay: 1.05,
        }}
      >
        Let&apos;s Strike a Chord Together.
      </motion.h3>
      <motion.p
        className="hero-text"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
          delay: 1.35,
        }}
      >
        Meet Gurminder Singh, whose dedication to music knows no bounds. With
        years of experience and a deep love for teaching, he brings a unique
        blend of expertise and enthusiasm to every lesson.
      </motion.p>
    </div>
  );
}

export default Hero;
