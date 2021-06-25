import { ActionTypes } from "../types/action-types";
import { productsList } from "../../../utils/products-data.js";

const initialState = {
  products: productsList,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
