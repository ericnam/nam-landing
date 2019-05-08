import React, { Component } from 'react';
import Section from './section.js';

class Offering extends Component {
  render() {
    return (
      <div className="offering">
        <div className="container">
          <h3>Here are a few things that I can offer.</h3>
          <span className="section-group">
            <Section header="Business Strategy" paragraph="I can analyze your business needs and help optimize processes to better serve you and your customers." imgsrc="img/analysis.svg"/>
            <Section header="UX / UI Design" paragraph="From branding to production-ready mockups, I lead a cooperative designing process where we reach a design you're satisfied with." imgsrc="img/architecture.svg"/>
            <Section header="Technical Development" paragraph="I can bring these designs to life, and develop your stable and maintainable website or application using cutting edge technology." imgsrc="img/programming.svg"/>
          </span>
        </div>
      </div>
    );
  }
}

export default Offering;
