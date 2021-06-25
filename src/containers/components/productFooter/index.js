import React from "react";
import Button from "../Buttons";
import style from "./style/productfooter.module.css";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/actions/productActions";

const ProductFooter = () => {
  const dispatch = useDispatch();

  return (
    <div className={style.root}>
      <Button
        className="btn-primary-product"
        onClick={() => dispatch(addProductToCart())}
      >
        Add to cart
      </Button>
      <Button className="btn-outline-product">Wishlist</Button>
    </div>
  );
};

export default ProductFooter;
