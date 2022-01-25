import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions';
import Message from '../components/message';

// eslint-disable-next-line react/prefer-stateless-function
const messages = [
  {
    author: "anonymous92",
    content: "Hello world!",
    created_at: "2017-09-26T23:03:16.365Z"
  },
  {
    author: "anonymous77",
    content: "My name is anonymous77",
    created_at: "2017-09-26T23:03:21.194Z"
  }
];

class MessageList extends Component {
  componentWillMount() {
    fetchMessages(messages);
    // this.props.setMessages();
  }

  render() {
    return (
      <Message />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
