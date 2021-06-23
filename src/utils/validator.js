const formValidator = (fullname, email, password, confirmPassword, alert) => {
  let errMsg;

  // targeting all form fields
  const fullnameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#pwd");
  const confirmPasswordInput = document.querySelector("#pwd_conf");

  if (fullname === "") {
    alert.error("Please type in your fullname");
    fullnameInput.focus();
    errMsg = false;
  } else if (!email) {
    alert.error("Please input your email address");
    emailInput.focus();
    errMsg = false;
  } else if (!email.includes("@")) {
    alert.error("Please enter a valid email address");
    emailInput.focus();
    errMsg = false;
  } else if (password === "") {
    alert.error("Please provide your password!");
    passwordInput.focus();
    errMsg = false;
  } else if (password.length <= 7) {
    alert.error("Your password must have 8 characters or greater");
    passwordInput.focus();
    errMsg = false;
  } else if (
    typeof password !== "undefined" &&
    typeof confirmPassword !== "undefined"
  ) {
    if (password != confirmPassword) {
      alert.error("Passwords don't match");
      confirmPasswordInput.focus();
      errMsg = false;
    }
  } else {
    errMsg = true;
  }
  return errMsg;
};

export default formValidator;
