export const initialState = {
  basket: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.data],
      };
    case "REMOVE_FROM_BASKET":
      const modifiedBasket = [...state.basket].filter(
        ({ id }) => id !== action.data
      );
      return {
        ...state,
        basket: modifiedBasket,
      };
    default:
      return state;
  }
};

export default reducer;
