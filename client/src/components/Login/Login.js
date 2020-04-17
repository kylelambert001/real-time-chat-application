import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: "",
      error: "",
    };
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.focus();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { nickname } = this.state;
    const { setUser, socket } = this.props;

    if (!nickname) {
      this.setError("Please add a username");
      return false;
    }

    socket.emit("VERIFY_USER", nickname, (response) => {
      if (!response.isUser) {
        this.setState({ nickname: "" });
        setUser(response.user);
      } else {
        this.setError("Username is already taken");
      }
    });
  };

  setError = (error) => {
    this.setState({ error });
  };

  render() {
    return (
      <div className="Login">
        <form className="Login-form" onSubmit={this.handleSubmit}>
          <label className="Login-label" htmlFor="nickname">
            What's your nickname?
          </label>
          <input
            type="text"
            className="Login-input"
            id="nickname"
            name="nickname"
            ref={this.textInput}
            onChange={this.handleChange}
            autoComplete="off"
          />
          <p className="Login-error">{this.state.error}</p>
        </form>
      </div>
    );
  }
}

export default Login;
