import React from "react";
import CartHeader from "../components/CartHeader";
import style from "./style/cart.module.css";
import CartItem from "../components/cartItems";

const Cart = () => {
  return (
    <React.Fragment>
      <CartHeader />
      <section className={style.cart_area}>
        <CartItem />
      </section>
    </React.Fragment>
  );
};

export default Cart;
