import React from 'react';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://userlike-cdn-widgets.s3-eu-west-1.amazonaws.com/4b09989a69254ac1a2bd21133f8c7eeb2c8aa64d6972487490ce08bf5c498422.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="SEABREEZE Hotel Helps you Discover The Perfect Balance Of Hospitality, Luxury And Comfort." />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="./assets/css/accesibility.css" />
        <link rel="stylesheet" href="./assets/css/index.css" />
        <link rel="shortcut icon" href="./assets/img/favicon.webp" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="./assets/css/global-header.css" />
        <link rel="shortcut icon" href="./assets/img/favicon.webp" type="image/x-icon" />

        <div className="jumbotron-container">
          <div className="jumbotron-left">
            <h2 className="jumbotron-header">Discover the perfect balance <br /> of hospitality, luxury and <br />comfort.</h2>
            <p>We are focused on providing clients with the highest level<br />
              of comfort and excellent affordable rates</p>
            <a href="/Ratings" className="btn btn-fill btn-large">Give Your FEEDBACKS</a>
          </div>
        </div>
        <div className="enjoy-container">
          <div className="enjoy-header">
            <h2 className="enjoy-heading">Enjoy your stay at our hotel</h2>
            <hr className="horizontal" />
            <h3>We are more than being a hotel because we are able to combine quality standard of a hotel with the
              advantages of an apartment.</h3>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.63296123671!2d79.88390687493377!3d9.005880091054541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afdd90468e6f87f%3A0x16024eb146963485!2sSea%20Breeze!5e0!3m2!1sen!2slk!4v1689504259810!5m2!1sen!2slk"
            style={{ border: 0, width: '100%', height: '400px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </>
  )
}
export default Home;