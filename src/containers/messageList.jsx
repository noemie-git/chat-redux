import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions';
import Message from '../components/message';

// eslint-disable-next-line react/prefer-stateless-function
class MessageList extends Component {
  componentWillMount() {
    fetchMessages(this.props.selectedChannel);
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
