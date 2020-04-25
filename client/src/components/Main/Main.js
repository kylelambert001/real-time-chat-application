import React from "react";
import MessageFeed from "../MessageFeed/MessageFeed";
import MessageForm from "../MessageForm/MessageForm";

import "./Main.css";

function Main(props) {
  return (
    <div className="Main">
      <MessageFeed messages={props.messages} user={props.user} />
      <MessageForm />
    </div>
  );
}

export default Main;
