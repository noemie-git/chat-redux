// TODO: add and export your own actions
export const SET_MESSAGES = 'SET_MESSAGES';
export const SET_CHANNELS = 'SET_CHANNELS';
export const SET_CURRENTUSER = 'SET_CURRENTUSER';
export const SELECT_CHANNEL = 'SELECT_CHANNEL';

export function setMessages(messageList) {
  return {
    type: SET_MESSAGES,
    payload: messageList
  };
}

export function setChannels(channelList) {
  return {
    type: SET_CHANNELS,
    payload: channelList
  };
}

export function selectCity(selectedChannel) {
  return {
    type: SELECT_CHANNEL,
    payload: selectedChannel
  };
}

export function setCurrentUser(currentUser) {
  return {
    type: SET_CURRENTUSER,
    payload: currentUser
  };
}
