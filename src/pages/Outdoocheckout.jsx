import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import axios from "axios";
// import { useState } from "react";
// import { useEffect } from "react";

export default class Outdoocheckout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      FullName: "",
      Email: "",
      ContactNo: "",
      Package: "",
      ArrivalDate: "",                                                                                                 
      DepartureDate: "",
      Price: "",
      // ##
      errors: {},
      successMessage: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,

      // ##
      errors: { ...this.state.errors, [name]: '' },
    });
  };

  validateForm = () => {
    const { FullName, Email, ContactNo, Package, ArrivalDate, DepartureDate, Price } =
      this.state;
    const errors = {};

    if (!FullName.trim()) {
      errors.FullName = 'Full Name is required';
    }

    if (!Email.trim()) {
      errors.Email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(Email)) {
      errors.Email = 'Invalid email address';
    }

    if (!ContactNo.trim()) {
      errors.ContactNo = 'Contact No is required';
    } else if (isNaN(ContactNo)) {
      errors.ContactNo = 'Contact No must be a number';
    }

    // Add validations for other fields as needed

    this.setState({ errors });

    // Return true if there are no errors
    return Object.keys(errors).length === 0;
  };

  // ###

  sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f81inr1",
        "template_lnbkryk",
        this.form,
        "Mb2vbzM7IvtcsNyP0"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // ##
    if (this.validateForm()) {
      // ##
      const { FullName, Email, ContactNo, Package, ArrivalDate, DepartureDate, Price } =
        this.state;

      const formData = new FormData();
      formData.append("FullName", FullName);
      formData.append("Email", Email);
      formData.append("ContactNo", ContactNo);
      formData.append("Package", Package);
      formData.append("ArrivalDate", ArrivalDate);
      formData.append("DepartureDate", DepartureDate);
      formData.append("Price", Price);
      const apiEndpoint = "http://127.0.0.1:8000/api/eventbookings/";
      this.sendEmail(event);

      axios
        .post(apiEndpoint, formData)
        .then((response) => {
          console.log("Event Booking successful!:", response.data);
          this.setState({
            FullName: "",
            Email: "",
            ContactNo: "",
            Package: "",
            ArrivalDate: "",
            DepartureDate: "",
            Price: "",
            successMessage: "Event Booking successful!",
          });

        })

        .catch((error) => {
          console.error('Error booking:', error);
        });
      //   .catch((error) => { });
      // console.error("Error booking:");
      this.setState({
        successMessage: "",
      });
    }
  };

  render() {
    const { errors } = this.state;

    return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SEABREEZE Hotel - Event Booking Page</title>
        <link
          rel="shortcut icon"
          href="./assets/img/favicon.webp"
          type="image/x-icon"
        />
        <link rel="stylesheet" href="./assets/css/style1.css" />
        <link rel="stylesheet" href="./assets/css/global-header.css" />


        <div className="container">
          <form ref={(form) => (this.form = form)} onSubmit={this.handleSubmit}>
            <div>
              <h2 className="title">Event Online Booking</h2>
              <br />
            </div>
            <div className="raw">
                <div className="inputbox">
                  <span> Full Name: </span>
                  <input
                    type="text"
                    placeholder="Enter Your name"
                    name="FullName"
                    onChange={this.handleChange}
                  />
                  {errors.FullName && <div className="error-message">{errors.FullName}</div>}
                </div>
          
              <div className="inputbox">
                <span> Email: </span>
                <input
                  type="email"
                  placeholder="Enter Your email"
                  name="Email"
                  onChange={this.handleChange}
                />
                {errors.Email && <div className="error-message">{errors.Email}</div>}
              </div>
              <div className="inputbox">
                <span> Contact No: </span>
                <input
                  type="number"
                  placeholder="Enter Your ConNo"
                  name="ContactNo"
                  onChange={this.handleChange}
                />
                {errors.ContactNo && <div className="error-message">{errors.ContactNo}</div>}
              </div>
              <div className="inputbox">
                <span> Package: </span>
                <input
                  type="text"
                  placeholder="Package"
                  name="Package"
                  onChange={this.handleChange}
                />
                {errors.Package && <div className="error-message">{errors.Package}</div>}
              </div>
              <div className="inputbox">
                <span> Arrival Date: </span>
                <input
                  type="date"
                  placeholder="16/07/2023"
                  name="ArrivalDate"
                  onChange={this.handleChange}
                />
                {errors.ArrivalDate && <div className="error-message">{errors.ArrivalDate}</div>}
              </div>
              <div className="inputbox">
                <span> Departure Date: </span>
                <input
                  type="date"
                  placeholder="16/07/2023"
                  name="DepartureDate"
                  onChange={this.handleChange}
                />
                {errors.DepartureDate && <div className="error-message">{errors.DepartureDate}</div>}
              </div>
              <div className="inputbox">
                <span> Price: </span>
                <input
                  type="number"
                  placeholder="price"
                  name="Price"
                  onChange={this.handleChange}
                />
                {errors.Price && <div className="error-message">{errors.Price}</div>}
              </div>
              <div>
                <h6 className="title"><b>Fully refundable before your booking date. If you cannot cancel or change the date before the booking date, we will refund half of your payment</b>
                  <pre></pre>
                  <strong><a href='/Policy'>I agree to SEEBREEZEE HOTEL terms and policies</a> </strong></h6>
              </div>
              {/* <select name="Price" id="cars" onChange={this.handleChange}>
                    <option value="p1">Rs.2000.00</option>
                    <option value="p2">Rs.3000.00</option>
                    <option value="p3">Rs.5000.00</option>
                    <option value="p4">Rs.10000.00</option>
                  </select> */}
            </div>
            {/* <center>
                <a href="/Checkout" className="submit-btn">SUBMIT</a>
                </center> */}

            {/* <center>
                  <input
                    type="submit"
                    defaultValue="RESERVE"
                    className="submit-btn"
                  />
                </center> */}

            {/* @@@@@@@ chatgpt */}

            <div>
              <center>
                <input
                  type="submit"
                  defaultValue="PAY NOW"
                  className="submit-btn"
                  onClick={this.handlePayment} // Assuming you have a function to handle the payment
                />
              </center>
            </div>

            {this.state.successMessage && (
              <div className="success-message">
                <p>{this.state.successMessage}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    );
  }
}

 {/* {this.state.successMessage && (
              <div className="success-message">
                <p>{this.state.successMessage}</p>
              </div>
            )} */}

