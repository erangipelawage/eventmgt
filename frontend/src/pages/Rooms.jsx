import React from "react";
import { Link } from "react-router-dom";

const Rooms = () => {
  return (
    <>
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SEABREEZE Hotel - Rooms</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="./assets/css/rooms-and-suites.css" />
        <link
          rel="shortcut icon"
          href="./assets/img/favicon.webp"
          type="image/x-icon"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="./assets/css/rooms-and-suites.css" />
        <link
          rel="shortcut icon"
          href="./assets/img/favicon.webp"
          type="image/x-icon"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="./assets/css/global-header.css" />
        <link
          rel="shortcut icon"
          href="./assets/img/favicon.webp"
          type="image/x-icon"
        />

        <header>
          <div className="header-container">
            <nav className="header-nav-bar">
              <div className="header-nav-logo">
                <Link to="/">
                  <img
                    src="assets/img/logo.png"
                    alt="SEABREEZE hotel logo"
                    width="100px"
                    height="100px"
                  />
                </Link>
              </div>
              <ul className="header-nav-lists">
                <li className="header-nav-list">
                  <Link className="header-nav-link" to="/">
                    HOME
                  </Link>
                </li>
                <li className="header-nav-list">
                  <Link className="header-nav-link" to="/AboutUs">
                    ABOUT US
                  </Link>
                </li>
                <li className="header-nav-list">
                  <Link className="header-nav-link header-active" to="/Rooms">
                    ROOMS
                  </Link>
                </li>
                <li className="header-nav-list">
                  <Link className="header-nav-link" to="/Eventpackages">
                    EVENT PACKAGES
                  </Link>
                </li>
                <li className="header-nav-list">
                  <Link className="header-nav-link" to="/Outdoor">
                    OUTDOOR PACKAGES
                  </Link>
                </li>
                <li className="header-nav-list">
                  <Link className="header-nav-link" to="/Facilities">
                    FACILITIES
                  </Link>
                </li>
                <li className="header-nav-list">
                  <Link className="header-btn header-btn-custom" to="/login">
                    LOG IN
                  </Link>
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
              <h2 className="page-header">SEABREEZE HOTEL ROOMS</h2>
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
                  <h4
                    className="room-section-header active-header"
                    id="standard-room"
                  >
                    STANDARD ROOMS &amp; COTTAGES
                  </h4>
                </div>
              </div>
              <div className="row center-lg">
                <div className="rooms col col-2">
                  <img
                    src="./assets/img/Single.jpg"
                    alt=""
                    className="rooms-img"
                  />
                  <h3 className="room-title">DELUXE SINGLE ROOM</h3>
                  <p className="room-text">
                    Designed specifically for persons
                    <br /> who travelling alone
                  </p>
                  <div>
                    <div className="details-container">
                      <p>
                        <img
                          className="gallery-image"
                          src="./assets/img/bed.png"
                          width={20}
                          height={20}
                        />{" "}
                        One double bed
                      </p>
                      <p>
                        <img
                          className="gallery-image"
                          src="./assets/img/wifi.jpeg"
                          width={20}
                          height={20}
                        />{" "}
                        Free WiFi
                      </p>
                      <p>
                        <img
                          className="gallery-image"
                          src="./assets/img/parking.png"
                          width={16}
                          height={16}
                        />{" "}
                        Self Parking
                      </p>
                      <p>
                        <img
                          className="gallery-image"
                          src="./assets/img/sleeprs.png"
                          width={18}
                          height={20}
                        />{" "}
                        One Sleeps
                      </p>
                    </div>
                  </div>
                  <p className="amount-text">LKR 10,000 Per Night</p>
                  <div className="buttons-container">
                    <Link to="/BookNow" className="btn btn-fill btn-large">
                      BOOK NOW
                    </Link>
                  </div>
                </div>
                <div className="rooms col col-2">
                  <img
                    src="./assets/img/double.jpg"
                    alt=""
                    className="rooms-img"
                  />
                  <h3 className="room-title">DELUXE DOUBLE ROOM</h3>
                  <p className="room-text">
                    Designed specifically for couples <br /> who want freedom
                    &amp; comfort
                  </p>
                  <div>
                    <div className="details-container">
                      <p>
                        <img
                          className="gallery-image"
                          src="./assets/img/bed.png"
                          width={20}
                          height={20}
                        />{" "}
                        One double bed
                      </p>
                      <p>
                        <img
                          className="gallery-image"
                          src="./assets/img/wifi.jpeg"
                          width={20}
                          height={20}
                        />{" "}
                        Free WiFi
                      </p>
                      <p>
                        <img
                          className="gallery-image"
                          src="./assets/img/parking.png"
                          width={16}
                          height={16}
                        />{" "}
                        Self Parking
                      </p>
                      <p>
                        <img
                          className="gallery-image"
                          src="./assets/img/sleeprs.png"
                          width={18}
                          height={20}
                        />{" "}
                        Two Sleeps
                      </p>
                    </div>
                  </div>
                  <p className="amount-text">LKR 15,000 Per Night</p>
                  <div className="buttons-container">
                    <Link to="/BookNow" className="btn btn-fill btn-large">
                      BOOK NOW
                    </Link>
                  </div>
                </div>
                <div className="rooms col col-2">
                  <img
                    src="./assets/img/trible.jpg"
                    alt=""
                    className="rooms-img"
                  />
                  <h3 className="room-title">DELUXE TRIPLE ROOM</h3>
                  <p className="room-text">
                    Designed specifically for <br />
                    families
                  </p>
                  <div>
                    <div className="details-container">
                      <p>
                        <img
                          className="gallery-image"
                          src="./assets/img/bed.png"
                          width={20}
                          height={20}
                        />{" "}
                        One double bed
                      </p>
                      <p>
                        <img
                          className="gallery-image"
                          src="./assets/img/wifi.jpeg"
                          width={20}
                          height={20}
                        />{" "}
                        Free WiFi
                      </p>
                      <p>
                        <img
                          className="gallery-image"
                          src="./assets/img/parking.png"
                          width={16}
                          height={16}
                        />{" "}
                        Self Parking
                      </p>
                      <p>
                        <img
                          className="gallery-image"
                          src="./assets/img/sleeprs.png"
                          width={18}
                          height={20}
                        />{" "}
                        Three Sleeps
                      </p>
                    </div>
                  </div>
                  <p className="amount-text">LKR 20,000 Per Night</p>
                  <div className="buttons-container">
                    <Link to="/BookNow" className="btn btn-fill btn-large">
                      BOOK NOW
                    </Link>
                  </div>
                </div>
                <div className="rooms col col-2">
                  <img
                    src="./assets/img/cottage 3.jpg"
                    alt=""
                    className="rooms-img"
                  />
                  <h3 className="room-title">VILLA WITH BEACH VIEW</h3>
                  <p className="room-text">
                    Designed specifically for couples
                    <br /> who spend their leisure time
                  </p>
                  <div>
                    <div className="details-container">
                      <p>
                        <img
                          className="gallery-image"
                          src="./assets/img/bed.png"
                          width={20}
                          height={20}
                        />{" "}
                        One double bed
                      </p>
                      <p>
                        <img
                          className="gallery-image"
                          src="./assets/img/wifi.jpeg"
                          width={20}
                          height={20}
                        />{" "}
                        Free WiFi
                      </p>
                      <p>
                        <img
                          className="gallery-image"
                          src="./assets/img/parking.png"
                          width={16}
                          height={16}
                        />{" "}
                        Self Parking
                      </p>
                      <p>
                        <img
                          className="gallery-image"
                          src="./assets/img/sleeprs.png"
                          width={18}
                          height={20}
                        />{" "}
                        Two Sleeps
                      </p>
                      <p>
                        <img
                          className="gallery-image"
                          src="./assets/img/resturnt.png"
                          width={18}
                          height={20}
                        />{" "}
                        Kitchen
                      </p>
                    </div>
                  </div>
                  <p className="amount-text">LKR 30,000 Per Night</p>
                  <div className="buttons-container">
                    <Link to="/BookNow" className="btn btn-fill btn-large">
                      BOOK NOW
                    </Link>
                  </div>
                </div>
                <div className="rooms col col-2">
                  <img
                    src="./assets/img/cottage 1.jpg"
                    alt=""
                    className="rooms-img"
                  />
                  <h3 className="room-title">VILLA WITH BEACH VIEW</h3>
                  <p className="room-text">
                    Designed specifically for groups
                    <br /> to spend time freely{" "}
                  </p>
                  <div>
                    <div className="details-container">
                      <p>
                        <img
                          className="gallery-image"
                          src="./assets/img/bed.png"
                          width={20}
                          height={20}
                        />{" "}
                        One double bed
                      </p>
                      <p>
                        <img
                          className="gallery-image"
                          src="./assets/img/wifi.jpeg"
                          width={20}
                          height={20}
                        />{" "}
                        Free WiFi
                      </p>
                      <p>
                        <img
                          className="gallery-image"
                          src="./assets/img/parking.png"
                          width={16}
                          height={16}
                        />{" "}
                        Self Parking
                      </p>
                      <p>
                        <img
                          className="gallery-image"
                          src="./assets/img/sleeprs.png"
                          width={18}
                          height={20}
                        />{" "}
                        Five Sleeps
                      </p>
                      <p>
                        <img
                          className="gallery-image"
                          src="./assets/img/resturnt.png"
                          width={18}
                          height={20}
                        />{" "}
                        Kitchen
                      </p>
                    </div>
                  </div>
                  <p className="amount-text">LKR 45,000 Per Night</p>
                  <div className="buttons-container">
                    <Link to="/BookNow" className="btn btn-fill btn-large">
                      BOOK NOW
                    </Link>
                  </div>
                </div>
                <div className="rooms col col-2">
                  <img
                    src="./assets/img/cottage 2.jpg"
                    alt=""
                    className="rooms-img"
                  />
                  <h3 className="room-title">VILLA WITH BEACH VIEW</h3>
                  <p className="room-text">
                    Designed specifically for groups <br /> to spend leisure
                    time
                  </p>
                  <div>
                    <div className="details-container">
                      <p>
                        <img
                          className="gallery-image"
                          src="./assets/img/bed.png"
                          width={20}
                          height={20}
                        />{" "}
                        Five double bed
                      </p>
                      <p>
                        <img
                          className="gallery-image"
                          src="./assets/img/wifi.jpeg"
                          width={20}
                          height={20}
                        />{" "}
                        Free WiFi
                      </p>
                      <p>
                        <img
                          className="gallery-image"
                          src="./assets/img/parking.png"
                          width={16}
                          height={16}
                        />{" "}
                        Self Parking
                      </p>
                      <p>
                        <img
                          className="gallery-image"
                          src="./assets/img/sleeprs.png"
                          width={18}
                          height={20}
                        />{" "}
                        Ten Sleeps
                      </p>
                      <p>
                        <img
                          className="gallery-image"
                          src="./assets/img/resturnt.png"
                          width={18}
                          height={20}
                        />{" "}
                        Kitchen
                      </p>
                    </div>
                  </div>
                  <p className="amount-text">LKR 60,000 Per Night</p>
                  <div className="buttons-container">
                    <Link to="/BookNow" className="btn btn-fill btn-large">
                      BOOK NOW
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Rooms;
