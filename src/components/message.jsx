/* eslint-disable react/prefer-stateless-function */
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMessage } from '../actions';

class Message extends Component {
  componentWillMount() {
    createMessage(this.props.newMessage);
    // this.props.setMessages();
  }

  render() {
    return (
      <div>
        {this.props.author}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createMessage },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    message: state.message
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Message);
