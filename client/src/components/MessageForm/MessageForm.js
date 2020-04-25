import React, { Component } from "react";
import "./MessageForm.css";

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { input } = this.state;
    const { sendMessage } = this.props;
    if (input) {
      sendMessage(input);
      this.setState({ input: "" });
    }
  };

  render() {
    const { input } = this.state;
    return (
      <form className="MessageForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="MessageForm-input"
          placeholder="Message here..."
          autoComplete="off"
          name="input"
          value={input}
          onChange={this.handleChange}
        />
        <button type="submit" className="MessageForm-submit">
          Send
        </button>
      </form>
    );
  }
}

export default MessageForm;
