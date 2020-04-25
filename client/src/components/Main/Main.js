import React from "react";
import MessageFeed from "../MessageFeed/MessageFeed";
import MessageForm from "../MessageForm/MessageForm";

import "./Main.css";

function Main(props) {
  return (
    <div className="Main">
      <MessageFeed messages={props.messages} user={props.user} />
      <MessageForm sendMessage={props.sendMessage} />
    </div>
  );
}

export default Main;
