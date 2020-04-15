import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

class Join extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      room: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { name, room } = this.state;
    return (
      <div className="Join">
        <div className="form-container">
          <h1>Join Page</h1>
          <form className="form">
            <input
              type="text"
              name="name"
              className="form-input"
              placeholder="Name"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="room"
              className="form-input"
              placeholder="Room"
              onChange={this.handleChange}
            />
            <Link
              className="form-link"
              onClick={(e) => (!name || !room ? e.preventDefault() : null)}
              to={`/chat?name=${name}&room=${room}`}>
              Join Chat
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default Join;
