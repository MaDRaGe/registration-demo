import Form from "./Form.js";
import InputControl from "./InputControl.js";

const username = new InputControl({
  selector: "#input-control-username",
  validateRule: {
    name: "regexp",
    regexp: /^[A-Z]{1,}[a-zA-Z]{2,}$/,
  },
});
const email = new InputControl({
  selector: "#input-control-email",
  validateRule: {
    name: "regexp",
    regexp: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
  },
});
const phone = new InputControl({
  selector: "#input-control-phone",
  validateRule: {
    name: "regexp",
    regexp: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
  },
});
const password = new InputControl();
const confirmPassword = new InputControl();

password.init({
  selector: "#input-control-password",
  validateRule: {
    name: "regexp",
    regexp: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
  },
  triggerInputToValidate: confirmPassword,
});
confirmPassword.init({
  selector: "#input-control-confirmPassword",
  validateRule: {
    name: "equal",
    compareInput: password,
  },
});

const registerForm = new Form({
  selector: "#register-form",
  inputList: {
    username,
    email,
    phone,
    password,
    confirmPassword,
  },
});
