import React, { Component, Fragment } from "react";
import UserLoginNavbar from "../components/UserLoginNavbar";
import UserLoginForm from "../components/UserLoginForm";
import axios from "axios";

class LoginPage extends Component {
  state = {
    username: "",
  };

  // Handle state of input box from login
  setUsername = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // Handle form submit for login
  handleSubmit = (e) => {
    e.preventDefault();

    axios.post("/devs", { username: this.state.username }).then((response) => {
      console.log(response);
      if (response.status === 200) {
        const { _id } = response.data;
        this.props.history.push(`/dev/${_id}`);
      }
    });
  };

  render() {
    return (
      <Fragment>
        <UserLoginNavbar />
        <UserLoginForm
          username={this.state.username}
          setUsername={this.setUsername}
          handleSubmit={this.handleSubmit}
        />
      </Fragment>
    );
  }
}

export default LoginPage;
