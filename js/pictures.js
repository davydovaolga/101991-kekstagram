'use strict';

(function () {
  var pictures = [];
  var blockPictures = document.querySelector('.pictures');
  var tmplPicture = document.querySelector('#picture-template');
  var contentPicture = tmplPicture.content.querySelector('.picture');
  var filters = document.querySelector('.filters');
  var popularFilter = document.querySelector('#filter-popular');
  var newFilter = document.querySelector('#filter-new');
  var discussedFilter = document.querySelector('#filter-discussed');

  filters.classList.remove('hidden');

  function onLoad(event) {
    var target = event.target;
    pictures = target.response;
    if (target.status !== 200) {
      document.write(target.status + ': ' + target.statusText);
      return;
    }
    renderImages(pictures);
  }

  window.load('https://intensive-javascript-server-myophkugvq.now.sh/kekstagram/data', onLoad);

  function renderImages(pic) {
    blockPictures.innerHTML = '';

    pic.forEach(function (picture) {
      var elementPicture = contentPicture.cloneNode(true);
      var pictureImg = elementPicture.children[0];
      var pictureLikes = elementPicture.querySelector('.picture-likes');
      var picturesComments = elementPicture.querySelector('.picture-comments');

      pictureImg.src = picture.url;
      pictureLikes.innerText = picture.likes;
      picturesComments.innerText = picture.comments.length;
      blockPictures.appendChild(elementPicture);

      elementPicture.addEventListener('click', function (event) {
        event.preventDefault();
        window.showGalery(picture);
      });
    });
  }

  popularFilter.addEventListener('click', function () {
    renderImages(pictures);
  });

  newFilter.addEventListener('click', function () {
    var sortedImage = pictures.slice().sort().slice(0, 10);
    renderImages(sortedImage);
  });

  discussedFilter.addEventListener('click', function () {
    var sortedImage = pictures.slice().sort(function (left, right) {
      return right.comments.length - left.comments.length;
    });
    renderImages(sortedImage);
  });
})();
