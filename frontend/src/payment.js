import React from 'react';
import './App.css';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from "@stripe/stripe-js/pure";
import CheckoutForm from "./components/CheckoutForm";
const stripePromise = loadStripe('pk_test_51NKmX5Cn2RHbPGapnKihSsVsornWgQcB1AKFXukOLrg7kOqs9i6ceKICubiA5LDHZx2dOhVmT8SSPsqlXCAqMzc400D0LcKfOw');
const App = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);
export default App;