import React from "react";
import "./Message.css";

function Message(props) {
  const { isSender, msg } = props;
  return (
    <div
      className={`Message ${isSender ? "Message-sender" : "Message-reciever"}`}>
      <div className="Message-box">
        <div className="Message-info">
          {!isSender ? <p className="Message-user">{msg.from}</p> : null}
          <p className="Message-time">{msg.time}</p>
        </div>
        <div className="Message-bubble">
          <div className="Message-text">{msg.message}</div>
        </div>
      </div>
    </div>
  );
}

export default Message;
