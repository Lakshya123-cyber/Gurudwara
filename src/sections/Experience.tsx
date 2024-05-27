import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>('.underline');
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: 'Rabab',
      role: 'Rabab',
      image: '/rababb.jpg',
      shortDescription: [
        'The rabab is a traditional string instrument with deep historical roots, originating in the Middle East and Central Asia.',
        'Generally, it has a body made of wood, often with a membrane stretched over the soundbox, and typically features two or more strings.',
      ],
    },
    {
      name: 'Dilruba',
      role: 'Dilruba',
      image: '/dilruba.jpg',
      shortDescription: [
        'The dilruba is a traditional string instrument used primarily in the classical music of North India.',
        'The dilruba features a long neck with frets, similar to the sitar, and a resonating chamber covered with a skin membrane, akin to the sarangi.',
      ],
    },
    {
      name: 'Taus',
      role: 'Taus',
      image: '/taus.jpg',
      shortDescription: [
        'The taus, also known as the "Mayuri veena" due to its peacock-like shape, is a traditional bowed string instrument originating from the Punjab region of India.',
        'The taus is visually striking with its body carved in the shape of a peacock, complete with a decorative neck and head.',
      ],
    },
    {
      name: 'Harmonium',
      role: 'Harmonium',
      image: '/harmonium.jpg',
      shortDescription: [
        'The harmonium is a reed keyboard instrument that originated in Europe in the early 19th century and was later adapted and popularized in India.',
        "The harmonium's ability to sustain notes and produce a continuous sound makes it ideal for supporting singers in genres such as khyal, bhajan, ghazal, and qawwali.",
      ],
    },
    {
      name: 'Vocals',
      role: 'Vocals',
      image: '/vocals.jpg',
      shortDescription: [
        'Vocal performance encompasses a wide range of techniques and styles, each tailored to different musical genres and traditions.',
      ],
    },
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
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
        <h2>What I&apos;ve Played</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((experience, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && 'exp-slider-item-selected'
                }`}
                onClick={() => setSelected(index)}
                key={experience.name}
              >
                <span>{experience.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
            </h3>
            <br />
            <Image
              src={expereinces[selected].image}
              width={350}
              height={200}
              alt="tabla"
              className="expImage"
            />
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
