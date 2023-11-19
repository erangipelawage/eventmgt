import React from 'react';
import { Link } from "react-router-dom";


const Outdoor = () => {
  return (
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

        <main>
          <div className="container">
            <div className="page-header-container">
              <h2 className="page-header">SEABREEZE OUTDOOR LOCATION PACKAGES</h2>
              <hr />
              <p className="page-sub-header">
                Get the most of our hotel specials. Enjoy the modern <br />
                comfort and panoramic view
              </p>
            </div>

            {/* <section className="rooms-section"> */}
              <div className="row room-section-header-container">
                <div className="col align-self-center"> 
                  <h4 className="room-section-header active-header" id="standard-room">OUTDOOR LOCATIONS</h4>
                </div>
              </div>
              <div className="col align-self-start">
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
                    <Link to="/Hourcheck" className="btn btn-fill btn-large">BOOK NOW</Link>
                  </div>
                </div>
              </div>

              <div className="rooms col col-2">
                <img src="assets/img/cott.jpg" alt="" className="rooms-img" />
                <h3 className="room-title">CATTAGE SIDE L</h3>
                <p className="room-text">We have Luxury cottages with pleasant sceneries</p>
                <div>
                  <div className="details-container">
                    <pre><img className="gallery-image" src="assets/img/wifi.jpeg" width={20} height={20} /> Free WiFi</pre>
                    <pre><img className="gallery-image" src="assets/img/parking.png" width={17} height={17} /> Self Parking</pre>
                  </div>
                </div>
                <p className="amount-text">LKR 12,000 Per Hour</p>
                <div className="buttons-container">
                  <Link to="/Hourcheck" className="btn btn-fill btn-large">BOOK NOW</Link>
                </div>
              </div>
              <div className="rooms col col-2">
                <img src="assets/img/garden.jpg" alt="" className="rooms-img" />
                <h3 className="room-title">GARDEN SIDE PACKAGE</h3>
                <p className="room-text">We have well managed garden with nice veiws.</p>
                <div>
                  <div className="details-container">
                    <pre><img className="gallery-image" src="assets/img/wifi.jpeg" width={20} height={20} /> Free WiFi</pre>
                    <pre><img className="gallery-image" src="assets/img/parking.png" width={17} height={17} /> Self Parking</pre>
                  </div>
                </div>
                <p className="amount-text">LKR 15,000 Per Hour</p>
                <div className="buttons-container">
                  <Link to="/Hourcheck" className="btn btn-fill btn-large">BOOK NOW</Link>
                </div>
              </div>
            {/* </section> */}
            </div>
        </main>
      </div>
    </>
  )
}

export default Outdoor;