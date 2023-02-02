import React, { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Testimonial.scss';

const testimonials = [
  { name: 'Theresa', company: 'At Home Aging', imgurl: images.avatar3, feedback: 'He did an excellent job on this short project. Will hire him in the future. Thanks' },
  { name: 'Monica', company: 'New England Furniture', imgurl: images.avatar2, feedback: 'Great work! Easy to work with. Professional.' },
  // eslint-disable-next-line max-len
  { name: 'Joshua Bautista', company: 'Clairvoyant', imgurl: images.avatar5, feedback: "Beau is a creative, clever, and conscientious software engineer. I worked closely with Beau through developing a full stack application, as well as pair programmed with them on data structures and algorithms. Beau has an eye for debugging - he can spot where the bug is, what's causing it, and find a way to correct it quickly. Beau is not only an awesome developer, but he's also got a great personality. Beau's excellence in communicating, collaborating, and problem-solving makes him a valuable asset for any team he's on." },
  { name: 'Kevin Bartolome', company: 'Zeta', imgurl: images.avatar4, feedback: "I had the pleasure of working alongside Beau throughout our time at App Academy together. Beau is also thoughtful and considerate, making him an excellent team member. His ability and skills as a Frontend Developer is unparalleled. Beau is one of the kindest and most genuine people I've met and any company would be lucky to have him." },
  { name: 'Md Abdul', company: 'Cyberspace Digital Tech', imgurl: images.avatar1, feedback: "Ferguson's business skills are matched by his impressive technical skills in the information technology arena. I admire him, especially for his social skills and the maturity he brings with him. He can explain complex software exceptionally well and gives excellent input during the engineering phase." },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={testimonials[currentIndex].imgurl} alt={testimonials[currentIndex].name} />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg',
);
