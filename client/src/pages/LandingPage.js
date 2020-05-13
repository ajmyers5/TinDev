import React, { Component } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import LandingPageCard from "../components/LandingPageCard/index"

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
        this.setState({users: response.data})

       
      });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
        { this.state.users.map(user => <div className="col"><LandingPageCard data={user} /> </div>)}
        
        </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
