import React, { Component } from "react";
import Input from "./common/input";

class Login extends Component {
  state = {
    user: {
      username: "",
      password: "",
    },
    errors: { username: "", password: "" },
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);

    const username = e.target[0].value;
    const password = e.target[1].value;

    if (username === "admin" && password === "12345") {
      this.props.history.push("/home");
    } else {
      const errors = { ...this.state.errors };
      errors.username = "Username may be incorrect";
      errors.password = "Password may be incorrect";

      this.setState({ ...this.state, errors });
    }
  };
  validateInput = (name, value) => {
    if (name === "username") {
      if (value.trim() === "") return "Username must not be empty";
    }
    if (name === "password") {
      if (value.trim() === "") return "Password must not be empty";
    }
    return "";
  };
  handlechange = (e) => {
    const name = e.currentTarget.name;
    const value = e.target.value;

    const error = this.validateInput(name, value);
    const errors = { ...this.state.errors };

    errors[name] = error;

    const user = { ...this.state.user }; //
    user[name] = value;

    this.setState({ user, errors });
  };

  render() {
    return (
      <>
        <div className="container w-75 mx-auto">
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <div className="mb-3">
              <Input
                label="User Name"
                name="username"
                id="username"
                type="text"
                value={this.state.user.username}
                onChange={(e) => this.handlechange(e)}
                errors={this.state.errors}
              />
            </div>

            <div className="mb-3">
              <Input
                label="Password"
                name="password"
                id="password"
                type="password"
                value={this.state.user.password}
                onChange={(e) => this.handlechange(e)}
                errors={this.state.errors}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="remember"
              />
              <label className="form-check-label" htmlFor="remember">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Login;
