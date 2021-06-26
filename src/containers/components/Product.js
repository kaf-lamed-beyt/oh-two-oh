import React from "react";
import Image from "next/image";

import { useSelector } from "react-redux";

const Product = () => {
  const products = useSelector((state) => state.allProducts.products);

  const mappedProducts = products.map((product, id) => {
    const {
      name,
      image: { blurDataURL, height, width, src },
      price,
      stock,
    } = product;
    return (
      <div className="prod-card" key={id}>
        <div className="product-image">
          <Image
            src={src}
            height={height}
            width={width}
            placeholder="blur"
            blurDataURL={blurDataURL}
            alt={name}
          />
        </div>
        <p className="product-name">{name}</p>
        <p className="product-price">{price}</p>
        <p className="product-qty">MOQ {stock} (pieces) </p>
      </div>
    );
  });
  return mappedProducts;
};

export default Product;
