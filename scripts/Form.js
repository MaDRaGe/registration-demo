class Form {
  constructor(settings) {
    this.formElement = document.querySelector(settings.selector);
    this.formElement.onsubmit = (event) => {
      event.preventDefault();
      this.submit();
    };
    this.inputList = settings.inputList;
    this.isValid = false;
  }

  validate = () => {
    let validInputCount = 0;
    for (let key in this.inputList) {
      // Validate inputs
      const input = this.inputList[key];
      input.validate();
      if (input.isValid) {
        validInputCount++;
      }
    }
    if (validInputCount === Object.keys(this.inputList).length) {
      // All inputs are valid
      this.isValid = true;
    } else {
      this.isValid = false;
    }
  };

  submit = () => {
    this.validate();
    if (!this.isValid) {
      return;
    }
    console.log(
      JSON.stringify({
        username: this.inputList.username.value,
        email: this.inputList.email.value,
        phone: this.inputList.phone.value,
        password: this.inputList.password.value,
      })
    );
  };
}

export default Form;
