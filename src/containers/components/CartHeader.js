import React from "react";
import style from "../components/productHeader/style/producthead.module.css";
import Link from "next/link";

const CartHeader = () => {
  return (
    <div className={style.header}>
      <div className={style.caret_right}>
        <div>
          <Link href="/product">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 15L6 9L12 3"
                stroke="#0B0C0E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className={`cart-title ${style.head_title}`}>
        <p>Cart</p>
      </div>
    </div>
  );
};

export default CartHeader;
