import React, { Component } from "react";

import "./ChatContainer.css";

class ChatContainer extends Component {
  componentDidMount() {
    this.addUser();
  }

  componentWillUnmount() {
    const { socket } = this.props;
    socket.emit("disconnect");
    socket.off();
  }

  addUser = () => {
    const { socket, user } = this.props;
    socket.emit("USER_CONNECTED", user);
  };

  render() {
    return <div>ChatContainer</div>;
  }
}

export default ChatContainer;
