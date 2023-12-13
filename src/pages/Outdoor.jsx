import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import React from 'react';
import { Link } from "react-router-dom";


const Outdoor = ({handleAnyPriceUpdate}) => {
  const [packageName, setPackageName] = useState("");
  const [poolHours, setpoolPax] = useState(0);
  const [cottageHours, setcottagePax] = useState(0);
  const [gardenHours, setgardenPax] = useState(0);

  const poolSidePrice = 2500;
  const cottageSidePrice = 5000;
  const gardenSidePrice = 7000;

  const [poolTotalPrice, setPoolTotalPrice] = useState(0);
  const [cottageTotalPrice, setCottageTotalPrice] = useState(0);
  const [gardenTotalPrice, setGardenTotalPrice] = useState(0);

  const history = useHistory ();

  const handlePoolHourChange = (event) => {
    const newValue = parseInt(event.target.value, 10) || 0;// Convert input to integer, default to 0 if not a valid number
    setpoolPax(newValue);
    setPoolTotalPrice(poolSidePrice * poolHours);
    setPackageName("Pool Side Package");
  };

  const handleCottageHourChange = (event) => {
    const newValue = parseInt(event.target.value, 10) || 0; // Convert input to integer, default to 0 if not a valid number
    setcottagePax(newValue);
    setCottageTotalPrice(cottageSidePrice * cottageHours);
    setPackageName("Cottage Side Package");
  };
  
  const handleGardenHourChange = (event) => {
    const newValue = parseInt(event.target.value, 10) || 0; // Convert input to integer, default to 0 if not a valid number
    setgardenPax(newValue);
    setGardenTotalPrice(gardenSidePrice * gardenHours);
    setPackageName("Garden Side Package");
  };
  
  useEffect(() => {
    const Tot = poolSidePrice * poolHours;
    setPoolTotalPrice(Tot);
    setPackageName("Pool Side Package");
    handleAnyPriceUpdate(Tot || 0, packageName);
    console.log("After: " + Tot);
  }, [poolHours]);

  useEffect(() => {
    const Tot = cottageSidePrice * cottageHours;
    setCottageTotalPrice(Tot);
    setPackageName("Cottage Side Package");
    handleAnyPriceUpdate(Tot || 0, packageName);
    console.log("After: " + Tot);
  }, [cottageHours]);
  
  useEffect(() => {
    const Tot = gardenSidePrice * gardenHours;
    setGardenTotalPrice(Tot);
    setPackageName("Garden Side Package");
    handleAnyPriceUpdate(Tot || 0, packageName);
    console.log("After: " + Tot);
  }, [gardenHours]);

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
                <div className="intro col col-2">
                  <img src="assets/img/pool.jpg" className="rooms-img" />
                  <h3 className="room-title">POOL SIDE LOCATION</h3>
                  <p className="room-text">We have a pool side with picturesque veiws</p>
                  <div>
                    <div className="details-container">
                      <pre><img className="gallery-image" src="assets/img/wifi.jpeg" width={20} height={20} /> Free WiFi</pre>
                      <pre><img className="gallery-image" src="assets/img/parking.png" width={17} height={17} /> Self Parking</pre>
                    </div>
                  </div>

                  {/* <p>
                  <div className="inputbox">
                    <b>Price Per Hour Rs.{poolSidePrice}</b><br />
                    <span> Pax &nbsp; </span>
                    <input
                      type="number"
                      name="pax"
                      value={poolPax}
                      onChange={handlePoolPaxChange}
                    />{" "}
                    <br />
                    <b>Full Cost: </b> &nbsp; {poolSidePrice} x {poolPax} = Rs.{poolTotalPrice}
                  </div>
                </p> */}

                  <p className="amount-text">LKR 10,000 Per Hour</p>
                  <input
                      type="number"
                      name="hours"
                      value={poolHours}
                      onChange={handlePoolHourChange}
                    />{" "}
                    <p><b>Full Cost: </b> &nbsp; {poolSidePrice} x {poolHours} = Rs.{poolTotalPrice}</p>
                  <div className="buttons-container">
                    <Link to="/Hourcheck" className="btn btn-fill btn-large">BOOK NOW</Link>
                  </div>
                </div>
              </div>

              <div className="rooms col col-2">
                <img src="assets/img/cott.jpg" alt="" className="rooms-img" />
                <h3 className="room-title">COTTAGE SIDE L</h3>
                <p className="room-text">We have Luxury cottages with pleasant sceneries</p>
                <div>
                  <div className="details-container">
                    <pre><img className="gallery-image" src="assets/img/wifi.jpeg" width={20} height={20} /> Free WiFi</pre>
                    <pre><img className="gallery-image" src="assets/img/parking.png" width={17} height={17} /> Self Parking</pre>
                  </div>
                </div>

                {/* <p>
                  <div className="inputbox">
                    <b>Price Per Hour Rs.{cattageSideLPrice}</b><br />
                    <span> Pax &nbsp; </span>
                    <input
                      type="number"
                      name="pax"
                      value={cattagePax}
                      onChange={handleCattagePaxChange}
                    />{" "}
                    <br />
                    <b>Full Cost: </b> &nbsp; {cattageSideLPrice} x {cattagePax} = Rs.{cattageSideLPrice}
                  </div>
                </p> */}

                <p className="amount-text">LKR 12,000 Per Hour</p>
                <input
                      type="number"
                      name="hours"
                      value={cottageHours}
                      onChange={handleCottageHourChange}
                    />{" "}
                    <p><b>Full Cost: </b> &nbsp; {cottageSidePrice} x {cottageHours} = Rs.{cottageTotalPrice}</p>
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

                {/* <p>
                  <div className="inputbox">
                    <b>Price Per Hour Rs.{gardenSidePrice}</b><br />
                    <span> Pax &nbsp; </span>
                    <input
                      type="number"
                      name="pax"
                      value={gardenPax}
                      onChange={handleGardenPaxChange}
                    />{" "}
                    <br />
                    <b>Full Cost: </b> &nbsp; {gardenSidePrice} x {gardenPax} = Rs.{gardenTotalPrice}
                  </div>
                </p> */}

                <p className="amount-text">LKR 15,000 Per Hour</p>
                <input
                  type="number"
                  name="hours"
                  value={gardenHours}
                  onChange={handleGardenHourChange}
                />{" "}
                <p><b>Full Cost: </b> &nbsp; {gardenSidePrice} x {gardenHours} = Rs.{gardenTotalPrice}</p>
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