import React from "react";
import Layout from "../../layout";
import { SearchBox } from "../components/Input";
import style from "./style/products-page.module.css";
import Banner from "../components/Banner";
import ProductCategories from "../components/categories";

const ProductPage = () => {
  return (
    <Layout>
      <section className={style.products_root}>
        <SearchBox defaultText="Search merchbuy" />
        <Banner />
        <ProductCategories />
      </section>
    </Layout>
  );
};

export default ProductPage;
