import React, { Component }  from 'react';
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

import CardIcon from "../images/credit-card.svg";
import ProductImage from "../images/product-image.jpg";

import "../stylep.css";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  }

  return stripePromise;
};

const Checkout = () => {
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const item = {
    price: "price_1ODgeACn2RHbPGapBgpXYU7f",
    quantity: 1
  };

  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`
  };

  const redirectToCheckout = async () => {
    setLoading(true);

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout (checkoutOptions)
      .then((result) => {
        if (result.error) {
          setStripeError(result.error.message);
        }
      })
      .catch((error) => {
        console.log("Error redirecting to checkout:", error);
        setStripeError("An error occurred while redirecting to checkout.");
      });

    // console.log("redirectToCheckout");
    // const stripe = await getStripe();
    // const { error } = await stripe.redirectToCheckout(checkoutOptions);
    // console.log("Stripe checkout error", error);

    // if (error) setStripeError(error.message);

    setLoading(false);
  };

  if (stripeError) { alert(stripeError);
  }

  return (
    <div className="checkout">
      <h2>POOL SIDE LOCATION</h2>
      <p className="checkout-title">  </p>
      <p className="checkout-description">
         
      </p>
      <h1 className="checkout-price">LKR 10,000</h1>
      <img src="assets/img/pool.jpg" className="rooms-img" />
        {/* className="checkout-product-image"
        src={ProductImage}
        alt="Product" */}
      
      <button
        className="checkout-button"
        onClick={redirectToCheckout}
        disabled={isLoading}
      >
        <div className="grey-circle">
          <div className="purple-circle">
            <img className="icon" src={CardIcon} alt="credit-card-icon" />
          </div>
        </div>
        <div className="text-container">
          <p className="text">{isLoading ? "LOADING..." : "BUY"}</p>
        </div>
      </button>
    </div>
  );
};

export default Checkout;


{/* <>
  <title>Payment</title>
  <meta charSet="UTF-8" />
  <meta name="viewport" content='width=device-width,initial-scale=1.0"' />
  <meta httpEquiv="X-UA-Compatible" content="ie-edge" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <link rel="stylesheet" href="style.css" />
  <div className="container">
    <form action="">
      <div className="raw">
        <div className="col">
          <div className="inputbox">
            <span> Card Holder:</span>
            <input type="text" placeholder="Enter Your name" />
          </div>
          <div className="inputbox">
            <span> Card Number:</span>
            <input type="number" placeholder="1111-2222-3333-4444" />
          </div>
          <div className="inputbox">
            <span> CVV:</span>
            <input type="text" placeholder={123} />
          </div>
          <div className="inputbox">
            <span> Amount:</span>
            <input type="number" placeholder="price" />
          </div>
          <div className="inputbox">
            <span> Card Type:</span>
            <select name="card_type" id="card_type" required="">
              <option value="">---selecr a Card type--</option>
              <option value="visa">Visa</option>
              <option value="rupy">American Express</option>
              <option value="master card">Master Card</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <center>
          <input type="submit" defaultValue="Submit" className="submit-btn" />
          <input type="submit" defaultValue="Delet" className="submit-btn" />
        </center>
      </div>
    </form>
  </div>
</>
 */}
