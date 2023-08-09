import React from 'react';
import { Link } from "react-router-dom";


const Outdoor = () => {
    return(
        <>
            <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SEABREEZE Hotel - Outdoor Packages</title>
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="./assets/css/rooms-and-suites.css" />
        <link rel="shortcut icon" href="./assets/img/favicon.webp" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="./assets/css/global-header.css" />
        <link rel="shortcut icon" href="./assets/img/favicon.webp" type="image/x-icon" />

        <header>


<div className="header-container">
  <nav className="header-nav-bar">
    <div className="header-nav-logo">
      <Link to="/">
        <img src="assets/img/logo.png" alt="SEABREEZE hotel logo" width="100px" height="100px" />
      </Link>
    </div>
    <ul className="header-nav-lists">
      <li className="header-nav-list"><Link className="header-nav-link" to="/">HOME</Link></li>
      <li className="header-nav-list"><Link className="header-nav-link" to="/AboutUs">ABOUT US</Link></li>
      <li className="header-nav-list"><Link className="header-nav-link" to="/Rooms">ROOMS</Link></li>
      <li className="header-nav-list"><Link className="header-nav-link" to="/Eventpackages">EVENT PACKAGES</Link></li>
      <li className="header-nav-list"><Link className="header-nav-link  header-active" to="/Outdoor">OUTDOOR PACKAGES</Link></li>
      <li className="header-nav-list"><Link className="header-nav-link" to="/Facilities">FACILITIES</Link></li>
      <li className="header-nav-list"><Link className="header-btn header-btn-custom" to="/login">LOG IN</Link>
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
                    <Link to="/BookNow" className="btn btn-fill btn-large">BOOK NOW</Link>
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
                    <Link to="/BookNow" className="btn btn-fill btn-large">BOOK NOW</Link>
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
                    <Link to="/BookNow" className="btn btn-fill btn-large">BOOK NOW</Link>
                  </div>
                </div>
              </div>
            </section></div>
        </main>
      </div>
        </>
    )
}

export default Outdoor;