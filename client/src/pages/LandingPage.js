import React, { Component } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

class LandingPage extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    console.log(this.props.match.params.id);
    axios
      .get("/devs", {
        headers: {
          user: this.props.match.params.id,
        },
      })
      .then((response) => {
        console.log(response);
      });
  }

  render() {
    return (
      <div>
        <Navbar />
        <h1>Landing page</h1>
      </div>
    );
  }
}

export default LandingPage;
