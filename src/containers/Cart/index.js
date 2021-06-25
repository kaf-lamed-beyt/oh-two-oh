import React from "react";
import CartHeader from "../components/CartHeader";
import style from "./style/cart.module.css";
import CartItem from "../components/cartItems";
import Button from "../components/Buttons";
import Image from "next/image";
import { useSelector } from "react-redux";

const Cart = () => {
  const recentlyProducts = useSelector((state) => state.allProducts.products);

  const recentProds = recentlyProducts.map((recent, id) => {
    const {
      name,
      price,
      stock,
      image: { height, width, src },
    } = recent;

    return (
      <div className="prod-card" key={id}>
        <div className="product-image">
          <Image src={src} height={height} width={width} alt={name} />
        </div>
        <p className="product-name">{name}</p>
        <p className="product-price">{price}</p>
        <p className="product-qty">MOQ {stock} (pieces) </p>
      </div>
    );
  });

  return (
    <React.Fragment>
      <CartHeader />
      <section className={style.cart_area}>
        <CartItem />
        <section className={style.checkout}>
          <div className={style.subtotal}>
            <p>Subtotal</p>
            <p>₦25,000.85</p>
          </div>
          <div className={style.total}>
            <p>Total</p>
            <p>₦25,000.85</p>
          </div>
          <Button className="cart-btn-primary">Checkout</Button>
        </section>
        <section className={style.recently_viewed}>
          <div className={style.head}>
            <p>Recently viewed</p>
            <p>View all</p>
          </div>
          <div className={style.recent}>recent products</div>
        </section>
      </section>
    </React.Fragment>
  );
};

export default Cart;
