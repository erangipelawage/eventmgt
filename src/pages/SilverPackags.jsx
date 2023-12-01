import React from "react";
import { Link } from "react-router-dom";

const SilverPackags = () => {
  return (
    <>
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Silver Packages</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="./assets/css/global-header.css" />
        <link rel="stylesheet" href="./assets/css/global-footer.css" />
        <link rel="stylesheet" href="./assets/css/styles.css" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
          rel="stylesheet"
        />
        <link href="EventStyles.css" rel="stylesheet" />
        <link
          rel="shortcut icon"
          href="./assets/img/favicon.webp"
          type="image/x-icon"
        />

        <section className="py-5">
          <div className="container px-4 px-lg-5 my-5">
            <div className="row gx-4 gx-lg-5 align-items-center">
              <div className="col-md-6">
                <img
                  className="card-img-top mb-5 mb-md-0"
                  src="assets/img/Hall1.jpg"
                />
              </div>
              <div className="col-md-6">
                <h3>Silver Package</h3>
                <div className="fs-5 mb-5">
                  <p>
                    <i>
                      <b>LKR 250 000</b>
                    </i>
                  </p>
                </div>
                <p className="lead">
                  We are introducing Silver Package you to have your dream
                  wedding at Sea Breeze to celibrate your special moments with
                  small group of your loving ones.Our package includes
                  everything you need to create a truly unforgettable event,
                  from the venue to the catering
                </p>
                <div className="buttons-container">
                  <a href="/Eventpackages" className="btn btn-success">
                    Back
                  </a>
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
                          <td>Vanilla Ice Cream</td>
                          <td>Soft Drinks</td>
                        </tr>
                        <tr>
                          <td>Vegitable Fried Rice</td>
                          <td>Chocolate Moose</td>
                          <td>Iced Cofee</td>
                        </tr>
                        <tr>
                          <td>Chili Paste</td>
                        </tr>
                        <tr>
                          <td>Develed Chicken</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default SilverPackags;
