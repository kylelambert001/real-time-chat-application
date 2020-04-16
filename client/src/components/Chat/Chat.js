import React, { useState, useEffect } from "react";
import Messages from "../Messages/Messages";
import queryString from "query-string";
import io from "socket.io-client";
import "./Chat.css";
let socket;

const Chat = ({ location }) => {
  return (
    <div className="Chat">
      <div className="Chat-window">
        <Messages messages={messages} user={name} />
        <input
          type="text"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyPress={(event) =>
            event.key === "Enter" ? sendMessage(event) : null
          }
        />
      </div>
    </div>
  );
};

export default Chat;
