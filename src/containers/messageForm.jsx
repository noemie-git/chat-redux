import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMessage } from '../actions';

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
    event.preventDefault();
    this.props.createMessage(this.props.selectedChannel, this.props.currentUser, this.state.value);
    this.setState({ value: "" });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="simple_form send">
        <div className="send-form-control form-group">
          <input
            type="text"
            className="form-control string required"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button type="submit" className="btn btn-flat">
            <i className="fas fa-paper-plane" /> Send
          </button>
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createMessage }, dispatch);
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
