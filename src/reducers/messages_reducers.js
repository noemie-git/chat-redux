import { FETCH_MESSAGES, CREATE_MESSAGE, CHANNEL_SELECTED } from "../actions";

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_MESSAGES: {
      return action.payload.messages;
    }
    case CREATE_MESSAGE: {
      const newMessage = state.slice(0);
      newMessage.push(action.payload);
      return newMessage;
    }
    case CHANNEL_SELECTED: {
      return [];
    }
    default:
      return state;
  }
}
