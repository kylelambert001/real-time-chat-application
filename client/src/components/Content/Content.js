import React from "react";
import MessageFeed from "../MessageFeed/MessageFeed";
import MessageForm from "../MessageForm/MessageForm";

import "./Content.css";

function Content(props) {
  return (
    <div className="Content">
      <MessageFeed />
      <MessageForm />
    </div>
  );
}

export default Content;
