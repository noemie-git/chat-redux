/* eslint-disable no-alert */
// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import messagesReducers from "./reducers/messages_reducers";
import selectedChannelReducer from './reducers/selected_channel_reducer';

const identityReducer = (state = null) => state;

// State and reducers
// eslint-disable-next-line no-unused-vars
const initialState = {
  messages: [],
  channels: ["general", "react", "paris"],
  currentUser: prompt("Enter your username") || `unnamed user${Math.floor(10 + (Math.random() * 90))}`,
  selectedChannel: 'general'
};

const reducers = combineReducers({
  messages: messagesReducers,
  channels: identityReducer,
  currentUser: identityReducer,
  selectedChannel: selectedChannelReducer,
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
