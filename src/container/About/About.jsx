import React from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';

const About = () => {
  const abouts = [
    { title: 'Modern Web Applications', imgUrl: images.about01, description: 'State of the art web apps and the latest in internet technologies and frameworks' },
    { title: 'Fullstack Flavor', imgUrl: images.about03, description: 'Backend databases, test suites and collaborative destinies' },
    { title: 'UI/UX design experience', imgUrl: images.about02, description: 'Expertly crafted wireframes and high fidelity mock ups made with Adobe XD' },
    { title: 'Proud App Academy Graduate', imgUrl: images.appacademy, description: 'Professionaly taught curriculum, real world project experience.' },
  ];

  return (
    <>
      <h2 className="head-text">First, Solve the <span>Problem</span> <br />then, write the <span>Code</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
