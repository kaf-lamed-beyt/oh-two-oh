import { ActionTypes as types } from "../types/action-types";
import { productsList } from "../../../utils/products-data.js";

const initialState = {
  products: productsList,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};

// selected product reducer
export const selectedProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SELECTED_PRODUCT:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

// add to cart reducer
export const addProductToCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT_TO_CART:
      return {
        ...state,
        products: state.products.map((product) => {
          product.id === action.id
            ? {
                ...product,
                isProductInCart: true,
              }
            : product;
          console.log(products);
        }),
      };
    default:
      return state;
  }
};

// delete product from cart
export const removeProductFromCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REMOVE_SELECTED_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) => {
          product.id === action.id
            ? {
                ...product,
                isProductInCart: false,
              }
            : product;
        }),
      };
    default:
      return state;
  }
};

// the reducer that increases the product quantity in the cart
export const increaseProdQtyReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREASE_PRODUCT_QUANTITY:
      return {
        ...state,
        products: products.state.map((product) => {
          product.id == action.id
            ? {
                ...product,
                stock: product.stock + 1,
              }
            : product;
        }),
      };
    default:
      return state;
  }
};

// reduce product quantity
export const reduceProdQtyReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REDUCE_PRODUCT_QUANTITY:
      return {
        ...state,
        products: products.state.map((product) => {
          product.id === action.id
            ? {
                ...product,
                // the ternary operation below, simply performs or translates to
                // this: if the product stock is not equal to 1 qty
                // reduce the product quantity, but if it is, leave it as that.
                stock: product.stock !== 1 ? product.stock - 1 : 1,
              }
            : product;
        }),
      };
    default:
      return state;
  }
};

// recently viewed product
export const recentlyViewedProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.RECENTLY_VIEWED_PRODUCT:
      return {
        ...state,
        payload: {
          recentlyViewed: true,
        },
      };
    default:
      return state;
  }
};
