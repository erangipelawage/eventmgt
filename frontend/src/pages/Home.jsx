import React from 'react';
// import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <>
       <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="SEABREEZE Hotel Helps you Discover The Perfect Balance Of Hospitality, Luxury And Comfort." />
        <title>SEABREEZE Hotel</title>
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="./assets/css/accesibility.css" />
        <link rel="stylesheet" href="./assets/css/index.css" />
        <link rel="shortcut icon" href="./assets/img/favicon.webp" type="image/x-icon" />
        {/* <div id="loader">
          <svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve">
            <path fill="#d4af37" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="360 50 50" repeatCount="indefinite" />
            </path>
          </svg>
        </div> */}
        
        <div className="jumbotron-container">
          <div className="jumbotron-left">
            <h2 className="jumbotron-header">Discover the perfect balance <br /> of hospitality, luxury and <br />comfort.</h2>
            <p>We are focused on providing clients with the highest level<br />
              of comfort and excellent affordable rates</p>
            <a href="/Ratings" className="btn btn-fill btn-large">FEEDBACKS</a>
          </div>
        </div>
        <div className="enjoy-container">
          <div className="enjoy-header">
            <h2 className="enjoy-heading">Enjoy your stay at our hotel</h2>
            <hr className="horizontal" />
            <h3>We are more than being a hotel because we are able to combine quality standard of a hotel with the
              advantages of an apartment.</h3>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.63296123671!2d79.88390687493377!3d9.005880091054541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afdd90468e6f87f%3A0x16024eb146963485!2sSea%20Breeze!5e0!3m2!1sen!2slk!4v1689504259810!5m2!1sen!2slk" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" width={1465} height={400} />
        </div></div>
        </>
    )
}

export default Home;