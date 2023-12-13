import React from 'react';
import { Link } from "react-router-dom";


const Outdoor = ({handleAnyPriceUpdate}) => {

  // const [poolPax, setpoolPax] = useState(0);
  // const [cattagePax, setcattagePax] = useState(0);
  // const [gardenPax, setgardenPax] = useState(0);

  // const poolSidePrice = 2500;
  // const cattageSideLPrice = 5000;
  // const gardenSidePrice = 7000;

  // const [poolTotalPrice, setPoolTotalPrice] = useState(0);
  // const [cattageTotalPrice, setCattageTotalPrice] = useState(0);
  // const [gardenTotalPrice, setGardenTotalPrice] = useState(0);

  // const history = useHistory ();

  // const handlePoolPaxChange = (event) => {
  //   const newValue = parseInt(event.target.value, 10) || 0;// Convert input to integer, default to 0 if not a valid number
  //   setpoolPax(newValue);
  // };

  // useEffect(() => {
  //   const Tot = poolSidePrice * poolPax;
  //   setPoolTotalPrice(Tot);

  //   handleAnyPriceUpdate(Tot || 0);

  //   console.log("After: " + Tot);
  // }, [poolPax]);

  // const handleCattagePaxChange = (event) => {
  //   const newValue = parseInt(event.target.value, 10) || 0; // Convert input to integer, default to 0 if not a valid number
  //   setcattagePax(newValue);
  //   setCattageTotalPrice(cattageSideLPrice * cattagePax);
  // };

  // useEffect(() => {
  //   const Tot = cattageSideLPrice * cattagePax;
  //   setCattageTotalPrice(Tot);

  //   handleAnyPriceUpdate(Tot || 0);

  //   console.log("After: " + Tot);
  // }, [cattagePax]);

  // useEffect(() => {
  //   const Tot = gardenSidePrice * gardenPax;
  //   setGardenTotalPrice(Tot);

  //   handleAnyPriceUpdate(Tot || 0);

  //   console.log("After: " + Tot);
  // }, [gardenPax]);

  // const handleGardenPaxChange = (event) => {
  //   const newValue = parseInt(event.target.value, 10) || 0; // Convert input to integer, default to 0 if not a valid number
  //   setgardenPax(newValue);
  //   setGardenTotalPrice(gardenSidePrice * gardenPax);
  // };

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