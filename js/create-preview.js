'use strict';

window.createPreview = (function () {

  var block = document.querySelector('.pictures');
  var template = document.querySelector('#picture-template');
  var content = template.content.querySelector('.picture');

  return function (picture) {
    var elementPicture = content.cloneNode(true);
    var pictureImg = elementPicture.querySelector('img');
    var pictureLikes = elementPicture.querySelector('.picture-likes');
    var picturesComments = elementPicture.querySelector('.picture-comments');

    pictureImg.src = picture.url;
    pictureLikes.innerText = picture.likes;
    picturesComments.innerText = picture.comments.length;

    elementPicture.addEventListener('click', function (event) {
      event.preventDefault();
      window.showGalery(picture);
    });

    return block.appendChild(elementPicture);
  };
})();
