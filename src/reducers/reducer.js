export const Reducer = (state, action) => {
  switch (action.type) {
    case 'setList':
      return [
        ...state,
        {
          name: action.payload.name,
          price: action.payload.price,
          amount: action.payload.amount,
        },
      ];

    default:
      return state;
  }
};
