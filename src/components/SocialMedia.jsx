import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/beau-ferguson-387a40112/">
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href="https://github.com/midknightsurfer">
        <BsGithub />
      </a>
    </div>
  </div>
);

export default SocialMedia;
