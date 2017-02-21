'use strict';

window.initializeScale = (function () {

  return function (element, step, startValue, cb) {
    var controlsValue = element.querySelector('.upload-resize-controls-value');
    var buttonDec = element.querySelector('.upload-resize-controls-button-dec');
    var buttonInc = element.querySelector('.upload-resize-controls-button-inc');


    scaleСalculation(startValue);

    buttonDec.addEventListener('click', onZoomOut);
    buttonInc.addEventListener('click', onZoomIn);

    function onZoomOut() {
      var value = parseInt(controlsValue.value, 10);
      if (value > step) {
        var percent = value - step;
        scaleСalculation(percent);
      }
    }

    function onZoomIn() {
      var value = parseInt(controlsValue.value, 10);
      if (value < startValue) {
        var percent = value + step;
        scaleСalculation(percent);
      }
    }

    function scaleСalculation(percent) {
      var scale = percent / 100;
      controlsValue.value = String(percent) + '%';
      if (typeof cb === 'function') {
        cb(scale);
      }
    }
  };

})();
