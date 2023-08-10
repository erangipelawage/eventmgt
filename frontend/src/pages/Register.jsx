import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <>
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
          <form action="/">
            <label id="icon" htmlFor="name"><i className="icon-envelope " /></label>
            <input type="text" name="name" id="name" placeholder="Email" required />
            <label id="icon" htmlFor="name"><i className="icon-user" /></label>
            <input type="text" name="name" id="name" placeholder="Name" required />
            <label id="icon" htmlFor="name"><i className="icon-shield" /></label>
            <input type="password" name="name" id="name" placeholder="Password" required />
            <p><b>By clicking Register, you agree on our terms and condition</b></p>
            <a href="/" className="button">REGISTER</a>
          </form>
        </div>
      </div>
        </>
    );
};

export default Register;
