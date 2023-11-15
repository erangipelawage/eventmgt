import React from "react";
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
      .catch((error) => {});
    console.error("Error booking:");
    this.setState({
      successMessage: "",
    });
  };

  render() {
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
          <form onSubmit={this.handleSubmit}>
            <div>
              <h2 className="title">Event Online Booking</h2>
            </div>
            <div className="raw">
              <div className="col">
                <div className="inputbox">
                  <span> Full Name:</span>
                  <input
                    type="text"
                    placeholder="Enter Your name"
                    name="FullName"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="inputbox">
                  <span> Email:</span>
                  <input
                    type="email"
                    placeholder="Enter Your email"
                    name="Email"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="inputbox">
                  <span> Contact No:</span>
                  <input
                    type="number"
                    placeholder="Enter Your ConNo"
                    name="ContactNo"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="inputbox">
                  <span> Package:</span>
                  <input
                    type="text"
                    placeholder="Package"
                    name="Package"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="inputbox">
                  <span> Arrival Date:</span>
                  <input
                    type="date"
                    placeholder="16/07/2023"
                    name="ArrivalDate"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="inputbox">
                  <span> Departure Date:</span>
                  <input
                    type="date"
                    placeholder="16/07/2023"
                    name="DepartureDate"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="inputbox">
                  <span> Price:</span>
                  <input
                    type="number"
                    placeholder="price"
                    name="Price"
                    onChange={this.handleChange}
                  />
                  {/* <select name="Price" id="cars" onChange={this.handleChange}>
                    <option value="p1">Rs.2000.00</option>
                    <option value="p2">Rs.3000.00</option>
                    <option value="p3">Rs.5000.00</option>
                    <option value="p4">Rs.10000.00</option>
                  </select> */}
                </div>
                <center>
                  <input
                    type="submit"
                    defaultValue="RESERVE"
                    className="submit-btn"
                  />
                </center>
              </div>
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
