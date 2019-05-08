import React, { Component } from 'react';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: '', 
      email: '', 
      message: '',
      formErrors: {
        name: '',
        email: '',
        message: ''
      },
      isNameValid: true,
      isEmailValid: true,
      isMessageValid: true,
      isFormValid: false,
      emailSent: false
    }
    this.handleUserInput = this.handleUserInput.bind(this);
    this.validateField = this.validateField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
  }

  handleUserInput (e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value});
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;    
    switch (fieldName) {
      case 'name':
        if (value == '' || value == null) {
          fieldValidationErrors.name = 'What is your name?';
          this.state.isNameValid = false;
        }
        else{
          this.state.isNameValid = true;
        }
        break;
      case 'email':        
        if (!this.validateEmail(value)) {
          fieldValidationErrors.email = 'Please input a valid email.';
          this.state.isEmailValid = false;
        }
        else{
          this.state.isEmailValid = true;
        }
        break;
      case 'message':        
        if (value == null || value == '') {
          fieldValidationErrors.message = 'What is your inquiry?';
          this.state.isMessageValid = false;
        }
        else{
          this.state.isMessageValid = true;
        }
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors});
  }

  sendEmail () {
    if (this.state.isFormValid) {
      fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state),
      }).then(res => {
        this.setState({emailSent: true});
      }).catch((res) => {
      });
    }
  }

  handleSubmit (event) {
    event.preventDefault();      
    let data = {
      email: this.state.email,
      name: this.state.name, 
      message: this.state.message
    }
    for (var fieldName in data) {
      this.validateField(fieldName, data[fieldName]);
    }
    if (this.state.isEmailValid &&
        this.state.isMessageValid &&
        this.state.isNameValid) 
    {      
      this.state.isFormValid = true;
    }
    else
    {   
      this.state.isFormValid = false;
    }
    this.sendEmail();
    return;
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  render() {
    return (
      <div className="contact">
        <div className="container">
          <span className="description">
            <h1>Let's get in touch!</h1>
            <div className="accent-line"></div>
            <p>If you want to discuss future projects, need advice or just want to talk, don't hesitate to reach out!</p>
          </span>
          <span className="form-container">     
            <div className="error-message">
            </div>       
            <form className="contact-form" onSubmit={this.handleSubmit}>
              <input className={this.state.isNameValid ? '' : 'invalid'} id="name" name="name" type="text" placeholder="Name" onChange={(e) => this.handleUserInput(e)}/>
              
              {this.state.isNameValid ? '' : <Validation message={this.state.formErrors.name}/>}
              <input className={this.state.isEmailValid ? '' : 'invalid'} id="email" name="email" type="email" placeholder="Email" onChange={(e) => this.handleUserInput(e)}/>
              
              {this.state.isEmailValid ? '' : <Validation message={this.state.formErrors.email}/>}
              <textarea className={this.state.isMessageValid ? '' : 'invalid'} id="message" name="message" type="text" placeholder="What's on your mind?" onChange={(e) => this.handleUserInput(e)}/>
              
              {this.state.isMessageValid ? '' : <Validation message={this.state.formErrors.message}/>}
              <button disabled={this.state.emailSent} className={this.state.emailSent ? 'sent' : ''} value="Send">{this.state.emailSent ? 'Sent!' : 'Send'}</button>
            </form>
          </span>
        </div>
      </div>
    );
  }
}

class Validation extends Component {
  render() {
    return (
      <div className="error-message">
        <p>{this.props.message}</p>
      </div>
    );
  }
}

export default Contact;
