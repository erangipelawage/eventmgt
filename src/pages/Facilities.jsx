import React from 'react';
import { Link } from 'react-router-dom';

const Facilities = () => {
    return(
        <>
       <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SEABREEZE Hotel - Facilities</title>
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="./assets/css/facilities.css" />
        <link rel="shortcut icon" href="./assets/img/favicon.webp" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="./assets/css/rooms-and-suites.css" />
        <link rel="shortcut icon" href="./assets/img/favicon.webp" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="./assets/css/global-header.css" />
        <link rel="shortcut icon" href="./assets/img/favicon.webp" type="image/x-icon" />
        
        <main>
          <div className="container">
            <div className="page-header-container">
              <h2 className="page-header">SEABREEZE HOTEL FACILITIES</h2>
              <hr />
              <p className="page-sub-header">
                Get the most of our hotel facilities. Enjoy the state of the art facilities in our hotel
              </p>
            </div>
            <div className="up">
              <h2 className="page-header">TOP POPULAR FACILITIES</h2>
              <hr />
            </div>
            <div className="container">
              <div className="containera">
                <div className="gallery">
                  <div className="gallery-item">
                    <img className="gallery-image" src="assets/img/Rservice.jpg" alt="gym" />
                    <h4>24 HOURS ROOM SERVICES</h4>
                    <p className="imggrid">
                      You have access to 24-hours a day room service at our hotel
                    </p>
                  </div>
                  <div className="gallery-item">
                    <img className="gallery-image" src="assets/img/parking.png" alt="restaurants" />
                    <h4>FREE PARKING AND TRANSPORTATION</h4>
                    <p className="imggrid">
                      Free self parking on site and Wheelchair-accessible parking available
                    </p>
                  </div>
                  <div className="gallery-item">
                    <img className="gallery-image" src="assets/img/resturnt.png" alt="restaurants" />
                    <h4>RESTAURANTS</h4>
                    <p className="imggrid">
                      We have the best local and intercontinental dishes you have ever
                      tasted before in our hotel.
                    </p>
                  </div>
                  <div className="gallery-item">
                    <img className="gallery-image" src="assets/img/th.jpeg" alt="swim" />
                    <h4>SWIMMING POOLS</h4>
                    <p className="imggrid">
                      We have the best equipped swimming pool in the country with an
                      instructor waiting to guide you
                    </p>
                  </div>
                  <div className="gallery-item">
                    <img className="gallery-image" src="assets/img/phone.png" alt="restaurants" />
                    <h4>ACCESS TO 24H DIGITAL TELEPHONE SERVICES</h4>
                    <p className="imggrid">
                      With our feature rich Digital telephone services, you will have the flexibility you have
                      always wanted with voice communication from your home or business
                    </p>
                  </div>
                  <div className="gallery-item">
                    <img className="gallery-image" src="assets/img/family_frndly.jpg" alt="restaurants" />
                    <h4>FAMILY SERVICES</h4>
                    <p className="imggrid">
                      Children's pool
                      Free babysitting
                      Laundry facilities
                      Mini-fridge
                      Outdoor pool
                      Playground
                    </p>
                  </div>
                  <div className="gallery-item">
                    <img className="gallery-image" src="assets/img/guest_service.png" alt="restaurants" />
                    <h4>GUEST SERVICES</h4>
                    <p className="imggrid">
                      Concierge services
                      Daily housekeeping
                      Dry cleaning/laundry service
                      Tour and ticket assistance
                      Wedding services
                    </p>
                  </div>
                  <div className="gallery-item">
                    <img className="gallery-image" src="assets/img/outdoor.jpeg" alt="restaurants" />
                    <h4>OUTDOORS</h4>
                    <p className="imggrid">
                      Garden
                      Barbecue grill
                      Photo-Shoots
                    </p>
                  </div>
                  <div className="gallery-item">
                    <img className="gallery-image" src="assets/img/more.png" alt="restaurants" />
                    <h4>MORE</h4>
                    <p className="imggrid">
                      Designated smoking areas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="up">
            <h2 className="page-header">ROOM FACILITIES</h2>
            <hr />
          </div>
          <div className="container">
            <div className="containera">
              <div className="gallery">
                <div className="gallery-item">
                  <img className="gallery-image" src="assets/img/bed.png" alt="gym" />
                  <h4>BEDROOM</h4>
                  <p className="imggrid">
                    Bedsheets provided
                  </p>
                </div>
                <div className="gallery-item">
                  <img className="gallery-image" src="assets/img/tic.png" alt="restaurants" />
                  <h4>ENTERTAINMENT</h4>
                  <p className="imggrid">
                    LED TV with cable channels
                  </p>
                </div>
                <div className="gallery-item">
                  <img className="gallery-image" src="assets/img/bathrm.jpeg" alt="restaurants" />
                  <h4>BATHROOM</h4>
                  <p className="imggrid">
                    Bathtub or shower<br />
                    Free toiletries<br />
                    Hair dryer on request<br />
                    Private bathroom<br />
                    Towels<br />
                  </p>
                </div>
                <div className="gallery-item">
                  <img className="gallery-image" src="assets/img/serve.jpg" alt="swim" />
                  <h4>FOOD AND DRINK</h4>
                  <p className="imggrid">
                    Coffee/tea maker<br />
                    Free bottled water<br />
                    Limited room service<br />
                    Mini-fridge<br />
                    Minibar<br />
                  </p>
                </div>
                <div className="gallery-item">
                  <img className="gallery-image" src="assets/img/more.png" alt="restaurants" />
                  <h4>MORE</h4>
                  <p className="imggrid">
                    Air conditioning<br />
                    Ceiling fan<br />
                    Desk<br />
                    Phone<br />
                    Safe</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="enjoy-heading">
              <h2 className="page-header">POLICIES</h2>
              <hr className="horizontal" />
              <h4>✔ CHECK-IN CHECK-OUT</h4>
              <p>24h Service<br />Minimum check-in age: 18</p>
              &nbsp;
              <h4>✔ CHILDREN AND EXTRA BEDS</h4>
              <p>Children are welcome. Children up to the age of 11 years can stay for free if using existing beds when <br />occupying the parent or guardian's room</p>
              &nbsp;
              <h4>✔ PETS</h4>
              <p>No pets or service animals allowed</p>
              &nbsp;
              <h4>✔ PROPERTY PAYMENT TYPES</h4>
              <div className="gallery-item">
                <img className="gallery-images" src="assets/img/visa.png" alt="visa" />
                &nbsp;
              </div>
            </div>
          </div>
        </main></div>
        </>
    )
}

export default Facilities;





