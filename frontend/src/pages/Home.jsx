import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <>
       <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="SEABREEZE Hotel Helps you Discover The Perfect Balance Of Hospitality, Luxury And Comfort." />
        <title>SEABREEZE Hotel</title>
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="./assets/css/global-header.css" />
        <link rel="stylesheet" href="./assets/css/global-footer.css" />
        <link rel="stylesheet" href="./assets/css/accesibility.css" />
        <link rel="stylesheet" href="./assets/css/index.css" />
        <link rel="shortcut icon" href="./assets/img/favicon.webp" type="image/x-icon" />
        {/* <div id="loader">
          <svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve">
            <path fill="#d4af37" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="360 50 50" repeatCount="indefinite" />
            </path>
          </svg>
        </div> */}
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
                <li className="header-nav-list"><a className="header-nav-link" href="/AboutUs">ABOUT US</a></li>
                <li className="header-nav-list"><a className="header-nav-link" href="rooms.html">ROOMS</a></li>
                <li className="header-nav-list"><a className="header-nav-link" href="event_pkj.html">EVENT PACKAGES</a></li>
                <li className="header-nav-list"><a className="header-nav-link" href="/Outdoor">OUTDOOR PACKAGES</a></li>
                <li className="header-nav-list"><a className="header-nav-link" href="/Facilities">FACILITIES</a></li>
                <li className="header-nav-list"><a className="header-btn header-btn-custom" href="/login">LOG IN</a>
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
        <div className="jumbotron-container">
          <div className="jumbotron-left">
            <h2 className="jumbotron-header">Discover the perfect balance <br /> of hospitality, luxury and <br />comfort.</h2>
            <p>We are focused on providing clients with the highest level<br />
              of comfort and excellent affordable rates</p>
            <a href="rating.html" className="btn btn-fill btn-large">FEEDBACKS</a>
          </div>
        </div>
        <div className="enjoy-container">
          <div className="enjoy-header">
            <h2 className="enjoy-heading">Enjoy your stay at our hotel</h2>
            <hr className="horizontal" />
            <h3>We are more than being a hotel because we are able to combine quality standard of a hotel with the
              advantages of an apartment.</h3>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.63296123671!2d79.88390687493377!3d9.005880091054541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afdd90468e6f87f%3A0x16024eb146963485!2sSea%20Breeze!5e0!3m2!1sen!2slk!4v1689504259810!5m2!1sen!2slk" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" width={1465} height={400} />
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

export default Home;