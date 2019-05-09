import React, { Component } from 'react';

class Section extends Component {
  render() {

    let img;
    if (this.props.multiimg === "true") {
      img = 
              <span className="img cluster">
                <img src={this.props.imgsrc} alt="dribbble_img"/>
                <img src={this.props.imgsrc1} alt="dribbble_img"/>
                <img src={this.props.imgsrc2} alt="dribbble_img"/>
                <img src={this.props.imgsrc3} alt="dribbble_img"/>
              </span>;
    }
    else{
      img = 
              <span className="img">
                <img src={this.props.imgsrc} alt="onyx"/>
              </span>;
    }

    let description = 
          <span className="description">       
            <img src={this.props.logosrc} alt="logo"/>     
            <p className="section-header">{this.props.header}</p>
            <div className="accent-line"></div>
            <p className="section-paragraph">{this.props.paragraph}</p>  
          </span>
    
    if (this.props.imgleft === "true") {
      return (
        <div className="a">
            {img}
            {description}
        </div>
      );
    } else {
      return (
        <div className="a">
            {description}
            {img}
        </div>
      );
    }
  }
}

export default Section;
