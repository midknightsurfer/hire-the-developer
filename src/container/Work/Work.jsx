import React, { useState } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Work.scss';

const works = [
  {
    title: 'Chase Cole Galleries',
    description:
      'Full Stack furniture marketplace. Solo React/Python project. More in readme',
    imgUrl: images.chasecole,
    tags: 'React, Python, Javascript, HTML, CSS, Redux',
    projectLink: 'https://chase-cole-galleries.herokuapp.com/',
    codeLink: 'https://github.com/midknightsurfer/chase-cole-galleries',
  },
  {
    title: "Vacay N' Stay",
    description:
      'AirBnb clone for luxury vacation spots. App Academy group React/Python project. More in readme.',
    imgUrl: images.vacaynstay,
    tags: 'React, Python, Javascript, HTML, CSS, Redux',
    projectLink: 'https://vacay-n-stays.herokuapp.com/',
    codeLink: 'https://github.com/Kxvin1/vacay-n-stays',
  },
  {
    title: 'Stat Overflow',
    description:
      'Stack Overflow clone for advise in the game Elden Ring. App Academy group React/Express project.',
    imgUrl: images.statoverflow,
    tags: 'React, Express, Javascript, HTML, CSS',
    projectLink: 'https://statoverflow-app.herokuapp.com/',
    codeLink: 'https://github.com/jmartinezsal/statOverflow',
  },
  {
    title: 'Supr',
    description:
      'Flickr clone for Superhero images. App Academy solo React/Express project.',
    imgUrl: images.supr,
    tags: 'React, Express, Javascript, HTML, CSS',
    projectLink: 'https://suprheroes.herokuapp.com/',
    codeLink: 'https://github.com/midknightsurfer/Supr',
  },
];

const Work = () => {
  const [filterWork, setFilterWork] = useState(works);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Projects</span> Section
      </h2>

      <div className="app__work-filter">
        {['React', 'Python', 'Mobile App', 'Express', 'Javascript', 'All'].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? 'item-active' : ''
              }`}
            >
              {item}
            </div>
          ),
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.title} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: 'easeInOut',
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex" />
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);
