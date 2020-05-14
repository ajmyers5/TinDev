import React, { Component } from "react";
import axios from "axios"
import Navbar from "../components/Navbar";
import GHPJumbotron from "../components/GHP-Jumbotron";
// import GHPCard from "../components/GHP-Card";

class GithubPage extends Component {
  state = {
    user: []
  }

  componentDidMount(){
    axios.get("/dev", {
      headers:{
        user: this.props.match.params.id
      }
    }).then((response)=>{
      console.log(response)
      this.setState({
        user: response.data
      })
    })
  }
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <GHPJumbotron name={this.state.user.name} user={this.state.user.user} location={this.state.user.locationOfUser} avatar={this.state.user.avatar}></GHPJumbotron>
        <h1>{this.props.match.params.id}</h1>
      </div>
    );
  }
}

export default GithubPage;
