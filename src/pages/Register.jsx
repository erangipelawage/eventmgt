import React from 'react';
import axios from 'axios';
import { useState } from 'react';

export default class Register extends React.Component {

  constructor(props) {
  super(props);

  this.state = {
    email: '',
    name: '',
    password: '',
    successMessage: '',
  };
}

handleChange = (event) => {
  const { name, value } = event.target;
  this.setState({
    [name]: value,
  });
};

handleSubmit = (event) => {
  event.preventDefault();
  const {
    email,
    name,
    password,
  } = this.state;

  const formData = new FormData(); 
  formData.append('email', email);
  formData.append('name', name);
  formData.append('password', password);
  const apiEndpoint = 'http://127.0.0.1:8000/api/customers/';

  axios.post(apiEndpoint, formData)
    .then(response => {
      console.log('Customer Register successful:', response.data);
      this.setState({
        email: '',
        name: '',
        password: '',
        successMessage: 'Rating is Successful!',
      });
    })
    .catch(error => {
      console.error('Error rating:', error);
      this.setState({
        // errorMessage: 'An error occurred. Please try again.', // Set the error message in the state
        successMessage: '', // Clear any previous success message
      });
    });
};

render() {
  return (
    <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SEABREEZE Hotel - Register</title>
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="assets/css/login.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600" rel="stylesheet" type="text/css" />
        <link href="//netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.css" rel="stylesheet" />
        
        <div className="testbox">
          <h1>REGISTRATION</h1>
          <form onSubmit={this.handleSubmit}>
            <label id="icon" htmlFor="name"><i className="icon-envelope " /></label>
            <input type="text" name="email" onChange={this.handleChange} id="email" placeholder="Email" required />
            <label id="icon" htmlFor="name"><i className="icon-user" /></label>
            <input type="text" name="name" onChange={this.handleChange} id="name" placeholder="Name" required />
            <label id="icon" htmlFor="name"><i className="icon-shield" /></label>
            <input type="password" name="password" onChange={this.handleChange} id="password" placeholder="Password" required />
            <p><b>By clicking Register, you agree on our terms and condition</b></p>
            {/* <a href="/Login" type="submit" className="button">REGISTER</a> */}
            <button type="submit" className='btn btn-primary'>Register</button>
          </form>
        </div>
      </div>
        )
      }
    }
