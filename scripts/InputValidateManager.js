/*
  InputValidateManager

  @description - makes result of value validation
*/
const InputValidateManager = (function () {
  let instance;
  function init() {
    return {
      /*
        Validate input value using following rule
      */
      validate: function (rule, value) {
        switch (
          rule.name // Name of validation
        ) {
          case "regexp": // Regular expression
            return rule.regexp.test(value);
            break;
          case "equal": // Compare 2 values for equality
            return value === rule.compareInput.value && value;
            break;
          default:
            console.log("Invalid rule of validation!");
            break;
        }
      },
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = init();
      }
      return instance;
    },
  };
})();

export default InputValidateManager;
