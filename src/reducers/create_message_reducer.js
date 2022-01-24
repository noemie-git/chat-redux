export default function (state, action) {
  if (state === undefined) {
    return [];
  }
  switch (action.type) {
    case 'ADD_MESSAGE':
      return action.payload;
    default:
      return state;
  }
}
