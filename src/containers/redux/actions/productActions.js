import { ActionTypes as types } from "../types/action-types";

// action that sets the initial state of the products
// or at leas renders the product list on the page/app
export const setProducts = (products) => {
  return {
    type: types.SET_PRODUCTS,
    products,
  };
};

// selectedProducts action
export const selectedProducts = (products) => {
  return {
    type: types.SELECTED_PRODUCT,
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

// add to cart action
export const addProductToCart = (id) => {
  return {
    type: types.ADD_PRODUCT_TO_CART,
    id,
  };
};

// remove or delete product from cart
export const removeProductFromCart = (id) => {
  return {
    type: types.REMOVE_PRODUCT_FROM_CART,
    id,
  };
};

// recently viewed product
export const recentlyViewedProducts = (products) => {
  return {
    type: types.RECENTLY_VIEWED_PRODUCT,
    products,
  };
};

// increase product quantity in cart
export const increaseProductQty = (id) => {
  return {
    type: types.INCREASE_PRODUCT_QUANTITY,
    id,
  };
};

// reduce product quantity in cart
export const reduceProductQty = (id) => {
  return {
    type: types.REDUCE_PRODUCT_QUANTITY,
    id,
  };
};
