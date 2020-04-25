import React, { Component } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";

import "./ChatContainer.css";

class ChatContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
    const { socket } = this.props;

    socket.on("MESSAGE_RECIEVED", (msg) => {
      this.setState((state) => ({
        messages: [...state.messages, msg],
      }));
    });

    socket.on("USER_DISCONNECTED", (connectedUsers) => {});
  }

  componentWillUnmount() {
    const { socket } = this.props;
    socket.emit("disconnect");
    socket.off();
  }

  render() {
    const { messages } = this.state;
    const { user } = this.props;
    return (
      <div className="ChatContainer">
        <Sidebar />
        <Main messages={messages} user={user} />
      </div>
    );
  }
}

export default ChatContainer;
