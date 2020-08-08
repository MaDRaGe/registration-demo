const InputValidateManager = (function () {
  let instance;
  function init() {
    return {
      validate: function (settings, value) {
        switch (settings.name) {
          case "regexp":
            return settings.regexp.test(value);
            break;
          case "equal":
            return value === settings.compareInput.value;
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
