import React, { Component } from 'react';

class Section extends Component {
  render() {
    return (
      <div className="section">
          <span>
            <img src={this.props.imgsrc} alt="section_img"/>
          </span> 

          <span>            
            <p className="section-header">{this.props.header}</p>
            <div className="accent-line"></div>
            <p className="section-paragraph">{this.props.paragraph}</p>  
          </span>

      </div>
    );
  }
}

export default Section;
