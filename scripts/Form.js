class Form {
  /*
    Constructor

    @params:
      settings - used for creating form
        .selector - DOM-element selector of the form
        .inputList - inputs which are used in the form
  */
  constructor(settings) {
    // DOM-element of the form
    this.formElement = document.querySelector(settings.selector);
    this.formElement.onsubmit = (event) => {
      event.preventDefault();
      this.submit();
    };

    // List of inputs which are contained in form
    this.inputList = settings.inputList;

    // Form is valid
    this.isValid;
  }

  /*
    Validate form by validating inputs in inputList
  */
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

  /*
    Submit form data
  */
  submit = () => {
    this.validate();
    if (!this.isValid) {
      // Form is not valid
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
