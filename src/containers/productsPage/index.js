import React from "react";
import Layout from "../../layout";
import { Search } from "../components/Input";
import style from "./style/products-page.module.css";

const ProductPage = () => {
  return (
    <Layout>
      <section className={style.products_root}>
        <p>All products go here</p>
      </section>
    </Layout>
  );
};

export default ProductPage;
