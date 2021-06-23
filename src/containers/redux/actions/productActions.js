import { ActionTypes as action } from "../types/action-types";

// action that sets the initial state of the products
// or at leas renders the product list on the page/app
export const setProducts = (products) => {
  return {
    type: action.SET_PRODUCTS,
    products,
  };
};

// selectedProducts action
export const selectedProducts = (products) => {
  return {
    type: action.SELECTED_PRODUCT,
    products,
  };
};

// // remove selected products action
// export const removeSelectedProduct = (products) => {
//   return {
//     type: action.REMOVE_SELECTED_PRODUCT,
//     products,
//   };
// };
