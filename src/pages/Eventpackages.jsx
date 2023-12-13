import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Eventpackages = ({ handleAnyPriceUpdate }) => {
  const [packageName, setPackageName] = useState("");
  const [silverPax, setSilverPax] = useState(0);
  const [goldPax, setGoldPax] = useState(0);
  const [platinumPax, setPlatinumPax] = useState(0);
  const [jumboPax, setJumboPax] = useState(0);
  const [dinnerOutPax, setDinnerOutPax] = useState(0);

  const silverPlatePrice = 2500;
  const goldPlatePrice = 5000;
  const platinumPlatePrice = 7000;
  const jumboPlatePrice = 4000;
  const dinnerOutPlatePrice = 3500;

  const [silverTotalPrice, setSilverTotalPrice] = useState(0);
  const [goldTotalPrice, setGoldTotalPrice] = useState(0);
  const [platinumTotalPrice, setPlatinumTotalPrice] = useState(0);
  const [jumboTotalPrice, setJumboTotalPrice] = useState(0);
  const [dinnerOutTotalPrice, setDinnerOutTotalPrice] = useState(0);

  const history = useHistory ();

  const handleSilverPaxChange = (event) => {
    const newValue = parseInt(event.target.value, 10) || 0;// Convert input to integer, default to 0 if not a valid number
    setSilverPax(newValue);
    setSilverTotalPrice(silverPlatePrice * silverPax);
    setPackageName("Silver Package");
  };

  const handleGoldPaxChange = (event) => {
    const newValue = parseInt(event.target.value, 10) || 0; // Convert input to integer, default to 0 if not a valid number
    setGoldPax(newValue);
    setGoldTotalPrice(goldPlatePrice * goldPax);
    setPackageName("Gold Package");
  };

  const handlePlatinumPaxChange = (event) => {
    const newValue = parseInt(event.target.value, 10) || 0; // Convert input to integer, default to 0 if not a valid number
    setPlatinumPax(newValue);
    setPlatinumTotalPrice(platinumPlatePrice * platinumPax);
    setPackageName("Platinum Package");
  };

  const handleJumboPaxChange = (event) => {
    const newValue = parseInt(event.target.value, 10) || 0; // Convert input to integer, default to 0 if not a valid number
    setJumboPax(newValue);
    setJumboTotalPrice(jumboPlatePrice * jumboPax);
    setPackageName("Jumbo Package");
  };

  const handleDinnerOutPaxChange = (event) => {
    const newValue = parseInt(event.target.value, 10) || 0; // Convert input to integer, default to 0 if not a valid number
    setDinnerOutPax(newValue);
    setDinnerOutTotalPrice(dinnerOutPlatePrice * dinnerOutPax);
    setPackageName("Dinner Out Package");
  };
  
  useEffect(() => {
    const Tot = silverPlatePrice * silverPax;
    setSilverTotalPrice(Tot);
    setPackageName("Silver Package");
    handleAnyPriceUpdate(Tot || 0, packageName);
    console.log("After: " + packageName);
  }, [silverPax]);
  
  useEffect(() => {
    const Tot = goldPlatePrice * goldPax;
    setGoldTotalPrice(Tot);
    setPackageName("Gold Package");
    handleAnyPriceUpdate(Tot || 0, packageName);
    console.log("After: " + packageName);
  }, [goldPax]);
  
  useEffect(() => {
    const Tot = platinumPlatePrice * platinumPax;
    setPlatinumTotalPrice(Tot);
    setPackageName("Platinum Package");
    handleAnyPriceUpdate(Tot || 0, packageName);
    console.log("After: " + packageName);
  }, [platinumPax]);
  
  useEffect(() => {
    const Tot = jumboPlatePrice * jumboPax;
    setJumboTotalPrice(Tot);
    setPackageName("Jumbo Package");
    handleAnyPriceUpdate(Tot || 0, packageName);
    console.log("After: " + packageName);
  }, [jumboPax]);
  
  useEffect(() => {
    const Tot = dinnerOutPlatePrice * dinnerOutPax;
    setDinnerOutTotalPrice(Tot);
    setPackageName("Dinner Out Package");
    handleAnyPriceUpdate(Tot || 0, packageName);
    console.log("After: " + packageName);
  }, [dinnerOutPax]);
  
  // useEffect(() => {
  //   setPackageName(packageName);
  // }, [packageName]);

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
                    <b>Plate price Rs.{silverPlatePrice}</b><br />
                    <span> Pax &nbsp; </span>
                    <input
                      type="number"
                      name="pax"
                      value={silverPax}
                      onChange={handleSilverPaxChange}
                    />{" "}
                    <br />
                    <b>Full Cost: </b> &nbsp; {silverPlatePrice} x {silverPax} = Rs.{silverTotalPrice}
                  </div>
                </p>
                <p>
                  <span style={{ textAlign: "left" }}>
                    <a href="/SilverPackags" className="btn btn-warning">
                      {" "}
                      SEE MORE
                    </a>{" "}
                    &nbsp;
                    <a onClick={()=>history.push("/Outdoocheckout")} className="btn btn-success">
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
                    <b>Plate price Rs.{goldPlatePrice} </b><br />
                    <span> Pax &nbsp; </span>
                    <input
                      type="number"
                      name="pax"
                      value={goldPax}
                      onChange={handleGoldPaxChange}
                    />{" "}
                    <br />
                    <b>Full Cost</b> &nbsp; {goldPlatePrice} * {goldPax} = Rs.{goldTotalPrice}
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
                    <b>Plate price Rs.{platinumPlatePrice}</b><br />
                    <span> Pax &nbsp; </span>
                    <input
                      type="number"
                      name="pax"
                      value={platinumPax}
                      onChange={handlePlatinumPaxChange}
                    />{" "}
                    <br />
                    <b>Full Cost</b> &nbsp; {platinumPlatePrice} * {platinumPax} = Rs.{platinumTotalPrice}
                  </div>
                  <span style={{ textAlign: "left" }}>
                    <a href="/PlatinumPackage" className="btn btn-warning">
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
                    <b>Plate price Rs.{dinnerOutPlatePrice}</b><br />
                    <span> Pax &nbsp; </span>
                    <input
                      type="number"
                      name="pax"
                      value={dinnerOutPax} dinnerOutPax
                      onChange={handleDinnerOutPaxChange}
                    />{" "}
                    <br />
                    <b>Full Cost</b> &nbsp; {dinnerOutPlatePrice} * {dinnerOutPax} = Rs.{dinnerOutTotalPrice}
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
                    <b>Plate price Rs.{jumboPlatePrice}</b><br />
                    <span> Pax &nbsp; </span>
                    <input
                      type="number"
                      name="pax"
                      value={jumboPax}
                      onChange={handleJumboPaxChange}
                    />{" "}
                    <br />
                    <b>Full Cost</b> &nbsp; {jumboPlatePrice} * {jumboPax} = Rs.{jumboTotalPrice}
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