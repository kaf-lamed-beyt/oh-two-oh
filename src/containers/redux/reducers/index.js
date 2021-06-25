import { combineReducers } from "redux";
import {
  addProductToCartReducer,
  productReducer,
  recentlyViewedProductReducer,
  increaseProdQtyReducer,
  reduceProdQtyReducer,
  removeProductFromCartReducer,
  selectedProductReducer,
} from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  selectedProduct: selectedProductReducer,
  productsInCart: addProductToCartReducer,
  deleteProduct: removeProductFromCartReducer,
  increaseQty: increaseProdQtyReducer,
  reduceQty: reduceProdQtyReducer,
  recentlyViewed: recentlyViewedProductReducer,
});

export default reducers;
