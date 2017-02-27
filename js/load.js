'use strict';

window.load = (function () {

  return function (url, cb) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', cb);
    xhr.responseType = 'json';
    xhr.open('GET', url);
    xhr.send();
  };
})();
