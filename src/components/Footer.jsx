import React from 'react';

const Footer = () => {
    return(
        <>
       <div>
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="./assets/css/global-footer.css" />
        <link rel="stylesheet" href="./assets/css/accesibility.css" />
        <link rel="shortcut icon" href="./assets/img/favicon.webp" type="image/x-icon" />
          
          <footer className="footer">
            <div className="footer-container">
              <nav className="footer-nav">
                <div className="footer-description">
                  <h3 className="footer-description-title">SEABREEZE Hotel</h3>
                  <h6>LAGOON VILLA</h6>
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
                    <span>seabreezehotelproject@gmail.com</span>
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
        </div>
        
        </>
    )
}

export default Footer;