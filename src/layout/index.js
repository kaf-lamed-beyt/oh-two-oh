import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import propTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;

// making use of react's propType module to validate
// the data that gets passed into the layout component
Layout.propTypes = {
  children: propTypes.node.isRequired,
};
