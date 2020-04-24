import React, { Component } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";

import "./ChatContainer.css";

class ChatContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_chat: "",
    };
  }

  componentDidMount() {
    const { socket } = this.props;

    socket.emit("INIT_CHAT");

    socket.on("CHAT_CHANGED", (chat) => {
      this.setState({ current_chat: chat });
      console.log(chat);
    });

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
    return (
      <div className="ChatContainer">
        <Sidebar />
        <Main current_chat={this.state.current_chat} />
      </div>
    );
  }
}

export default ChatContainer;
