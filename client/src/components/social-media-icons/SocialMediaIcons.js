import React, { Component } from 'react';

class SocialMediaIcons extends Component {
  render() {
    return (
      <div className="social-media">    
          <span className="social-icon"><a href="https://dribbble.com/ericnam" target="_blank" rel="noopener noreferrer"><img src="img/dribbble.svg" alt="dribbble"/></a></span>          
          <span className="social-icon"><a href="https://www.linkedin.com/in/eric-nam" target="_blank" rel="noopener noreferrer"><img src="img/linkedin.svg" alt="linkedin"/></a></span>
      </div>
    );
  }
}

export default SocialMediaIcons;
