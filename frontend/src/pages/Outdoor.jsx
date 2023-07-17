import React from 'react';

const Outdoor = () => {
    return(
        <>
            <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Outdoor Locations</title>
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="./assets/css/global-header.css" />
        <link rel="stylesheet" href="./assets/css/global-footer.css" />
        <link rel="stylesheet" href="./assets/css/rooms-and-suites.css" />
        <link rel="shortcut icon" href="./assets/img/favicon.webp" type="image/x-icon" />
        <header>
          <div className="header-container">
            <nav className="header-nav-bar">
              <div className="header-nav-logo">
                <a href="index.html">
                  <img src="assets/img/logo.png" alt="SEABREEZE hotel logo" width="100px" height="100px" />
                </a>
              </div>
              <ul className="header-nav-lists">
                <li className="header-nav-list"><a className="header-nav-link" href="/">HOME</a></li>
                <li className="header-nav-list"><a className="header-nav-link" href="/AboutUs">ABOUT US</a></li>
                <li className="header-nav-list"><a className="header-nav-link" href="rooms.html">ROOMS</a></li>
                <li className="header-nav-list"><a className="header-nav-link" href="event_pkj.html">EVENT PACKAGES</a></li>
                <li className="header-nav-list"><a className="header-nav-link header-active" href="/Outdoor">OUTDOOR PACKAGES</a></li>
                <li className="header-nav-list"><a className="header-nav-link" href="/Facilities">FACILITIES</a></li>
                <li className="header-nav-list"><a className="header-btn header-btn-custom" href="/Login">LOG IN</a>
                </li>
              </ul>
              <div className="header-hamburger-icon">
                <div className="header-hamburger-line-1" />
                <div className="header-hamburger-line-2" />
                <div className="header-hamburger-line-3" />
              </div>
            </nav>
          </div></header>
        <main>
          <div className="container">
            {/* Top Text */}
            <div className="page-header-container">
              <h2 className="page-header">SEABREEZE OUTDOOR LOCATION PACKAGES</h2>
              <hr />
              <p className="page-sub-header">
                Get the most of our hotel specials. Enjoy the modern <br />
                comfort and panoramic view
              </p>
            </div>
            {/* Rooms */}
            <section className="rooms-section">
              <div className="row room-section-header-container">
                <div className="col col-3">
                  <h4 className="room-section-header active-header" id="standard-room">OUTDOOR LOCATIONS</h4>
                </div>
              </div>
              <div className="row center-lg">
                <div className="rooms col col-2">
                  <img src="assets/img/pool.jpg" className="rooms-img" />
                  <h3 className="room-title">POOL SIDE LOCATION</h3>
                  <p className="room-text">We have a pool side with picturesque veiws</p>
                  <div>
                    <div className="details-container">
                      <pre><img className="gallery-image" src="assets/img/wifi.jpeg" width={20} height={20} /> Free WiFi</pre>
                      <pre><img className="gallery-image" src="assets/img/parking.png" width={17} height={17} /> Self Parking</pre>
                    </div>
                  </div>
                  <p className="amount-text">LKR 10,000 Per Hour</p>
                  <div className="buttons-container">
                    <a href="payment.html" className="btn btn-fill btn-large">BOOK NOW</a>
                  </div>
                </div>
                <div className="rooms col col-2">
                  <img src="assets/img/cott.jpg" alt="" className="rooms-img" />
                  <h3 className="room-title">Cattage Side Location</h3>
                  <p className="room-text">We have Luxury cottages with pleasant sceneries</p>
                  <div>
                    <div className="details-container">
                      <pre><img className="gallery-image" src="assets/img/wifi.jpeg" width={20} height={20} /> Free WiFi</pre>
                      <pre><img className="gallery-image" src="assets/img/parking.png" width={17} height={17} /> Self Parking</pre>
                    </div>
                  </div>
                  <p className="amount-text">LKR 12,000 Per Hour</p>
                  <div className="buttons-container">
                    <a href="payment.html" className="btn btn-fill btn-large">BOOK NOW</a>
                  </div>
                </div>
                <div className="rooms col col-2">
                  <img src="assets/img/garden.jpg" alt="" className="rooms-img" />
                  <h3 className="room-title">Garden Side Package</h3>
                  <p className="room-text">We have well managed garden with nice veiws.</p>
                  <div>
                    <div className="details-container">
                      <pre><img className="gallery-image" src="assets/img/wifi.jpeg" width={20} height={20} /> Free WiFi</pre>
                      <pre><img className="gallery-image" src="assets/img/parking.png" width={17} height={17} /> Self Parking</pre>
                    </div>
                  </div>
                  <p className="amount-text">LKR 15,000 Per Hour</p>
                  <div className="buttons-container">
                    <a href="payment.html" className="btn btn-fill btn-large">BOOK NOW</a>
                  </div>
                </div>
              </div>
            </section></div>
        </main>
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
      </div>
        </>
    )
}

export default Outdoor;