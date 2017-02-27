'use strict';

window.createPreview = (function () {
  var container = document.querySelector('.pictures');
  var template = document.querySelector('#picture-template');
  var root = template.content.querySelector('.picture');

  return function (picture) {
    var element = root.cloneNode(true);
    var image = element.querySelector('img');
    var likes = element.querySelector('.picture-likes');
    var comments = element.querySelector('.picture-comments');

    image.src = picture.url;
    likes.textContent = picture.likes;
    comments.textContent = picture.comments.length;

    element.addEventListener('click', function (event) {
      event.preventDefault();
      window.showGalery(picture);
    });

    return container.appendChild(element);
  };
})();
