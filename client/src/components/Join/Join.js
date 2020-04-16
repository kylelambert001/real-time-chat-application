import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="Join">
      <div className="form-container">
        <h1>Join Page</h1>
        <form className="form">
          <input
            type="text"
            name="name"
            className="form-input"
            placeholder="Name"
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="text"
            name="room"
            className="form-input"
            placeholder="Room"
            onChange={(event) => setRoom(event.target.value)}
          />
          <Link
            className="form-link"
            onClick={(event) =>
              !name || !room ? event.preventDefault() : null
            }
            to={`/chat?name=${name}&room=${room}`}>
            Join Chat
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Join;
