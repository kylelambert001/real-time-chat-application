import React from "react";
import Message from "../Message/Message";

import "./MessageFeed.css";

function MessageFeed(props) {
  const { messages, user } = props;
  const isSender = (msg, user) => {
    return msg.from.toLowerCase() === user.name.toLowerCase();
  };
  return (
    <div className="MessageFeed">
      {messages.map((msg) => (
        <Message key={msg.id} isSender={isSender(msg, user)} msg={msg} />
      ))}
    </div>
  );
}

export default MessageFeed;
