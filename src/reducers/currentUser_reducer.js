export const SET_CURRENTUSER = 'SET_CURRENTUSER';

export default function (state, action) {
  if (state === undefined) {
    return [];
  }
  switch (action.type) {
    case SET_CURRENTUSER:
      return action.payload;
    default:
      return state;
  }
}
