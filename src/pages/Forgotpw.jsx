import React from "react";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_ft0un7k",
      "template_ts6r6nw",
      e.target,
      "kSdjFfE8Z4cggbvU3"
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
  sendEmail(event); // Pass the event object to sendEmail
};

const Forgotpw = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
        integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
        crossorigin="anonymous"
      />

      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <Link
                to="/login"
                className="d-flex align-items-center gap-10"
              ></Link>
              <h3 className="text-center mb-3">Reset Your Password</h3>
              <p className="text-center mt-2 mb-3">
                We will send you an email to reset your Password
              </p>
              <form onSubmit={handleSubmit} className="d-flex flex-column gap-30">
                <input type="email" name="Email" placeholder="Email" />
                <div className="">
                  <div className="mt-3 d-flex justify-content-center gap-30 align-item-center">
                    <button type="submit" className="button border-0">Send Email</button>
                    <Link to="/login" className="button text-white">
                      Cancel
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgotpw;
