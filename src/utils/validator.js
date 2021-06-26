const formValidator = (isProductInCart, alert) => {
  let errMsg;

  if (isProductInCart) {
    alert.success("product added to cart successfully");
    errMsg = false;
  } else {
    errMsg = true;
  }
  return errMsg;
};

export default formValidator;
