import React, { Component } from "react";
import { completeGoalRef, goalRef } from "../firebase";
import { connect } from "react-redux";

class GoalItem extends Component {
  completeGoal = () => {
    //add complete goal on db
    //remove this goal from the goal ref
    const { email } = this.props.user;
    const { title, serverKey } = this.props.goal;
    goalRef.child(serverKey).remove();
    completeGoalRef.push({ email, title });
  };

  render() {
    const { email, title } = this.props.goal;
    return (
      <div style={{ margin: "5px" }}>
        <strong>{title}</strong>
        <span style={{ marginRight: "5px" }}>
          submitted by <em>{email}</em>
        </span>
        <button className="btn btn-sm btn-primary" onClick={this.completeGoal}>
          Complete
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state;
  return { user };
}

export default connect(mapStateToProps, null)(GoalItem);
