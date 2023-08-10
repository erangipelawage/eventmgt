import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SEABREEZE Hotel - Login</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="./assets/css/login.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
          integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
          crossOrigin="anonymous"
        />
        <div className="wrapper">
          <form className="form-signin">
            <h2 className="form-signin-heading">PLEASE LOGIN</h2>
            <input
              type="text"
              className="form-control"
              id="email"
              name="username"
              placeholder="Email Address"
              required
            />
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              placeholder="Password"
              required
            />
            <label className="checkbox">
              <input
                type="checkbox"
                defaultValue="remember-me"
                id="rememberMe"
                name="rememberMe"
              />{" "}
              Remember Me
            </label>
            <a
              href="/"
              button
              className="btn btn-lg btn-primary btn-block"
              type="submit"
            >
              LOGIN{" "}
            </a>
            <p className="message">
              Not registered? <Link to="/Register">Create an account</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
