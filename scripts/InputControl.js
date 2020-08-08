import InputValidateManager from "./InputValidateManager.js";

class InputControl {
  constructor(settings) {
    if (settings) {
      this.init(settings);
    }
  }

  init = (settings) => {
    this.inputControlElement = document.querySelector(`${settings.selector}`);
    this.inputFieldElement = this.inputControlElement.querySelector("input");
    this.alertElement = this.inputControlElement.querySelector(".input-alert");
    this.validateRule = settings.validateRule;
    if (settings.triggerInputToValidate) {
      this.triggerInputToValidate = settings.triggerInputToValidate;
    }
    this.inputFieldElement.oninput = () => {
      this.value = this.inputFieldElement.value.trim();
      this.validate();
      if (this.triggerInputToValidate) {
        this.triggerInputToValidate.validate();
      }
    };
    this.isValid = false;
  };

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
