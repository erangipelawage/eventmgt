import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Outdoor = ({ handleAnyPriceUpdate }) => {
  const [packageName, setPackageName] = useState("");
  const [poolHours, setPoolPax] = useState(0);
  const [cottageHours, setCottagePax] = useState(0);
  const [gardenHours, setGardenPax] = useState(0);

  const poolSidePrice = 10000;
  const cottageSidePrice = 12000;
  const gardenSidePrice = 15000;

  const [poolTotalPrice, setPoolTotalPrice] = useState(0);
  const [cottageTotalPrice, setCottageTotalPrice] = useState(0);
  const [gardenTotalPrice, setGardenTotalPrice] = useState(0);

  const history = useHistory();

  const handlePoolHourChange = (event) => {
    const newValue = parseInt(event.target.value, 10) || 0;
    setPoolPax(newValue);
    setPoolTotalPrice(poolSidePrice * poolHours);
    setPackageName("Pool Side Package");
  };

  const handleCottageHourChange = (event) => {
    const newValue = parseInt(event.target.value, 10) || 0;
    setCottagePax(newValue);
    setCottageTotalPrice(cottageSidePrice * cottageHours);
    setPackageName("Cottage Side Package");
  };

  const handleGardenHourChange = (event) => {
    const newValue = parseInt(event.target.value, 10) || 0;
    setGardenPax(newValue);
    setGardenTotalPrice(gardenSidePrice * gardenHours);
    setPackageName("Garden Side Package");
  };

  useEffect(() => {
    const Tot = poolSidePrice * poolHours;
    setPoolTotalPrice(Tot);
    setPackageName("Pool Side Package");
    handleAnyPriceUpdate(Tot || 0, packageName);
    console.log("After: " + packageName);
  }, [poolHours]);

  useEffect(() => {
    const Tot = cottageSidePrice * cottageHours;
    setCottageTotalPrice(Tot);
    setPackageName("Cottage Side Package");
    handleAnyPriceUpdate(Tot || 0, packageName);
    console.log("After: " + packageName);
  }, [cottageHours]);

  useEffect(() => {
    const Tot = gardenSidePrice * gardenHours;
    setGardenTotalPrice(Tot);
    setPackageName("Garden Side Package");
    handleAnyPriceUpdate(Tot || 0, packageName);
    console.log("After: " + packageName);
  }, [gardenHours]);

  return (
    <>
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SEABREEZE Hotel - Outdoor Packages</title>
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

        <main>
          <div className="container">
            <div className="page-header-container">
              <h2 className="page-header">
                SEABREEZE OUTDOOR LOCATION PACKAGES
              </h2>
              <hr />
              <p className="page-sub-header">
                Get the most of our hotel specials. Enjoy the modern <br />
                comfort and panoramic view
              </p>
            </div>

            <div className="row room-section-header-container">
              <div className="col align-self-center">
                <h4
                  className="room-section-header active-header"
                  id="standard-room"
                >
                  OUTDOOR LOCATIONS
                </h4>
              </div>
            </div>
            <div className="col align-self-start">
              <div className="intro col col-2">
                <img src="assets/img/pool.jpg" className="rooms-img" />
                <h3 className="room-title">POOL SIDE LOCATION</h3>
                <p className="room-text">
                  We have a pool side with picturesque veiws
                </p>
                <div>
                  <div className="details-container">
                    <pre>
                      <img
                        className="gallery-image"
                        src="assets/img/wifi.jpeg"
                        width={20}
                        height={20}
                      />{" "}
                      Free WiFi
                    </pre>
                    <pre>
                      <img
                        className="gallery-image"
                        src="assets/img/parking.png"
                        width={17}
                        height={17}
                      />{" "}
                      Self Parking
                    </pre>
                  </div>
                </div>
                <p className="amount-text">LKR 10,000 Per Hour</p>
                <input
                  type="number"
                  name="hours"
                  value={poolHours}
                  onChange={handlePoolHourChange}
                />{" "}
                <p>
                  <b>Full Cost: </b> &nbsp; {poolSidePrice} x {poolHours} = Rs.
                  {poolTotalPrice}
                </p>
                <p>
                  <span style={{ textAlign: "left" }}>
                    <a onClick={() => history.push("/Hourcheck")} className="btn btn-success">
                      {" "}
                      BOOK NOW
                    </a>
                  </span>
                </p>
              </div>
            </div>

            <div className="rooms col col-2">
              <img src="assets/img/cott.jpg" alt="" className="rooms-img" />
              <h3 className="room-title">COTTAGE SIDE L</h3>
              <p className="room-text">
                We have Luxury cottages with pleasant sceneries
              </p>
              <div>
                <div className="details-container">
                  <pre>
                    <img
                      className="gallery-image"
                      src="assets/img/wifi.jpeg"
                      width={20}
                      height={20}
                    />{" "}
                    Free WiFi
                  </pre>
                  <pre>
                    <img
                      className="gallery-image"
                      src="assets/img/parking.png"
                      width={17}
                      height={17}
                    />{" "}
                    Self Parking
                  </pre>
                </div>
              </div>
              
              <p className="amount-text">LKR 12,000 Per Hour</p>
              <input
                type="number"
                name="hours"
                value={cottageHours}
                onChange={handleCottageHourChange}
              />{" "}
              <p>
                <b>Full Cost: </b> &nbsp; {cottageSidePrice} x {cottageHours} =
                Rs.{cottageTotalPrice}
              </p>
              <div className="buttons-container">
                <a
                  onClick={() => history.push("/Hourcheck")}
                  className="btn btn-success"
                >
                  {" "}
                  BOOK NOW
                </a>
              </div>
            </div>
            <div className="rooms col col-2">
              <img src="assets/img/garden.jpg" alt="" className="rooms-img" />
              <h3 className="room-title">GARDEN SIDE PACKAGE</h3>
              <p className="room-text">
                We have well managed garden with nice veiws.
              </p>
              <div>
                <div className="details-container">
                  <pre>
                    <img
                      className="gallery-image"
                      src="assets/img/wifi.jpeg"
                      width={20}
                      height={20}
                    />{" "}
                    Free WiFi
                  </pre>
                  <pre>
                    <img
                      className="gallery-image"
                      src="assets/img/parking.png"
                      width={17}
                      height={17}
                    />{" "}
                    Self Parking
                  </pre>
                </div>
              </div>
              <p className="amount-text">LKR 15,000 Per Hour</p>
              <input
                type="number"
                name="hours"
                value={gardenHours}
                onChange={handleGardenHourChange}
              />{" "}
              <p>
                <b>Full Cost: </b> &nbsp; {gardenSidePrice} x {gardenHours} =
                Rs.{gardenTotalPrice}
              </p>
              <div className="buttons-container">
                <a
                  onClick={() => history.push("/Hourcheck")}
                  className="btn btn-success"
                >
                  {" "}
                  BOOK NOW
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Outdoor;
