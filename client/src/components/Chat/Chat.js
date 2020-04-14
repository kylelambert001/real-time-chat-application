import React, { Component } from "react";
import queryString from "query-string";
import io from "socket.io-client";
const socket = io("localhost:5000");

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }

  componentDidMount() {
    socket.on("message", (message) => {
      console.log(message);
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("chat_message", { user: "Kyle", text: this.state.input });
    this.setState({ input: "" });
  };

  render() {
    const search = this.props.location.search;
    const parsed = queryString.parse(search);
    console.log(parsed);
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
