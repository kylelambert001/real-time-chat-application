import React from "react";
import MessageFeed from "../MessageFeed/MessageFeed";
import MessageForm from "../MessageForm/MessageForm";

import "./Main.css";

function Main(props) {
  const { current_chat } = props;
  return (
    <div className="Main">
      <h1>{`Chat name: ${current_chat.chat ? current_chat.chat : ""}`}</h1>
      <MessageFeed />
      <MessageForm />
    </div>
  );
}

export default Main;
