import React, { Component } from "react";

import "./ChatContainer.css";

class ChatContainer extends Component {
  componentDidMount() {
    const { socket } = this.props;
    socket.on("USER_DISCONNECTED", (connectedUsers) => {
      console.log(connectedUsers);
    });
  }

  componentWillUnmount() {
    const { socket } = this.props;
    socket.emit("disconnect");
    socket.off();
  }

  render() {
    return <div>ChatContainer</div>;
  }
}

export default ChatContainer;
