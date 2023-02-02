import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

const Footer = () => {
  const form = useRef();

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        'service_zcz7tus',
        'template_yh1s6rn',
        form.current,
        'NC8EM6qF58QJGlQOS',
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    setIsFormSubmitted(true);
  };

  return (
    <>
      <h2 className="head-text head-index">Take a coffee & chat with me</h2>
      <div className="footer__img">
        <img className="profilePic" src={images.profile2} alt="profile" />
      </div>
      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="beau@hirethedeveloper.com" className="p-text">
            beau@hirethedeveloper.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+1 (612) 718-3194" className="p-text">
            +1 (612) 718-3194
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <form ref={form} onSubmit={sendEmail}>
            <div className="app__flex">
              <input
                className="p-text"
                type="text"
                placeholder="Your Name"
                name="from_name"
              />
            </div>
            <div className="app__flex">
              <input
                className="p-text"
                type="email"
                placeholder="Your Email"
                name="user_email"
              />
            </div>
            <div>
              <textarea
                className="p-text"
                placeholder="Your Message"
                name="message"
              />
            </div>
            <button type="submit" value="Send" className="p-text">
              {!loading ? 'Send Message' : 'Sending...'}
            </button>
          </form>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);
