import React from 'react';
import { Link } from "react-router-dom";

const Ratings = () => {
    return(
        <>
            <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SEABREEZE Hotel - Ratings</title>
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="assets/css/contact-page.css" />
        <link rel="shortcut icon" href="./assets/img/favicon.webp" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="./assets/css/global-header.css" />
        <link rel="shortcut icon" href="./assets/img/favicon.webp" type="image/x-icon" />
        
        
        <div className="main">
          <div className="contact">
            <h2>FEEDBACK <h2 />
              <div className="contact-form">
                <form action="#">
                  <div className="contact-detail">
                    <input type="text" className="form-control" placeholder="Name" id="name" style={{resize: 'none', width: '115%'}} name="message" />
                  </div>
                  <textarea className="form-control" rows={5} id="comment" placeholder="Message" style={{resize: 'none', width: '115%'}} name="message" defaultValue={""} />
                  <label> Rate Your Overall Experirnce</label>
                  <br />
                  <div className="star-rating">
                    <input type="radio" id="star5" name="rating" defaultValue={5} />
                    <label htmlFor="star5" />
                    <input type="radio" id="star4" name="rating" defaultValue={4} />
                    <label htmlFor="star4" />
                    <input type="radio" id="star3" name="rating" defaultValue={3} />
                    <label htmlFor="star3" />
                    <input type="radio" id="star2" name="rating" defaultValue={2} />
                    <label htmlFor="star2" />
                    <input type="radio" id="star1" name="rating" defaultValue={1} />
                    <label htmlFor="star1" />
                  </div>
                  <button type="submit" className="btn">SUBMIT</button>
                </form>
              </div>
            </h2></div>
        </div>
        <div className="review-container" style={{textAlignLast: 'center'}}>
          <div className="review-header">
            <h2>Client Reviews and Feedback</h2>
            <p>We are very proud of the services we offer to our customers. Read every word from our happy
              customers.</p>
          </div>
          &nbsp;
          <div className="cards-container">
            <div className="card">
              <h3>Adrian</h3>
              <p>Great location and excellent staff. Only let down was lack of housekeeping which had to be
                requested <br />in the evening. Also tea and coffee facilities were provided with a UK plug
                but no
                adaptor, could only <br />use as we had an adaptor. Breakfast was fantastic buffet and pool
                excellent.</p>
            </div>
            &nbsp;
            <div className="card">
              <h3>Krishantha</h3>
              <p>This hotel located on center of the historical site. All places are in waking distance. Hotel
                staff were very <br />helpful and friendly. Even chef offered to prepare a special meal for kid
                without any additional fee.</p>
            </div>
            &nbsp;
            <div className="card">
              <h3>Carol</h3>
              <p>Beautiful property. Air conditioning is okay. Dinner is very good.</p>
            </div>
          </div>
          &nbsp;
          &nbsp;
        </div>
      </div>
        </>
    )
}

export default Ratings;