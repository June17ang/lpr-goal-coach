import React, { Component } from "react";
import { connect } from "react-redux";
import { firebaseApp } from "../firebase";

class App extends Component {
  signOut = () => {
    firebaseApp.auth().signOut();
  };

  render() {
    return (
      <div>
        <h3>Goals</h3>
        <div>Add Goal</div>
        <div>Goal Lists</div>
        <button className="btn btn-danger" onClick={this.signOut}>
          Sign Out
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default App;
