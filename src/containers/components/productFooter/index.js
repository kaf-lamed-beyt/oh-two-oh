import React from "react";
import Button from "../Buttons";
import style from "./style/productfooter.module.css";

const ProductFooter = () => {
  return (
    <div className={style.root}>
      <Button className="btn-primary-product">Add to cart</Button>
      <Button className="btn-outline-product">Wishlist</Button>
    </div>
  );
};

export default ProductFooter;
