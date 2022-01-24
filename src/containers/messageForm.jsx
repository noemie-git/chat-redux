import React, { Component } from "react";

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    // eslint-disable-next-line no-alert
    alert(`Your message was sent: ${this.state.value}`);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="label">Type your message here...
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <button type="submit" className="btn btn-danger">Send</button>
      </form>
    );
  }
}

export default MessageForm;
