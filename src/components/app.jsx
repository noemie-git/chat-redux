import React from 'react';
import MessageForm from '../containers/messageForm';
import MessageList from '../containers/messageList';

const App = (props) => {
  return (
    <div className="app">
      <MessageList messages={props.messages} />
      <MessageForm />
    </div>
  );
};

export default App;
