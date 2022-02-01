import React, { Component } from "react";

class Login extends Component {
  state = {
    user: {
      username: "",
      password: "",
    },
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    // const username = e.target.username.value;
    // const password = e.target.password.value;
    const username = e.target[0].value;
    const password = e.target[1].value;
    // console.log(username);
    // console.log(password);
    console.log({ username, password });
  };
  handlechange = (e) => {
    const name = e.currentTarget.name;
    const value = e.target.value;

    const updatedUser = { ...this.state.user }; //
    updatedUser[name] = value;

    this.setState({ user: updatedUser });

    // const password = e.target.value;
    // const updatedPassword = { ...this.state.password }; //
    // updatedPassword.password = password;

    // this.setState({ password: updatedPassword });
  };
  render() {
    return (
      <>
        <div className="container w-75 mx-auto">
          <form onSubmit={this.handleSubmit}>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                User Name
              </label>
              <input
                type="text"
                value={this.state.user.username}
                name="username"
                className="form-control"
                id="username"
                onChange={(e) => this.handlechange(e)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                value={this.state.user.password}
                name="password"
                className="form-control"
                id="password"
                onChange={(e) => this.handlechange(e)}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
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
