import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { useInView, motion } from 'framer-motion';

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log('Element is in view: ', isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Hello, I am Gurminder Singh. I have been learning music specially
            Gurmat Sangeet (Sikh music) since I was 9 years old.
          </p>
          <p className="about-grid-info-text">
            Currently I am in Singapore to teach Sikh Music and also conducting
            online classes for Vocals, harmonium, Tabla, Rabab, Taus, Dilruba.
          </p>
          <p className="about-grid-info-text">
            I have students from Countries like America, Australia, Canada, New
            Zealand.
          </p>
          <p className="about-grid-info-text">
            You can reach to me through WhatsApp:
            <br />
            <Link
              style={{ textDecoration: 'none', color: '#FFFF00' }}
              href="https://wa.me/+6588492180"
              target="_blank"
            >
              +65 88492180{' '}
            </Link>
            <Link
              style={{ textDecoration: 'none', color: '#FFFF00' }}
              href="https://wa.me/+6591970178"
              target="_blank"
            >
              +65 91970178
            </Link>
          </p>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/about.jpg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
