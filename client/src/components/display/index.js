import React, { Component } from 'react';
import Section from './section.js';
class Display extends Component {
  render() {
    return (
      <div className="display">
        <div className="container">
            <Section 
                imgleft="true" 
                imgsrc="./img/onyximg.png" 
                logosrc="./img/ONYXlogo.png" 
                header="PROJECT ONYX" 
                paragraph="UI / UX design and development of landing website of Project ONYX." 
            />
            <Section 
                multiimg="true"
                imgleft="false" 
                imgsrc="./img/crypto_wallet.png" 
                imgsrc1="./img/logo_practice.png" 
                imgsrc2="./img/nasa_webd.png" 
                imgsrc3="./img/friend_proxy.png" 
                logosrc="./img/dribbble.png" 
                header="A few Dribbbles" 
                paragraph="A few of my UX / UI design mockups featured from my Dribbble account." 
            />
        </div>
      </div>
    );
  }
}

export default Display;
