import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return(
        <>
       <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About Us</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="./assets/css/global-header.css" />
        <link rel="stylesheet" href="./assets/css/global-footer.css" />
        <link rel="stylesheet" href="./assets/css/accesibility.css" />
        <link rel="stylesheet" href="./assets/css/contact-page.css" />
        <link rel="shortcut icon" href="./assets/img/favicon.webp" type="image/x-icon" />
        <header>
          <div className="header-container">
            <nav className="header-nav-bar">
              <div className="header-nav-logo">
                <a href="/">
                  <img src="assets/img/logo.png" alt="SEABREEZE hotel logo" width="100px" height="100px" />
                </a>
              </div>
              <ul className="header-nav-lists">
                <li className="header-nav-list"><Link className="header-nav-link header-active" to="/">HOME</Link></li>
                <li className="header-nav-list"><a className="header-nav-link header-active" href="About_Us.html">ABOUT US</a></li>
                <li className="header-nav-list"><a className="header-nav-link" href="rooms.html">ROOMS</a></li>
                <li className="header-nav-list"><a className="header-nav-link" href="event_pkj.html">EVENT PACKAGES</a></li>
                <li className="header-nav-list"><a className="header-nav-link" href="outdoor.html">OUTDOOR PACKAGES</a></li>
                <li className="header-nav-list"><a className="header-nav-link" href="facilities.html">FACILITIES</a></li>
                <li className="header-nav-list"><a className="header-btn header-btn-custom" href="login.html">LOG IN</a>
                </li>
              </ul>
              <div className="header-hamburger-icon">
                <div className="header-hamburger-line-1" />
                <div className="header-hamburger-line-2" />
                <div className="header-hamburger-line-3" />
              </div>
            </nav>
          </div>
        </header>
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
          <footer className="footer">
            <div className="footer-container">
              <nav className="footer-nav">
                <div className="footer-description">
                  <h3 className="footer-description-title">SEABREEZE Hotel</h3>
                  <pre>LAGOON VILLA</pre>
                </div>
                <div className="footer-contact-us">
                  <h3 className="footer-description-title">Contact Us</h3>
                  <p className="footer-description-detail">
                    <img src="./assets/img/map-pin.svg" className="footer-description-icon" alt="star hotel location" />
                    <span>2nd Mile Post, Thalaimmannar Rd, Mannar</span>
                  </p>
                  <p className="footer-description-detail">
                    <img src="./assets/img/phone.svg" className="footer-description-icon" alt="star hotels phone number" />
                    <span>077 5966582 / 071 1564795 / <br />023 2223510<br /></span>
                  </p>
                  <p className="footer-description-detail">
                    <img src="./assets/img/mail.svg" className="footer-description-icon" alt="star hotels email" />
                    <span>alkorbi144@gmail.com</span>
                  </p>
                </div>
                <div className="footer-follow-us">
                  <h3 className="footer-description-title">Follow Us</h3>
                  <ul className="footer-follow-us-lists">
                    <li className="follow-us-list">
                      <a href="https://www.facebook.com/profile.php?id=100083654755350&mibextid=ZbWKwL">
                        <img src="./assets/img/facebook.svg" alt="SEABREEZE Hotels facebook page" />
                      </a>
                    </li>
                    <li className="follow-us-list">
                      <a href="https://www.instagram.com/hotel_seabreeze_mannar/?igshid=NTc4MTIwNjQ2YQ==">
                        <img src="./assets/img/instagram.svg" alt="SEABREEZE Hotels instagram page" />
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </footer>
        </div></div>
        </>
    )
}

export default AboutUs;