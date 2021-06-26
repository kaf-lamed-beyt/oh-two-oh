import React from "react";
import style from "./style/product-dets.module.css";
import ProductHeader from "../components/productHeader";
import Image from "next/image";
import nikes from "../../../public/img/big-nike.png";
import FiveStars from "../components/FiveStars";
import user from "../../../public/img/user.png";
import { useSelector, useDispatch } from "react-redux";
import ProductFooter from "../components/productFooter";
import { selectedProducts } from "../redux/actions/productActions";

const ProductDetails = () => {
  const selectedProduct = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  console.log(name);

  const getSelectedProduct = () => {
    if (id && id !== "") {
      dispatch(selectedProducts(selectedProduct.id));
    }
  };

  React.useEffect(() => {
    getSelectedProduct();
  }, [id]);

  return (
    <React.Fragment>
      <ProductHeader />
      <section className={style.prod_details}>
        <div className={style.image_container}>
          <Image src={nikes} alt="product" placeholder="blur" />
        </div>
        <div className={style.product_info}>
          <p className={style.product_name}>NIKE Huararche 2019</p>
          <p className={style.description}>
            Get comfy and comfortable with the new 2019 designer sneaker for all
            your events
          </p>
          <p className={style.product_price}>
            ₦900 - ₦1,500<span>/Piece</span>
          </p>
        </div>
        <div className={style.product_description}>
          <p>Product Description</p>{" "}
          <span>
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.33331 1.66666L6.66665 7L1.33331 12.3333"
                stroke="#0B0C0E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
        <div className={style.reviews}>
          <div className={style.review_and_ratings}>
            <p>Review and Ratings</p>
            <p className={style.all}>See all</p>
          </div>
          <div>
            <FiveStars /> <span>3.0</span>
          </div>
          <p className={style.review_text}>
            This is the best product I have used in a long while and the size
            fits perfectly and I love the colors!!!!!
          </p>
          <div className={style.user_profile}>
            <div>
              <Image src={user} alt="reviewer" />
            </div>
            <p>Segun Arinze</p>
          </div>
        </div>
      </section>
      <ProductFooter />
    </React.Fragment>
  );
};

export default ProductDetails;
