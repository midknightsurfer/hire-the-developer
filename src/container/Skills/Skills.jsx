import React from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Skills.scss';

const skills = [
  {
    image: images.react,
    name: 'React',
  },
  {
    image: images.redux,
    name: 'Redux',
  },
  {
    image: images.api,
    name: 'API',
  },
  {
    image: images.css,
    name: 'CSS',
  },
  {
    image: images.javascript,
    name: 'JavaScript',
  },
  {
    image: images.git,
    name: 'Git',
  },
  {
    image: images.html,
    name: 'HTML',
  },
  {
    image: images.python,
    name: 'Python',
  },
  {
    image: images.css,
    name: 'CSS',
  },
  {
    image: images.node,
    name: 'Node',
  },
  {
    image: images.sass,
    name: 'Sass',
  },
  {
    image: images.docker,
    name: 'Docker',
  },
  {
    image: images.postgres,
    name: 'PostgreSQL',
  },
  {
    image: images.aws,
    name: 'AWS',
  },
];

const experiences = [
  {
    year: '2022',
    works: [
      {
        name: 'Full Stack Engineer',
        company: 'App Academy',
        desc: 'Studied and graduated from the greatest software engineering bootcamp in the world.',
      },
    ],
  },
  {
    year: '2021',
    works: [
      {
        name: 'Full Stack Web Developer',
        company: 'Chase Cole Galleries',
        desc: 'Created and managed a full stack furniture marketplace website for a local furniture gallery.',
      },
    ],
  },
  {
    year: '2019',
    works: [
      {
        name: 'Ecommerce Manager',
        company: 'Upwork',
        desc: 'Worked with several clients to create and manage their online WordPress stores.',
      },
    ],
  },
  {
    year: '2017',
    works: [
      {
        name: 'Systems Technician',
        company: 'Chase Cole Galleries',
        desc: 'Implemented and managed a point of sale system, office intranet, surveillance environment, inventory management database and more.',
      },
    ],
  },
];

const Skills = () => (
  <>
    <h2 className="head-text">Skills & Experience</h2>

    <div className="app__skills-container">
      <motion.div className="app__skills-list">
        {skills.map((skill) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
            key={skill}
          >
            <div className="app__flex">
              <img src={skill.image} alt={skill} />
            </div>
            <p className="p-text">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
      <div className="app__skills-exp">
        {experiences.map((experience) => (
          <motion.div className="app__skills-exp-item" key={experience.year}>
            <div className="app__skills-exp-year">
              <p className="bold-text">{experience.year}</p>
            </div>
            <motion.div className="app__skills-exp-works">
              {experience.works.map((work) => (
                <>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work"
                    data-tip
                    data-for={work.name}
                    key={work.name}
                  >
                    <h4 className="bold-text">{work.name}</h4>
                    <p className="p-text">{work.company}</p>
                  </motion.div>
                  <ReactTooltip
                    id={work.name}
                    effect="solid"
                    arrowColor="#fff"
                    className="skills-tooltip"
                  >
                    {work.desc}
                  </ReactTooltip>
                </>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  </>
);

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
