import React from "react";
import style from "./style/producthead.module.css";
import Link from "next/link";

const ProductHeader = () => {
  return (
    <div className={style.header}>
      <div className={style.caret_right}>
        <div>
          <Link href="/">
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
      <div className={style.head_title}>
        <p>Details</p>
      </div>
      <div className={style.extras}>
        <div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.3333 11.3333L14.6667 14.6667L11.3333 11.3333ZM13 7.16666C13 10.3883 10.3883 13 7.16666 13C3.945 13 1.33333 10.3883 1.33333 7.16666C1.33333 3.945 3.945 1.33333 7.16666 1.33333C10.3883 1.33333 13 3.945 13 7.16666Z"
              stroke="#2E4457"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <Link href="/cart">
          <div>
            <div className={style.cart_item}>
              <p>6</p>
            </div>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.95086 11.6052C4.50376 11.6052 4.95675 12.0678 4.95675 12.6393C4.95675 13.204 4.50376 13.6666 3.95086 13.6666C3.3913 13.6666 2.93832 13.204 2.93832 12.6393C2.93832 12.0678 3.3913 11.6052 3.95086 11.6052ZM11.445 11.6052C11.9979 11.6052 12.4509 12.0678 12.4509 12.6393C12.4509 13.204 11.9979 13.6666 11.445 13.6666C10.8855 13.6666 10.4325 13.204 10.4325 12.6393C10.4325 12.0678 10.8855 11.6052 11.445 11.6052ZM0.852138 0.333393L0.920025 0.339139L2.50879 0.58338C2.73528 0.624881 2.90181 0.814696 2.9218 1.04601L3.04837 2.56997C3.06835 2.78836 3.24155 2.95164 3.45472 2.95164H12.451C12.8574 2.95164 13.1238 3.09451 13.3903 3.40747C13.6568 3.72043 13.7034 4.16945 13.6434 4.57697L13.0106 9.04C12.8907 9.89791 12.1713 10.5299 11.3252 10.5299H4.05758C3.1716 10.5299 2.43884 9.83668 2.36556 8.93863L1.75271 1.52225L0.746826 1.34536C0.480367 1.29774 0.293846 1.0324 0.340476 0.760269C0.387107 0.48201 0.646904 0.297638 0.920025 0.339139L0.852138 0.333393ZM10.2594 5.46822H8.41418C8.1344 5.46822 7.91457 5.69273 7.91457 5.97847C7.91457 6.25741 8.1344 6.48873 8.41418 6.48873H10.2594C10.5392 6.48873 10.759 6.25741 10.759 5.97847C10.759 5.69273 10.5392 5.46822 10.2594 5.46822Z"
                fill="#2E4457"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductHeader;
