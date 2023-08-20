import React from "react";
import { Link } from "react-router-dom";

const PlatinumPackage = () => {
  return (
    <>
        <div>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="description" content />
          <meta name="author" content />
          <title>Platinum Package</title>
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
                      <img className="card-img-top mb-5 mb-md-0" src="assets/img/Hall 2.jpg" alt="" />
                    </div>
                    <div className="col-md-6">
                      <h3>Platinum Package</h3>
                      <div className="fs-5 mb-5">
                        <span><i><b>LKR 750 000</b></i></span>
                      </div>
                      <p className="lead">We are introducing Platinum Package you to have your dream wedding at
                        Sea Breeze to celibrate your special moments with your loving ones.Our package
                        includes everything you need to create a truly unforgettable event, from the venue
                        to the catering</p>
                      <div className="buttons-container">
                        <a href="BookNow" className="btn btn-warning">BOOK NOW</a>
                        <div className="Menu">
                          <br />
                          <h3>MENU</h3>
                          <table class="table table-striped">
                            <tbody>
                              <tr>
                                <td>Lunch</td>
                                <td>Dessert</td>
                                <td>Drinks</td>
                              </tr>
                              <tr>
                                <td>Chicken Fried Rice</td>
                                <td>Choclate Moose</td>
                                <td>Ice Cofee</td>
                              </tr>
                              <tr>
                                <td>Buttered Noodles</td>
                                <td>Curd with Treacle</td>
                                <td>Mojito</td>
                              </tr>
                              <tr>
                                <td>Develed Chicken</td>
                                <td>Cheese Pudding</td>
                                <td>Moctail Bar</td>
                              </tr>
                            <tr>
                              <td>Fish Ambul Thiyal</td>
                              <td>Watalappan</td>
                              <td>Mimosa</td>
                            </tr>
                          </tbody>
                        </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div></section>
            </div></header></div>
       </>
       );
     };   
     export default PlatinumPackage;