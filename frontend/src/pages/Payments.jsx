import React from 'react';
import { Link } from 'react-router-dom';

const BookNow = () => {
    return(
        <>
       <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SEABREEZE Hotel - Payment Page</title>
        <link rel="shortcut icon" href="./assets/img/favicon.webp" type="image/x-icon" />
        <link rel="stylesheet" href="./assets/css/style1.css" />
        <link rel="stylesheet" href="./assets/css/global-header.css" />
        
        <header>
          <div className="header-container">
            <nav className="header-nav-bar">
              <div className="header-nav-logo">
                <Link to="/">
                  <img src="assets/img/logo.png" alt="SEABREEZE hotel logo" width="100px" height="100px" />
                </Link>
              </div>
              <ul className="header-nav-lists">
                <li className="header-nav-list"><Link className="header-nav-link" to="/">HOME</Link></li>
                <li className="header-nav-list"><Link className="header-nav-link" to="/AboutUs">ABOUT US</Link></li>
                <li className="header-nav-list"><Link className="header-nav-link" to="/Rooms">ROOMS</Link></li>
                <li className="header-nav-list"><Link className="header-nav-link" to="/Eventpackages">EVENT PACKAGES</Link></li>
                <li className="header-nav-list"><Link className="header-nav-link" to="/Outdoor">OUTDOOR PACKAGES</Link></li>
                <li className="header-nav-list"><Link className="header-nav-link" to="/Facilities">FACILITIES</Link></li>
                <li className="header-nav-list"><Link className="header-btn header-btn-custom" to="/login">LOG IN</Link>
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
        
        <div className="container">
          <form action>
            <div>
              <h2 className="title">Online Reservation</h2>
            </div>
            <div className="raw">
              <div className="col">
                <h3 className="title">Billing Address</h3>
                <div className="inputbox">
                  <span> Full Name:</span>
                  <input type="text" placeholder="Enter Your name" />
                </div>
                <div className="inputbox">
                  <span> Email:</span>
                  <input type="email" placeholder="Enter Your email" />
                </div>
                <div className="inputbox">
                  <span> Contact No:</span>
                  <input type="number" placeholder="Enter Your ConNo" />
                </div>
                <div className="inputbox">
                  <span> Arrival Date:</span>
                  <input type="date" placeholder="16/07/2023" />
                </div>
                <div className="inputbox">
                  <span> Departure Date:</span>
                  <input type="date" placeholder="16/07/2023" />
                </div>
                <div className="inputbox">
                  <span> Price:</span>
                  <input type="number" placeholder="price" />
                </div>
              </div>
              <div className="col">
                <h3 className="title">Payment</h3>
                <div className="inputbox">
                  <span> Card Accepted:</span>
                  <img src="assets/img/2.jpg" alt="" />
                </div>
                <div className="inputbox">
                  <span> Name On Card:</span>
                  <input type="text" placeholder="Mr.Avon" />
                </div>
                <div className="inputbox">
                  <span> Credit Card Number:</span>
                  <input type="number" placeholder="1111-2222-3333-4444" />
                </div>
                <div className="inputbox">
                  <span> Exp Month:</span>
                  <input type="text" placeholder="January" />
                </div>
                <div className="inputbox">
                  <span> Exp Year:</span>
                  <input type="number" placeholder={2023} />
                </div>
                <div className="inputbox">
                  <span> CVV:</span>
                  <input type="text" placeholder={123} />
                </div>
              </div>
              <div>
                <input type="checkbox" /> <i>I accepted to make money transaction with all the conditions mentioned here.</i>
              </div>
            </div>
            <center>
              <input type="submit" defaultValue="RESERVE" className="submit-btn" />
            </center>
          </form>
        </div>
        
      </div>
        </>
    )
}

export default BookNow;