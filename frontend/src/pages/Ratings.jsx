import React from 'react';
import axios from 'axios';
import { useState } from 'react';

export default class Ratings extends React.Component {

  constructor(props) {
  super(props);

  this.state = {
    name: '',
    message: '',
    rating: '',
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
    name,
    message,
    rating,
  } = this.state;

  const formData = new FormData(); 
  formData.append('name', name);
  formData.append('message', message);
  formData.append('rating', rating);
  const apiEndpoint = 'http://127.0.0.1:8000/api/ratings/';

  axios.post(apiEndpoint, formData)
    .then(response => {
      console.log('Rating successful:', response.data);
      this.setState({
        name: '',
        message: '',
        rating: '',
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
        <title>SEABREEZE Hotel - Ratings</title>
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="assets/css/contact-page.css" />
        <link rel="shortcut icon" href="./assets/img/favicon.webp" type="image/x-icon" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous"></link>
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="shortcut icon" href="./assets/img/favicon.webp" type="image/x-icon" />
        <script src="./assets/js/popup.js"></script>
        
        
        <div className="main">
          <div className="contact">
            <h2>FEEDBACK <h2 />
              <div className="contact-form">
                <form onSubmit={this.handleSubmit}>
                  <div className="contact-detail">
                    <input type="text" className="form-control" name="name" onChange={this.handleChange} placeholder="Name" id="name" style={{resize: 'none', width: '115%'}} />
                  </div>
                  <textarea className="form-control" name="message" onChange={this.handleChange} rows={5} id="comment" placeholder="Message" style={{resize: 'none', width: '115%'}} defaultValue={""} />
                  <label> Rate Your Overall Experirnce (1-10)</label>
                  <br />
                  <input type="text" className="form-control" name="rating" onChange={this.handleChange} placeholder="Rating" id="rating" style={{resize: 'none', width: '115%'}} />
          
                  <a href="/" className="btn btn-warning"> Home</a>
                <button type="submit" id="popupButton" className='btn btn-primary'>SUBMIT</button>
          
                  
                </form>
              </div>
            </h2></div>
        </div>
        <div className="review-container" style={{textAlignLast: 'center'}}>
          <div className="review-header">
            <h2>Client Reviews and Feedback</h2>
            <p>We are very proud of the services we offer to our customers. Read every word from our happy
              customers.</p>
          </div>
          &nbsp;
          <div className="cards-container">
            <div className="card">
              <h3>Adrian</h3>
              <p>Great location and excellent staff. Only let down was lack of housekeeping which had to be
                requested <br />in the evening. Also tea and coffee facilities were provided with a UK plug
                but no
                adaptor, could only <br />use as we had an adaptor. Breakfast was fantastic buffet and pool
                excellent.</p>
            </div>
            &nbsp;
            <div className="card">
              <h3>Krishantha</h3>
              <p>This hotel located on center of the historical site. All places are in waking distance. Hotel
                staff were very <br />helpful and friendly. Even chef offered to prepare a special meal for kid
                without any additional fee.</p>
            </div>
            &nbsp;
            <div className="card">
              <h3>Carol</h3>
              <p>Beautiful property. Air conditioning is okay. Dinner is very good.</p>
            </div>
          </div>
          &nbsp;
          &nbsp;
        </div>
      </div>
        )
      }
    }