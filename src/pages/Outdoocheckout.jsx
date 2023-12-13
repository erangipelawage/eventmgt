import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

// export default class Outdoocheckout extends React.Component {

// const Outdoocheckout = ()
const Outdoocheckout = (props) => {
  const history = useHistory();
  // const {Price,FullName,Email,ContactNo,Package,BookingDate,ArrivalDate,DepartureDate} = props;
  const [Errors, setErrors] = useState({});
  const [SuccessMessage, setSuccessMessage] = useState('');
  const [FormData, setFormData] = useState({
    FullName: "",
    Email: "",
    ContactNo: "",
    Package: "",
    BookingDate: "",
    Price: props.Price,
  });
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     FullName: props.FullName,
  //     Email: props.Email,
  //     ContactNo: props.ContactNo,
  //     Package: props.Package,
  //     BookingDate: props.BookingDate,
  //     // DepartureDate: "",
  //     Price: props.Price,
  //     // ##
  //     errors: {},
  //     successMessage: '',
  //   };


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(values => ({ ...values, [name]: value }));
    setErrors({ ...Errors, [name]: '' });
  };

  const validateForm = () => {
    const { FullName, Email, ContactNo } = FormData;
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
    setErrors(errors);

    // Return true if there are no errors
    return Object.keys(errors).length === 0;
  };

  // ###

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f81inr1",
        "template_lnbkryk",
        FormData,
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
    // ##
    if (validateForm()) {
      // ##
      // const { FullName, Email, ContactNo, Package, BookingDate, Price } =
      //   this.state;

      // const formData = new FormData();
      // formData.append("FullName", FullName);
      // formData.append("Email", Email);
      // formData.append("ContactNo", ContactNo);
      // formData.append("Package", Package);
      // formData.append("BookingDate", BookingDate);
      // formData.append("Price", Price);

      const apiEndpoint = "http://127.0.0.1:8000/api/eventbookings/";
      sendEmail(event);

      axios
        .post(apiEndpoint, FormData)
        .then((response) => {
          console.log("Event Booking successful!:", response.data);
          setFormData({
            FullName: "",
            Email: "",
            ContactNo: "",
            Package: "",
            BookingDate: "",
            Price: 0,
          });

          setSuccessMessage("Event Booking successful!");
          history.push('/Checkout');

        }).catch((error) => {
          console.error('Error booking:', error);
        });

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
                  required // Add the required attribute
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
                  required // Add the required attribute
                />
                {Errors.Email && <div className="error-message">{Errors.Email}</div>}
              </div>
              <div className="inputbox">
                <span> Contact No: </span>
                <input
                  type="number"
                  placeholder="Enter Your ConNo"
                  name="ContactNo"
                  value={FormData.ContactNo}
                  onChange={handleChange}
                  required // Add the required attribute
                />
                {Errors.ContactNo && <div className="error-message">{Errors.ContactNo}</div>}
              </div>
              <div className="inputbox">
                <span> Package: </span>
                <input
                  type="text"
                  placeholder="Package"
                  name="Package"
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
                <h6 className="title"><b>If you want to cancel your booking you can contact our hotline <br />+94 23 2223510 or send via E-mail seabreezehotelproject@gmail.com. <br /></b>
                  <pre></pre>
                  <strong><a href='/Policy'>I agree to SEEBREEZEE HOTEL terms and policies</a> </strong></h6>
              </div>

              <div>
                <center>
                  <input
                    type="submit"
                    defaultValue="PAY NOW"
                    className="submit-btn"
                    onClick="/Checkout" 
                  />
                  &nbsp;
                  <a href="/Checkout" class="btn btn-info" role="button">PAY NOW</a>

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

