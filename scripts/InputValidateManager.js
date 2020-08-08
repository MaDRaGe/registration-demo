const InputValidateManager = (function () {
  let instance;
  function init() {
    return {
      validate: function (settings, value) {
        switch (
          settings.name // Name of validation
        ) {
          case "regexp": // Regular expression
            return settings.regexp.test(value);
            break;
          case "equal": // Compare 2 values for equality
            return value === settings.compareInput.value && value;
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
