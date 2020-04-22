import React from "react";
import Message from "../Message/Message";

import "./MessageFeed.css";

function MessageFeed(props) {
  return (
    <div className="MessageFeed">
      <Message isSender={false} />
      <Message isSender={true} />
    </div>
  );
}

export default MessageFeed;
