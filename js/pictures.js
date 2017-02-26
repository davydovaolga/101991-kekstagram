'use strict';

(function () {
  var pictures = [];
  var blockPictures = document.querySelector('.pictures');
  var filters = document.querySelector('.filters');

  filters.addEventListener('click', onSelectSorting);

  filters.classList.remove('hidden');

  window.load('https://intensive-javascript-server-myophkugvq.now.sh/kekstagram/data', onLoad);

  function onSelectSorting(event) {
    var target = event.target;
    if (!target.classList.contains('filters-radio')) {
      return;
    }

    var sortName = target.value;
    var previews = sort(sortName, pictures);
    renderImages(previews);
  }

  function sort(name, items) {
    var copy = items.slice();

    switch (name) {
      case 'new':
        return sortByNew(copy);
      break;
      case 'discussed':
        return sortByDiscussed(copy);
      break;
      default:
        return copy;
    }
  }

  function sortByNew(data) {
    return data.sort(function () {
      return Math.random() > 0.5;
    }).slice(0, 10);
  }

  function sortByDiscussed(data) {
    return data.sort(function (a, b) {
      return b.comments.length - a.comments.length;
    });
  }

  function onLoad(event) {
    var target = event.target;
    pictures = target.response;
    if (target.status !== 200) {
      document.write(target.status + ': ' + target.statusText);
      return;
    }
    renderImages(pictures);
  }

  function renderImages(pic) {
    blockPictures.innerHTML = '';

    var fragment = document.createDocumentFragment();
    pic.forEach(function (picture) {
      var preview = window.createPreview(picture);
      fragment.appendChild(preview);
    });
    blockPictures.appendChild(fragment);
  }

})();
