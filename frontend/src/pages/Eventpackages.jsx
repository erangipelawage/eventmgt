import React from 'react';
import { Link } from 'react-router-dom';

const Eventpackages = () => {
    return(
        <>
       <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SEABREEZE Hotel - Event Packages</title>
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="./assets/css/rooms-and-suites.css" />
        <link rel="shortcut icon" href="./assets/img/favicon.webp" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="./assets/css/global-header.css" />
        <link rel="shortcut icon" href="./assets/img/favicon.webp" type="image/x-icon" />
        
        
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
                <li className="header-nav-list"><Link className="header-nav-link header-active" to="/Eventpackages">EVENT PACKAGES</Link></li>
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

      <main>
        <div className="container">
          {/* Top Text */}
          <div className="page-header-container">
            <h2 className="page-header">Sea Bruu8u8u89i9es</h2>
            <hr />
            <p className="page-sub-header">
              Get the most of our hotel specials. Enjoy the modern <br />
              comfort and panoramic view
            </p>
          </div>
        </div>
        {/* Wedding Event Package */}
        <div className="container">
          <div className="card">
            <img src="C:\Users\Tharushi\Documents\Reservation\img\hall 1a.jpg" alt="" /> 
            <div className="intro">
              <h3>Silver Package</h3>
              <p>🧑50 participants</p>
              <p>🏠Royal Banquet Hall</p>
              <p>🕛In 9 p.m </p>
              <p>🕛Out 3 p.m</p>
              <p><b>LKR 250,000</b><span style={{textAlign: 'left'}}><a href="silverPackage.html">See More</a></span></p>
            </div>   
          </div>
          <div className="card">
            <img src="C:\Users\Tharushi\Documents\Reservation\img\hall 2.jpg" alt="" /> 
            <div className="intro">
              <h3>Gold Package</h3>
              <p>🧑100 participants</p>
              <p>🏠Rose Banquet Hall</p>
              <p>🕛In 9 p.m </p>
              <p>🕛Out 3 p.m</p>
              <p><b>LKR 500,000</b><span style={{textAlign: 'left'}}><a href="GoldPackage.html">See more</a></span></p>
            </div>   
          </div>
          <div className="card">
            <img src="C:\Users\Tharushi\Documents\Reservation\img\hall 3.jpg" alt="" /> 
            <div className="intro">
              <h3>Platinum Package</h3>
              <p>🧑150 participants</p>
              <p>🏠Deween Banquet Hall</p>
              <p>🕛In 9 p.m </p>
              <p>🕛Out 3 p.m</p>
              <p><b>LKR 750,000</b><span style={{textAlign: 'left'}}><a href="PlatinumPackage.html">See more</a></span></p>
            </div>   
          </div>
        </div>
        {/* Night & other Event Package */}
        <div className="container">
          <div className="card">
            <img src="C:\Users\Tharushi\Documents\Reservation\img\D couple.jpg" alt="" />
            <div className="intro">
              <h3>Dinner Out Package <span>(Couple)</span></h3>
              <p>🧑2 participants</p>
              <p>🍽️Restauran</p>
              <p>🕛In 7 p.m </p>
              <p>🕛Out 12 p.m</p>
              <p><b>LKR 10,000</b><span style={{textAlign: 'left'}}><a href="DinnerC.html">See more</a></span></p>
            </div>   
          </div>
          <div className="card">
            <img src="C:\Users\Tharushi\Documents\Reservation\img\D dinner 2.jpg" alt="" />
            <div className="intro">
              <h3>Dinner Out Package<span>Family</span></h3>
              <p>🧑6 participants</p>
              <p>🍽️Restauran</p>
              <p>🕛In 7 p.m </p>
              <p>🕛Out 12 p.m</p>
              <p><b>LKR 25,000</b><span style={{textAlign: 'left'}}><a href="DinnerF.html">See more</a></span></p>
            </div>   
          </div>
          <div className="card">
            <img src="C:\Users\Tharushi\Documents\Reservation\img\jumbo.jpeg" alt="" />
            <div className="intro">
              <h3>Jumbo Package</h3>
              <p>🧑30 participants</p>
              <p>🏠Royal Banquet Hall</p>
              <p>🕛In 6 p.m </p>
              <p>🕛Out 12 p.m</p>
              <p><b>LKR 100,000</b><span style={{textAlign: 'left'}}><a href="JumboP.html">See more</a></span></p>
            </div>   
          </div>
        </div>
      </main>
        
      </div>
        </>
    )
}

export default Eventpackages;





