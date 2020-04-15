import React, { Component } from "react";
import queryString from "query-string";
import io from "socket.io-client";
const socket = io("localhost:5000");

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      name: "",
      room: "",
    };
  }

  componentDidMount() {
    const search = queryString.parse(this.props.location.search);
    this.setState({ name: search.name, room: search.room });

    socket.on("message", (message) => {
      console.log(message);
    });

    socket.emit("join_room", { name: search.name, room: search.room });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("chat_message", {
      from: this.state.name,
      text: this.state.input,
    });
    this.setState({ input: "" });
  };

  render() {
    return (
      <div className="Chat">
        <h1>Chat Page</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="input"
            value={this.state.input}
            onChange={this.handleChange}
          />
          <button type="submit">Send message</button>
        </form>
      </div>
    );
  }
}

export default Chat;
