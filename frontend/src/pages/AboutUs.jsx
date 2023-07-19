import React from 'react';
// import { Link } from 'react-router-dom';

const AboutUs = () => {
    return(
        <>
       <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SEABREEZE Hotel - About US</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="./assets/css/accesibility.css" />
        <link rel="stylesheet" href="./assets/css/contact-page.css" />
        <link rel="shortcut icon" href="./assets/img/favicon.webp" type="image/x-icon" />
        
        <div className="container">
          {/* Header part contain Title page and descriptoion */}
          <div className="header">
            <h2>About Us</h2>
            <hr />
            <p>
              We are Sea Breeze located in mannar.We are providing Deluxe rooms,villa as pre-defined packages and
              event packages.You can customize your event packages as your preference.As well as we are providing
              our enamored outdoor locations for your pre-shoots.
            </p>
          </div>
        </div></div>
        </>
    )
}

export default AboutUs;