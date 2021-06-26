import React from "react";
import style from "./style/cart-item.module.css";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import {
  removeProductFromCart,
  increaseProductQty,
  reduceProductQty,
} from "../../redux/actions/productActions";

const CartItem = () => {
  const cartItems = useSelector((state) => state.productsInCart.products);

  const dispatch = useDispatch();

  const mappedCartItems = cartItems.map((product, id) => {
    const {
      name,
      image: { src, height, width },
      price,
      stock,
    } = product;

    return (
      <div className={style.cart_item} key={id}>
        <div className={style.sect_one}>
          <div className={style.img_container}>
            <Image src={src} alt={name} height={height} width={width} />
          </div>
          <div className={style.product_details}>
            <p className={style.product_name}>{name}</p>
            <p className={style.product_price}>{price}</p>
          </div>
        </div>
        <div className={style.sect_two}>
          <div className={style.delete}>
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => dispatch(removeProductFromCart())}
            >
              <path
                d="M15.9391 6.69712C16.1384 6.69712 16.3193 6.78412 16.4623 6.93112C16.5955 7.08811 16.6626 7.28311 16.6432 7.48911C16.6432 7.55711 16.1102 14.297 15.8058 17.134C15.6152 18.875 14.4929 19.932 12.8094 19.961C11.5149 19.99 10.2496 20 9.00379 20C7.68112 20 6.38763 19.99 5.13206 19.961C3.50498 19.922 2.38168 18.846 2.20079 17.134C1.88763 14.287 1.36439 7.55711 1.35467 7.48911C1.34494 7.28311 1.41108 7.08811 1.54529 6.93112C1.67756 6.78412 1.86818 6.69712 2.06852 6.69712H15.9391ZM11.0647 -1.52588e-05C11.9488 -1.52588e-05 12.7385 0.616979 12.967 1.49697L13.1304 2.22696C13.2627 2.82196 13.7781 3.24295 14.3714 3.24295H17.2871C17.6761 3.24295 18 3.56595 18 3.97694V4.35694C18 4.75794 17.6761 5.09093 17.2871 5.09093H0.713853C0.32386 5.09093 0 4.75794 0 4.35694V3.97694C0 3.56595 0.32386 3.24295 0.713853 3.24295H3.62957C4.22185 3.24295 4.7373 2.82196 4.87054 2.22796L5.02323 1.54597C5.26054 0.616979 6.0415 -1.52588e-05 6.93527 -1.52588e-05H11.0647Z"
                fill="#E25959"
              />
            </svg>
            <p>Delete</p>
          </div>
          <div className={style.cartItem_controllers}>
            <div
              className={style.reduce}
              onClick={() => dispatch(reduceProductQty())}
            >
              <p> - </p>
            </div>
            <p className={style.total_product}>{stock}</p>
            <div
              className={style.increase}
              onClick={() => dispatch(increaseProductQty())}
            >
              <p> + </p>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return mappedCartItems;
};

export default CartItem;
