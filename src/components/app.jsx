import React from 'react';
import MessageForm from '../containers/messageForm';
import MessageList from '../containers/messageList';

const App = () => {
  return (
    <div className="app">
      <MessageList />
      <MessageForm />
    </div>
  );
};

export default App;
