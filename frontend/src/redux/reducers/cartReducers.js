import * as actionTypes from '../constants/cartConstants';

export const cartReducers = (state = {cartItems: [] }, action) => {
  switch(action.type) {
    case actionTypes.ADD_TO_CART:
      const item =action.payload;

      const existItem = state.cartItems.find((x) => x.product === item.product);
      if(existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) => x.product === existItem.product)
        }
      }

    default :
      return state
  }
}