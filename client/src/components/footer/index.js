import React, { Component } from 'react';
import SocialMediaIcons from '../social-media-icons/SocialMediaIcons.js'

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <span className="footer-info">
              <div className="circle"></div>
              <span className="contact-info">
                <p>ericnam860@gmail.com</p>
                <p>Dallas, TX</p>
              </span>
          </span>
           <SocialMediaIcons /> 
        </div>
      </div>
    );
  }
}

export default Footer;
