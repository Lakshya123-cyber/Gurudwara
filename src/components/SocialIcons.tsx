import Link from 'next/link';
import React from 'react';
import { FiInstagram, FiYoutube, FiFacebook } from 'react-icons/fi';
import { motion } from 'framer-motion';

function SocialIcons() {
  const socialLinks = [
    {
      name: 'Youtube',
      icon: <FiYoutube />,
      link: 'https://youtube.com/@mrgurminder123?si=GDHCtBfKvGidTclG',
    },
    {
      name: 'Instagram',
      icon: <FiInstagram />,
      link: 'https://www.instagram.com/gurminders81',
    },
    {
      name: 'Facebook',
      icon: <FiFacebook />,
      link: 'https://www.facebook.com/profile.php?id=100063043641442&mibextid=LQQJ4d',
    },
  ];
  return (
    <motion.div
      className="social-icons"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
        delay: 1.95,
      }}
    >
      <ul className="social-icons-list">
        {socialLinks.map(({ name, icon, link }) => (
          <li key={name} title={name} className="social-icons-list-item">
            <Link
              href={link}
              className="social-icons-list-item-link"
              target="_blank"
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default SocialIcons;
