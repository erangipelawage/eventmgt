import React from "react";
import { Link } from "react-router-dom";

const DinnerOutC = () => {
  return (
    <>
        <div>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="description" content />
          <meta name="author" content />
          <title>Dinner for Couple</title>
          <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="./assets/css/global-header.css" />
          <link rel="stylesheet" href="./assets/css/global-footer.css" />
          <link rel="stylesheet" href="./assets/css/styles.css" />
          <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
          <link rel="shortcut icon" href="./assets/img/favicon.webp" type="image/x-icon" />

              <section className="py-5">
                <div className="container px-4 px-lg-5 my-5">
                  <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                      <img className="card-img-top mb-5 mb-md-0" src="assets\img\D couple 2.jpg" alt="" />
                    </div>
                    <div className="col-md-6">
                      <h3>Dinner out Package (Couple)</h3>
                      <div className="fs-5 mb-5">
                        <p><b><i>LKR 10 000</i></b></p>
                      </div>
                      <p className="lead">Treat your loved one to a night out with us. Our menu features a variety of
                        delicious and innovative dishes, all made with fresh, seasonal ingredients. This is the
                        perfect way to show your loved one how much you care. So book your reservation today and
                        experience a truly unforgettable night out.</p>
                      <div className="buttons-container">
                        <a href="BookNow" className="btn btn-warning">BOOK NOW</a>
                        <div className="Menu">
                          <br />
                          <h3>MENU</h3>
                          <p>🍷Welcome Drink</p>
                          <p>🍲One Soup🥕Three Vegitable Dishes</p>
                          <p>🥕Three Vegitable Dishes
                          </p><p>🍛Select One From(Rice,Noodles,Pasta Dishes)</p>
                          <p>🍗Two Meat Dishes(Chicken/Beef/Pork)
                          </p><p>🐟Two Fish Dishes</p>
                          <p>🍨Two Desserts (Chocolate Moose,Ice cream,Fruit Salad)</p>
                          <p>🍾Champagn Bottle</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div></section>
            </div>
      </>
      );
    };   
    export default DinnerOutC;