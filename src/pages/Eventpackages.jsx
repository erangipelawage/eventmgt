import React, { useState } from "react";
import { Link } from "react-router-dom";

const Eventpackages = () => {
  const [pax, setPax] = useState(); // State to store the Pax value

  const silverPlatePrice = 2500;
  const goldPlatePrice = 5000;
  const platinumPlatePrice = 7000;
  const jumboPlatePrice = 4000;
  const DOfamilyPlatePrice = 3500;

  const handlePaxChange = (event) => {
    const newValue = parseInt(event.target.value, 10) || 0; // Convert input to integer, default to 0 if not a valid number
    setPax(newValue);
  };

  const silvertotalPrice = silverPlatePrice * pax;
  const goldtotalPrice = goldPlatePrice * pax;
  const platinumtotalPrice = platinumPlatePrice * pax;
  const jumbototalPrice = jumboPlatePrice * pax;
  const DOfamilytotalPrice = DOfamilyPlatePrice * pax;

  return (
    <>
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SEABREEZE Hotel - Event Packages</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="./assets/css/styles.css" />
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

        <main>
          <div className="container">
            <div className="page-header-container">
              <h2 className="page-header">SEABREEZE EVENT PACKAGES</h2>
              <hr />
              <p className="page-sub-header">
                <b>
                  Get the most of our hotel specials. Enjoy the modern comfort
                  and panoramic view
                </b>
              </p>
            </div>
          </div>
          <div className="container">
            <div className="card">
              <img src="./assets/img/Hall1.jpg" width="600" height="350" />
              <div className="intro">
                <h3>SILVER PACKAGE</h3>
                <p>
                  <img
                    className="gallery-image"
                    src="assets/img/Hal.jpg"
                    width={18}
                    height={20}
                  />{" "}
                  Royal Banquet Hall
                </p>
                <p>
                  <img
                    className="gallery-image"
                    src="assets/img/clock.jpg"
                    width={18}
                    height={20}
                  />{" "}
                  In 9 a.m{" "}
                </p>
                <p>
                  <img
                    className="gallery-image"
                    src="assets/img/clock.jpg"
                    width={18}
                    height={20}
                  />{" "}
                  Out 3 p.m
                </p>
                <p>
                  <div className="inputbox">
                    <img
                      className="gallery-image"
                      src="assets/img/sleeprs.png"
                      width={18}
                      height={20}
                    />{" "}
                    <b>One plate price Rs.{silverPlatePrice}.00</b><br />
                    <span> Pax &nbsp; </span>
                    <input
                      type="number"
                      name="pax"
                      value={pax}
                      onChange={handlePaxChange}
                    />{" "}
                    <br />
                    <b>Full Cost</b> &nbsp; {silverPlatePrice} * {pax} = Rs.{silvertotalPrice}.00
                  </div>
                </p>
                <p>
                  <span style={{ textAlign: "left" }}>
                    <a href="/SilverPackags" className="btn btn-warning">
                      {" "}
                      SEE MORE
                    </a>{" "}
                    &nbsp;
                    <a href="/Outdoocheckout" className="btn btn-success">
                      {" "}
                      BOOK NOW
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <div className="card">
              <img src="./assets/img/Hall2.jpg" width="600" height="350" />
              <div className="intro">
                <h3>GOLD PACKAGE</h3>
                <p>
                  <img
                    className="gallery-image"
                    src="assets/img/sleeprs.png"
                    width={18}
                    height={20}
                  />{" "}
                  100 participants
                </p>
                <p>
                  <img
                    className="gallery-image"
                    src="assets/img/Hal.jpg"
                    width={18}
                    height={20}
                  />{" "}
                  Rose Banquet Hall
                </p>
                <p>
                  <img
                    className="gallery-image"
                    src="assets/img/clock.jpg"
                    width={18}
                    height={20}
                  />{" "}
                  In 9 p.m{" "}
                </p>
                <p>
                  <img
                    className="gallery-image"
                    src="assets/img/clock.jpg"
                    width={18}
                    height={20}
                  />{" "}
                  Out 3 p.m
                </p>
                <p>
                  <div className="inputbox">
                    <img
                      className="gallery-image"
                      src="assets/img/sleeprs.png"
                      width={18}
                      height={20}
                    />{" "}
                    <b>One plate price Rs.{goldPlatePrice}.00 </b><br />
                    <span> Pax &nbsp; </span>
                    <input
                      type="number"
                      name="pax"
                      value={pax}
                      onChange={handlePaxChange}
                    />{" "}
                    <br />
                    <b>Full Cost</b> &nbsp; {goldPlatePrice} * {pax} = Rs.{goldtotalPrice}.00
                  </div>
                  <span style={{ textAlign: "left" }}>
                    <a href="GoldPackage" className="btn btn-warning">
                      {" "}
                      SEE MORE
                    </a>{" "}
                    &nbsp;
                    <a href="/Outdoocheckout" className="btn btn-success">
                      {" "}
                      BOOK NOW
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <div className="card">
              <img src="./assets/img/Hall3.jpg" width="600" height="350" />
              <div className="intro">
                <h3>PLATINUM PACKAGE</h3>
                <p>
                  {" "}
                  <img
                    className="gallery-image"
                    src="assets/img/sleeprs.png"
                    width={18}
                    height={20}
                  />{" "}
                  150 participants
                </p>
                <p>
                  <img
                    className="gallery-image"
                    src="assets/img/Hal.jpg"
                    width={18}
                    height={20}
                  />{" "}
                  Deween Banquet Hall
                </p>
                <p>
                  <img
                    className="gallery-image"
                    src="assets/img/clock.jpg"
                    width={18}
                    height={20}
                  />{" "}
                  In 9 p.m{" "}
                </p>
                <p>
                  <img
                    className="gallery-image"
                    src="assets/img/clock.jpg"
                    width={18}
                    height={20}
                  />{" "}
                  Out 3 p.m
                </p>
                <p>
                  <div className="inputbox">
                    <img
                      className="gallery-image"
                      src="assets/img/sleeprs.png"
                      width={18}
                      height={20}
                    />{" "}
                    <b>One plate price Rs.{platinumPlatePrice}.00</b><br />
                    <span> Pax &nbsp; </span>
                    <input
                      type="number"
                      name="pax"
                      value={pax}
                      onChange={handlePaxChange}
                    />{" "}
                    <br />
                    <b>Full Cost</b> &nbsp; {platinumPlatePrice} * {pax} = Rs.{platinumtotalPrice}.00
                  </div>
                  <span style={{ textAlign: "left" }}>
                    <a href="/" className="btn btn-warning">
                      {" "}
                      SEE MORE
                    </a>{" "}
                    &nbsp;
                    <a href="/Outdoocheckout" className="btn btn-success">
                      {" "}
                      BOOK NOW
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="card">
              <img src="./assets/img/Dcouple.jpg" width="600" height="350" />
              <div className="intro">
                <h3>
                  DINNER OUT PACKAGE <span>(COUPLE)</span>
                </h3>
                <p>
                  <img
                    className="gallery-image"
                    src="assets/img/sleeprs.png"
                    width={18}
                    height={20}
                  />{" "}
                  2 participants
                </p>
                <p>
                  <img
                    className="gallery-image"
                    src="assets/img/Hal.jpg"
                    width={18}
                    height={20}
                  />{" "}
                  Restaurant
                </p>
                <p>
                  <img
                    className="gallery-image"
                    src="assets/img/clock.jpg"
                    width={18}
                    height={20}
                  />{" "}
                  In 7 p.m{" "}
                </p>
                <p>
                  <img
                    className="gallery-image"
                    src="assets/img/clock.jpg"
                    width={18}
                    height={20}
                  />{" "}
                  Out 12 p.m
                </p>
                <p>
                  <b>LKR 10,000</b> &nbsp;
                  <span style={{ textAlign: "left" }}>
                    <a href="DinnerOutC" className="btn btn-warning">
                      {" "}
                      SEE MORE
                    </a>{" "}
                    &nbsp;
                    <a href="/Outdoocheckout" className="btn btn-success">
                      {" "}
                      BOOK NOW
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <div className="card">
              <img src="./assets/img/Ddinner2.jpg" width="600" height="350" />
              <div className="intro">
                <h3>
                  DINNER OUT PACKAGE <span>(FAMILY)</span>
                </h3>
                <p>
                  {" "}
                  <img
                    className="gallery-image"
                    src="assets/img/sleeprs.png"
                    width={18}
                    height={20}
                  />{" "}
                  6 participants
                </p>
                <p>
                  <img
                    className="gallery-image"
                    src="assets/img/Hal.jpg"
                    width={18}
                    height={20}
                  />{" "}
                  Restaurant
                </p>
                <p>
                  <img
                    className="gallery-image"
                    src="assets/img/clock.jpg"
                    width={18}
                    height={20}
                  />{" "}
                  In 7 p.m{" "}
                </p>
                <p>
                  <img
                    className="gallery-image"
                    src="assets/img/clock.jpg"
                    width={18}
                    height={20}
                  />{" "}
                  Out 12 p.m
                </p>
                <p>
                <div className="inputbox">
                    <img
                      className="gallery-image"
                      src="assets/img/sleeprs.png"
                      width={18}
                      height={20}
                    />{" "}
                    <b>One plate price Rs.{DOfamilyPlatePrice}.00 </b><br />
                    <span> Pax &nbsp; </span>
                    <input
                      type="number"
                      name="pax"
                      value={pax}
                      onChange={handlePaxChange}
                    />{" "}
                    <br />
                    <b>Full Cost</b> &nbsp; {DOfamilyPlatePrice} * {pax} = Rs.{DOfamilytotalPrice}.00
                  </div>
                  <span style={{ textAlign: "left" }}>
                    <a href="DinnerOutF" className="btn btn-warning">
                      {" "}
                      SEE MORE
                    </a>{" "}
                    &nbsp;
                    <a href="/Outdoocheckout" className="btn btn-success">
                      {" "}
                      BOOK NOW
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <div className="card">
              <img src="assets\img\jumbo.jpeg" width="600" height="350" />
              <div className="intro">
                <h3>JUMBO PACKAGE</h3>
                <p>
                  <img
                    className="gallery-image"
                    src="assets/img/sleeprs.png"
                    width={18}
                    height={20}
                  />{" "}
                  30 participants
                </p>
                <p>
                  <img
                    className="gallery-image"
                    src="assets/img/Hal.jpg"
                    width={18}
                    height={20}
                  />{" "}
                  Royal Banquet Hall
                </p>
                <p>
                  <img
                    className="gallery-image"
                    src="assets/img/clock.jpg"
                    width={18}
                    height={20}
                  />{" "}
                  In 6 p.m{" "}
                </p>
                <p>
                  <img
                    className="gallery-image"
                    src="assets/img/clock.jpg"
                    width={18}
                    height={20}
                  />{" "}
                  Out 12 p.m
                </p>
                <p>
                <div className="inputbox">
                    <img
                      className="gallery-image"
                      src="assets/img/sleeprs.png"
                      width={18}
                      height={20}
                    />{" "}
                    <b>One plate price Rs.{jumboPlatePrice}.00</b><br />
                    <span> Pax &nbsp; </span>
                    <input
                      type="number"
                      name="pax"
                      value={pax}
                      onChange={handlePaxChange}
                    />{" "}
                    <br />
                    <b>Full Cost</b> &nbsp; {jumboPlatePrice} * {pax} = Rs.{jumbototalPrice}.00
                  </div>
                  <span style={{ textAlign: "left" }}>
                    <a href="JumboPackage" className="btn btn-warning">
                      {" "}
                      SEE MORE
                    </a>{" "}
                    &nbsp;
                    <a href="/Outdoocheckout" className="btn btn-success">
                      {" "}
                      BOOK NOW
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Eventpackages;
