import React, { Component } from "react";
import ChatContainer from "../ChatContainer/ChatContainer";
import Login from "../Login/Login";
import io from "socket.io-client";
import "./Layout.css";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      socket: "",
    };
  }

  componentDidMount() {
    this.initSocket();
  }

  initSocket = () => {
    const socket = io("localhost:5000");
    this.setState({ socket });
    socket.on("connect", () => {
      console.log("Connected");
    });
  };

  setUser = (user) => {
    const { socket } = this.state;
    this.setState({ user });
    socket.emit("USER_CONNECTED", user);
    // console.log(user);
  };

  render() {
    const { user, socket } = this.state;

    return user ? (
      <ChatContainer socket={socket} user={user} />
    ) : (
      <Login setUser={this.setUser} socket={socket} />
    );
  }
}

export default Layout;
