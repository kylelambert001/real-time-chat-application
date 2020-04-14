import React, { Component } from "react";
import { Link } from "react-router-dom";

class Join extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Join">
        <h1>Join Page</h1>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="room">Room</label>
          <input type="text" id="room" name="room" />
          <Link to="/chat?name=kyle">Join Room</Link>
        </form>
      </div>
    );
  }
}

export default Join;
