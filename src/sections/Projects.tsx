import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';

function Projects() {
  const projectsData = [
    {
      image: '/dilruba.jpg',
      projectName: 'Event 1',
      projectDescription:
        "The tabla is a classical Indian percussion instrument, widely used in traditional, classical, popular, and folk music. It consists of two drums of contrasting sizes and timbres: the smaller, treble drum known as the 'dayan' (right hand drum) and the larger, bass drum known as the 'bayan' (left hand drum).",
    },
    {
      image: '/dilruba.jpg',
      projectName: 'Event 2',
      projectDescription:
        "The sarangi is a captivating and ancient string instrument that holds a revered position in traditional Indian music. Often referred to as the 'voice of a hundred colors', the sarangi's rich, soulful sound evokes a wide range of emotions and captivates listeners with its haunting melodies.",
    },
    {
      image: '/dilruba.jpg',
      projectName: 'Event 3',
      projectDescription:
        'The rabab is a captivating and ancient musical instrument with roots that trace back thousands of years, originating in regions across Central, South, and West Asia. Known for its distinctively resonant sound and unique construction, the rabab holds a special place in the rich tapestry of musical traditions in the Middle East, Central Asia, and the Indian subcontinent.',
    },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Gallery</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(({ image, projectDescription, projectName }) => {
          return (
            <motion.div
              className="project"
              key={projectName}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              variants={{
                visible: { opacity: 1, y: -50 },
                hidden: { opacity: 0, y: 0 },
              }}
            >
              <div className="project-image">
                <div className="project-image-overlay"></div>
                <div className="project-image-container">
                  <Image src={image} fill alt={projectName} quality={100} />
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-info-title">{projectName}</h3>
                <div className="project-info-description">
                  <p style={{ color: '#ddd' }}>{projectDescription}</p>
                </div>
                <br />
                <br />
                <br />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
