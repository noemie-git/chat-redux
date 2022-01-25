import { FETCH_MESSAGE, CREATE_MESSAGE } from "../actions";

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_MESSAGE: {
      return action.payload.messages;
    }
    case CREATE_MESSAGE: {
      return action.payload;
    }
    default:
      return state;
  }
}
