'use strict';

window.initializeFilters = (function () {
  var filterActive = 'none';
  var cb = null;

  function onSelectFilter(event) {
    var target = event.target;
    selectFilter(target);
  }

  function onSelectFilterByEnter(event) {
    var target = event.target;
    if (window.utils.isEnterKey(event)) {
      selectFilter(target);
    }
  }

  function selectFilter(nextFilter) {
    if (!nextFilter.classList.contains('upload-filter-preview')) {
      return;
    }

    var filterNew = nextFilter.parentNode.previousElementSibling;
    if (typeof cb === 'function') {
      cb(filterNew.value, filterActive.value);
    }

    filterActive = filterNew;
    filterActive.checked = true;
  }

  return function (element, inputCb) {
    cb = inputCb;
    element.addEventListener('click', onSelectFilter);
    element.addEventListener('keydown', onSelectFilterByEnter);
  };
})();
