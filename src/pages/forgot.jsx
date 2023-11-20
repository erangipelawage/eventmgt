import React, { useContext, useState } from "react";
import TextInput from "../components/TextInput";
import { MyContext } from "../Context";
import { Redirect, Link } from "react-router-dom";
export default function forgot({ history }) {
  const context = useContext(MyContext);
  const [data, setData] = useState({
    username: "",
    email: "",
  });
  const { username, email } = data;
  if (context.isUserAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container m-auto align-items-center justify-content-center">
      <form
        onSubmit={(event) => context.register(event, data, history)}
        className="mt-5"
      >
        <div className="row">
          <div className="form-group col-md-6 m-auto pb-3">
            <p
              className="text-uppercase text-danger font-weight-bold"
              id="register-message"
            ></p>
          </div>
        </div>
        <div className="row">
          <TextInput
            divClass="form-group col-md-6 m-auto"
            htmlForLabel="inputForUsername"
            labelName="Username"
            inputClass="form-control"
            inputType="text"
            inputName="username"
            inputValue={username}
            inputPlaceHolder="Enter Username"
            onChange={(event) =>
              setData({ ...data, username: event.target.value })
            }
            required={true}
          />
        </div>

        <div className="row">
          <TextInput
            divClass="form-group col-md-6 m-auto"
            htmlForLabel="inputForEmail"
            labelName="Email"
            inputClass="form-control"
            inputType="email"
            inputName="email"
            inputValue={email}
            inputPlaceHolder="Enter Email"
            onChange={(event) =>
              setData({ ...data, email: event.target.value })
            }
            required={true}
          />
        </div>
        <a href="/Home" className="btn btn-fill btn-large">Submit</a>
      </form>
    </div>
  );
}
