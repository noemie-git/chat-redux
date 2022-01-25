import React from 'react';
import MessageList from '../containers/messageList';

const App = (props) => {
  return (
    <div className="app">
      <MessageList messages={props.messages} />
    </div>
  );
};

export default App;
