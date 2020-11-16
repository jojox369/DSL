export const UserReducer = (state, action) => {
  switch (action.type) {
    case 'setUser':
      return {
        ...state,
        id: action.payload.user.id,
        email: action.payload.user.username,
        name: action.payload.user.name,
      };
      break;
    default:
      return state;
  }
};
