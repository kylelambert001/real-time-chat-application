import React from "react";
import "./Messages.css";

const Messages = (props) => {
  const { messages, user } = props;
  return (
    <div className="Messages">
      {messages.map((message) =>
        message.from === user ? (
          <div className="Message-box sender">
            <div className="Message">{message.text}</div>
          </div>
        ) : (
          <div className="Message-box receiver">
            <div className="Message">{message.text}</div>
          </div>
        )
      )}
    </div>
  );
};

export default Messages;
