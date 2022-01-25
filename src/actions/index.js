// TODO: add and export your own actions
export const FETCH_MESSAGES = "FETCH_MESSAGES";
export const CREATE_MESSAGE = "CREATE_MESSAGE";
export const CHANNEL_SELECTED = "CHANNEL_SELECTED";

export function fetchMessages(channel) {
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then(response => response.json());

  return {
    type: FETCH_MESSAGES,
    payload: promise
  };
}

export function createMessage(channel, author, content) {
  const newMessage = { author, content };

  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newMessage)
  }).then(r => r.json());

  return {
    type: CREATE_MESSAGE,
    payload: promise
  };
}

export function selectChannel(channel) {
  return {
    type: CHANNEL_SELECTED,
    payload: channel
  };
}
