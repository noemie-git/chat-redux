/* eslint-disable no-alert */
// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { SET_MESSAGES } from '../actions';
import { SET_CHANNELS } from '../actions';
import { SELECT_CHANNEL } from '../actions';
import { SET_CURRENTUSER } from '../actions';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers
// eslint-disable-next-line no-unused-vars
const initialState = {
  messageList: [],
  channelList: ["general", "react", "paris"],
  currentUser: prompt("Enter your username") || `unnamed user${Math.floor(10 + (Math.random() * 90))}`,
  selectedChannel: 'general'
};

const reducers = combineReducers({
  export default function(state = null, action) {
    switch (action.type) {
      case SET_MESSAGES:
        return action.payload;
      case SET_CHANNELS:
        return action.payload;
      case SELECT_CHANNEL:
        return action.payload;
      case SET_CURRENTUSER:
        return action.payload;
      default:
        return state;
    }
  }
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
