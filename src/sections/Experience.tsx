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
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae exercitationem maiores.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae exercitationem maiores. Lorem ipsum dolor sit amet.',
      ],
    },
    {
      name: 'Dilruba',
      role: 'Dilruba',
      image: '/dilruba.jpg',
      shortDescription: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae exercitationem maiores.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae exercitationem maiores. Lorem ipsum dolor sit amet.',
      ],
    },
    {
      name: 'Taus',
      role: 'Taus',
      image: '/taus.jpg',
      shortDescription: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae exercitationem maiores.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae exercitationem maiores. Lorem ipsum dolor sit amet.',
      ],
    },
    {
      name: 'Vocals',
      role: 'Vocals',
      image: '/vocals.jpg',
      shortDescription: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae exercitationem maiores.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae exercitationem maiores. Lorem ipsum dolor sit amet.',
      ],
    },
    {
      name: 'Harmonium',
      role: 'Harmonium',
      image: '/harmonium.jpg',
      shortDescription: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae exercitationem maiores.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae exercitationem maiores. Lorem ipsum dolor sit amet.',
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
