import "@stripe/stripe-js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Checkout from "./components/Checkout";
import Success from "./components/Success";
import Cancel from "./components/Cancel";

import "./stylep.css";

import React from "react";
import "./App.css";
import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { Switch } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import Roombooking from "./pages/roombooking";
import RoomPage from "./pages/RoomPage";
import SingleRoomPage from "./pages/SingleRommPage";
import BookingPage from "./pages/BookingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ErrorPage from "./pages/ErrorPage";
import Dashboard from './pages/Dashboard';
import Outdoocheckout from './pages/Outdoocheckout';

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Facilities from "./pages/Facilities";
import Outdoor from "./pages/Outdoor";
import Ratings from "./pages/Ratings";
import Eventpackages from "./pages/Eventpackages";
import Blog from "./pages/Blog";

import Footer from "./components/Footer";

import GoldPackage from "./pages/GoldPackage";
import DinnerOutC from "./pages/DinnerOutC";
import DinnerOutF from "./pages/DinnerOutF";
import SilverPackags from "./pages/SilverPackags";
import JumboPackage from "./pages/JumboPackage";
import PlatinumPackage from "./pages/PlatinumPackage";
  

function App() {
  return (
    <div className="container-fluid">
      <NavbarComponent />
      <Switch>
        <Route
          path="/home"
          render={(props) => <Home {...props} />}
        />
        <Route path="/Roombooking" render={(props) => <Roombooking {...props} />} />
        <Route path="/rooms" render={(props) => <RoomPage {...props} />} />
        <Route
          path="/single-room/:room_slug"
          render={(props) => <SingleRoomPage {...props} />}
        />
        <Route
          path="/book/:room_id"
          render={(props) => <BookingPage {...props} />}
        />
        <Route path="/login" render={(props) => <LoginPage {...props} />} />
        <Route
          path="/register"
          render={(props) => <RegisterPage {...props} />}
        />
        <Route
          path="/AboutUs"
          render={(props) => <AboutUs {...props} />}
        />
        <Route
          path="/Ratings"
          render={(props) => <Ratings {...props} />}
        />
        <Route
          path="/Facilities"
          render={(props) => <Facilities {...props} />}
        />
        <Route
          path="/Eventpackages"
          render={(props) => <Eventpackages {...props} />}
        />
        <Route
          path="/Outdoor"
          render={(props) => <Outdoor {...props} />}
        />

        <Route
          path="/Blog"
          render={(props) => <Blog {...props} />}
        />

        <Route
          path="/Checkout"
          render={(props) => <Checkout {...props} />}
        />

        <Route
          path="success"
          render={(props) => <Success {...props} />}
        />

        <Route
          path="/cancel"
          render={(props) => <Cancel {...props} />}
        />

        {/* keep for ref after delete */}

        <Route
          path="/ErrorPage"
          render={(props) => <ErrorPage {...props} />}
        />

        <Route
          path="/GoldPackage"
          render={(props) => <GoldPackage {...props} />}
        />

        <Route
          path="/DinnerOutF"
          render={(props) => <DinnerOutF {...props} />}
        />

        <Route
          path="/DinnerOutC"
          render={(props) => <DinnerOutC {...props} />}
        />

        <Route
          path="/SilverPackags"
          render={(props) => <SilverPackags {...props} />}
        />

        <Route
          path="/JumboPackage"
          render={(props) => <JumboPackage {...props} />}
        />

        <Route
          path="/Outdoocheckout"
          render={(props) => <Outdoocheckout {...props} />}
        />

         {/* eND NO NEED CAN REMOVE */}

        <Route path="/dashboard" render={(props) => <Dashboard {...props}/>}/>
        {/*<Route render={(props) => <ErrorPage {...props} />} />*/}

      </Switch>
      <Footer />
    </div>

  );
}

export default App;
