import React, { Component } from "react";
import "./MessageForm.css";

class MessageForm extends Component {
  render() {
    return (
      <form className="MessageForm">
        <input
          type="text"
          className="MessageForm-input"
          placeholder="Message here..."
          autoComplete="off"
        />
        <button type="submit" className="MessageForm-submit">
          Send
        </button>
      </form>
    );
  }
}

export default MessageForm;
