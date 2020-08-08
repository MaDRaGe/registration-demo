import InputValidateManager from "./InputValidateManager.js";

class InputControl {
  constructor(settings) {
    if (settings) {
      this.init(settings);
    }
  }

  /*
    Init with the following settings

    @params:
      settings - used for creating InputControl
        .selector - DOM-element selector
        .validateRule - how to validate input value
        .triggerInputToValidate - the input which schould be validate when the current input is changed
  */
  init = (settings) => {
    // DOM-element of the input control
    this.inputControlElement = document.querySelector(`${settings.selector}`);

    // DOM-element of the input field
    this.inputFieldElement = this.inputControlElement.querySelector("input");
    this.inputFieldElement.oninput = () => {
      this.value = this.inputFieldElement.value.trim();
      this.validate();
      if (this.triggerInputToValidate) {
        this.triggerInputToValidate.validate();
      }
    };

    // DOM-element of the alert
    this.alertElement = this.inputControlElement.querySelector(".input-alert");

    // Rule which define how to validate input
    this.validateRule = settings.validateRule;

    if (settings.triggerInputToValidate) {
      // Input which should be validated when then input changed
      this.triggerInputToValidate = settings.triggerInputToValidate;
    }

    // Input is valid
    this.isValid;
  };

  /*
    Validate value in input field
  */
  validate = () => {
    clearTimeout(this.timeoutToAlert);
    this.value = this.inputFieldElement.value.trim();
    if (
      InputValidateManager.getInstance().validate(this.validateRule, this.value)
    ) {
      // Input value is valid
      this.timeoutToAlert = setTimeout(() => {
        this.hideAlertDanger();
        this.showAlertSuccess();
      }, 1000);
      this.isValid = true;
    } else {
      this.timeoutToAlert = setTimeout(() => {
        this.showAlertDanger();
        this.hideAlertSuccess();
      }, 1000);
      this.isValid = false;
    }
  };

  showAlertDanger = () => {
    this.alertElement.style.display = "block";
    this.inputFieldElement.classList.add("danger");
  };

  showAlertSuccess = () => {
    this.inputFieldElement.classList.add("success");
  };

  hideAlertSuccess = () => {
    this.inputFieldElement.classList.remove("success");
  };

  hideAlertDanger = () => {
    this.alertElement.style.display = "none";
    this.inputFieldElement.classList.remove("danger");
  };
}

export default InputControl;
