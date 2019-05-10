import React, { Component } from 'react';
import './styles/index.css';
import Intro from './components/intro/';
import Offering from './components/offering/';
import Display from './components/display/';
import Contact from './components/contact/';
import Footer from './components/footer/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro /> 
        <Offering />
        <Display />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
