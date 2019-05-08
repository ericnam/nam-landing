import React, { Component } from 'react';
import SocialMediaIcons from '../social-media-icons/SocialMediaIcons';

class Intro extends Component {
  render() {
    return (
      <div className="intro">
        <div className="container">
          <div className="header">
            <div className="circle"></div>
            <h1>ERIC NAM</h1>
          </div>

          <div className="blurb">
            <p>Greetings!</p>
            <p>I am a software developer with a passion for UX / UI currently based out of Dallas, TX.</p>
          </div>

          <p>Let's work together.</p>
          <div className="accent-line"></div>
          <SocialMediaIcons />
        </div>
      </div>
    );
  }
}

export default Intro;
