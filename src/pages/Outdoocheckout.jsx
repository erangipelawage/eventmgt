import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

const Outdoocheckout = (props) => {
  const history = useHistory();
  const [Errors, setErrors] = useState({});
  const [SuccessMessage, setSuccessMessage] = useState('');
  const [FormData, setFormData] = useState({
    FullName: "",
    Email: "",
    ContactNo: "",
    Package: props.Package,
    BookingDate: "",
    Price: props.Price,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(values => ({ ...values, [name]: value }));
    setErrors({ ...Errors, [name]: '' });
  };

  const validateForm = () => {
    const { FullName, Email, ContactNo } = FormData;
    const errors = {};

    if (!FullName.trim()) {
      console.log("a");
      errors.FullName = 'Full Name is required';
    }

    if (!Email.trim()) {
      console.log("b");
      errors.Email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(Email)) {
      console.log("b.2");
      errors.Email = 'Invalid email address';
    }

    if (!ContactNo.trim()) {
      console.log("c");
      errors.ContactNo = 'Contact No is required';
    } else if (isNaN(ContactNo)) {
      console.log("d");
      errors.ContactNo = 'Contact No must be a number';
    }
    console.log("e");
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f81inr1",
        "template_lnbkryk",
        e.target,
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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {

      const apiEndpoint = "http://127.0.0.1:8000/api/eventbookings/";
      
      console.log("FullName: "+FormData.FullName
                +", Email: "+FormData.Email
                +", ContactNo: "+FormData.ContactNo
                +", Package: "+FormData.Package
                +", ArrivalDate: "+FormData.ArrivalDate
                +", Price: "+FormData.Price
                );
      sendEmail(event);
      axios
        .post(apiEndpoint, FormData)
        .then((response) => {
          console.log("Event Booking successful!:", response.data);
          // setFormData({
          //   FullName: "",
          //   Email: "",
          //   ContactNo: "",
          //   Package: "",
          //   BookingDate: "",
          //   Price: 0,
          // });

          setSuccessMessage("Event Booking successful!");
          history.push('/Checkout');

        }).catch((error) => {
          console.log("Error: ", error);
          console.error('Error booking:', error);
        });
      // history.push('/Checkout');
      setSuccessMessage("");
    }
  };

  useEffect(() => {

    setFormData(data => ({
      ...data,
      Price: props.Price,
    }));

  }, [props.Price])

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
        <form onSubmit={handleSubmit}>
          <div>
            <h2 className="title">Event Online Booking</h2>
            <br />
          </div>
          <div className="raw">
            <div className="col">
              <div className="inputbox">
                <span> Full Name: </span>
                <input
                  type="text"
                  style={{ width: '100%' }}
                  placeholder="Enter Your name"
                  name="FullName"
                  value={FormData.FullName}
                  onChange={handleChange}
                  required
                />
                {Errors.FullName && <div className="error-message">{Errors.FullName}</div>}
              </div>
              <div className="inputbox">
                <span> Email: </span>
                <input
                  type="email"
                  style={{ width: '100%' }}
                  placeholder="Enter Your email"
                  name="Email"
                  value={FormData.Email}
                  onChange={handleChange}
                  required
                />
                {Errors.Email && <div className="error-message">{Errors.Email}</div>}
              </div>
              <div className="inputbox">
                <span> Contact No: </span>
                <input
                  type="number"
                  placeholder="Enter Your Contact No"
                  name="ContactNo"
                  value={FormData.ContactNo}
                  onChange={handleChange}
                  required
                />
                {Errors.ContactNo && <div className="error-message">{Errors.ContactNo}</div>}
              </div>
              <div className="inputbox">
                <span> Package: </span>
                <input
                  type="text"
                  placeholder="Package"
                  name="Package"
                  readOnly
                  value={FormData.Package}
                  onChange={handleChange}
                  require
                />
                {Errors.Package && <div className="error-message">{Errors.Package}</div>}
              </div>
              <div className="inputbox">
                <span> Booking Date: </span>
                <input
                  type="date"
                  placeholder="16/07/2023"
                  name="ArrivalDate"
                  value={FormData.ArrivalDate}
                  onChange={handleChange}
                  require
                />
                {Errors.ArrivalDate && <div className="error-message">{Errors.ArrivalDate}</div>}
              </div>

              <div className="inputbox">
                <span> Price Rs: </span>
                <input
                  value={FormData.Price}
                  type="number"
                  placeholder="price"
                  name="Price"
                  readOnly
                  onChange={handleChange}
                  require
                />
                {Errors.Price && <div className="error-message">{Errors.Price}</div>}
              </div>

              <div>
                <h6 className="title">
                  <b>
                    If you want to cancel your booking you can contact our hotline

                    <span style={{ color: 'blue' }}><br />+94 23 2223510</span> or send via E-mail
                    <span style={{ color: 'blue' }}>seabreezehotelproject@gmail.com</span>
                    <br />
                  </b>
                  <strong>
                    <a href='/Policy'>I agree to SEEBREEZEE HOTEL terms and policies</a>{' '}
                  </strong>
                </h6>
              </div>
              <div>
                <center>
                  <input
                    type="submit"
                    defaultValue="PAY NOW"
                    className="btn btn-info"
                    onClick="/Checkout"
                  />
                  &nbsp;
                  {/* <a href="/Checkout" class="btn btn-info" role="button">PAY NOW</a> */}

                </center>
              </div>
            </div>
            {SuccessMessage && (
              <div className="success-message">
                <p>{SuccessMessage}</p>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );

}

export default Outdoocheckout;

