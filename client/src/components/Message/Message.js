import React from "react";
import "./Message.css";

function Message(props) {
  const { isSender } = props;
  return (
    <div
      className={`Message ${isSender ? "Message-sender" : "Message-reciever"}`}>
      <div className="Message-bubble">
        <div className="Message-info">
          <p className="Message-sender">Kyle Lambert</p>
          <p className="Message-time">7:28PM</p>
        </div>
        <div className="Message-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum qui
          eveniet debitis porro voluptatum nihil blanditiis doloremque impedit
          hic fugiat reiciendis vitae, quis labore at? Labore ea similique
          repellat beatae?Corporis cupiditate, culpa officiis porro ullam quos
          repellat. Est voluptate excepturi doloribus
        </div>
      </div>
    </div>
  );
}

export default Message;
