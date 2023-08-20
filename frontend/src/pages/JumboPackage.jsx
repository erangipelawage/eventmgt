import React from "react";
import { Link } from "react-router-dom";

const JumboPackage = () => {
  return (
    <>
        <div>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="description" content />
          <meta name="author" content />
          <title>Jumbo Package</title>
          <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="./assets/css/global-header.css" />
          <link rel="stylesheet" href="./assets/css/global-footer.css" />
          <link rel="stylesheet" href="./assets/css/styles.css" />
          <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
          <link href="EventStyles.css" rel="stylesheet" />
          <link rel="shortcut icon" href="./assets/img/favicon.webp" type="image/x-icon" />
          <header>
            <div className="header-container">
              <nav className="header-nav-bar">
                <div className="header-nav-logo">
                  <a href="index.html">
                    <img src="assets/img/logo.png" width="100px" height="100px" alt="SEABREEZE hotel logo" />
                  </a>
                </div>
                <ul className="header-nav-lists">
                  <li className="header-nav-list"><Link className="header-nav-link" to="/AboutUs">ABOUT US</Link></li>
                  <li className="header-nav-list"><Link className="header-nav-link" to="/Rooms">ROOMS</Link></li>
                  <li className="header-nav-list"><Link className="header-nav-link header-active" to="/Eventpackages">EVENT PACKAGES</Link></li>
                  <li className="header-nav-list"><Link className="header-nav-link" to="/Outdoor">OUTDOOR PACKAGES</Link></li>
                  <li className="header-nav-list"><Link className="header-nav-link" to="/Facilities">FACILITIES</Link></li>
                  <li className="header-nav-list"><Link className="header-btn header-btn-custom" to="/login">LOG IN</Link></li>

                </ul>
                <div className="header-hamburger-icon">
                  <div className="header-hamburger-line-1" />
                  <div className="header-hamburger-line-2" />
                  <div className="header-hamburger-line-3" />
                </div>
              </nav>
              <section className="py-5">
                <div className="container px-4 px-lg-5 my-5">
                  <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                      <img className="card-img-top mb-5 mb-md-0" src="assets/img/jumbo.jpeg" alt="" /> 
                    </div>
                    <div className="col-md-6">
                      <h3>JUMBO PACKAGE (FAMILY)</h3>
                      <div className="fs-5 mb-5">
                        <p><i><b>LKR 100 000</b></i></p>
                      </div>
                      <p className="lead">WE are introducing Jumbo Package to you for celibrabrate your special occations. You can use jumbo package for the occations like <b>Fairwell parties, Birth day Parties, Special meetings </b>etc. Then book your reservation today and experience a truly unforgettable day. </p>
                      <div className="buttons-container">
                      <a href="BookNow" className="btn btn-warning">BOOK NOW</a>
                        <div className="Menu">
                          <br />
                          <h3>MENU</h3>
                          <br />
                          <p>🍷Welcome Drink</p>
                          <p>🍗BBQ</p>  
                          <p>🥕Four Vegitable Dishes</p>
                          <p>🍛Select One From(Rice,Noodles,Pasta Dishes)</p>
                          <p>🍗Two Meat Dishes(Chicken/Beef/Pork)</p>
                          <p>🐟Two Fish Dishes</p>              
                          <p>🍨Three Desserts(Chocolate Mousse,Ice cream,Fruit Salad,Cheese Cake)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div></section>
            </div></header></div>
      </>
      );
    };   
    export default JumboPackage;