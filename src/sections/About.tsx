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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, eius. Quaerat odio saepe, autem ipsam ipsum rem facere
            consequuntur deleniti beatae perspiciatis soluta dolor debitis ea
          </p>
          <p className="about-grid-info-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>

          <p className="about-grid-info-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          </p>
          <p className="about-grid-info-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            beatae officia assumenda eum nam labore harum ullam?
          </p>
          <p className="about-grid-info-text">
            Here are a few instruments I&apos;ve been playing recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">Rabab</li>
            <li className="about-grid-info-list-item">Dilruba</li>
            <li className="about-grid-info-list-item">Taus</li>
            <li className="about-grid-info-list-item">Harmonium</li>
            <li className="about-grid-info-list-item">Tabla</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/guruu.jpg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
