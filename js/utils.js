'use strict';

window.utils = (function () {
  var KEY_CODE_ENTER = 13;
  var KEY_CODE_ESC = 27;

  return {

    isEnterKey: function (event) {
      return event && event.keyCode === KEY_CODE_ENTER;
    },

    isEscKey: function (event) {
      return event && event.keyCode === KEY_CODE_ESC;
    }
  };
})();
