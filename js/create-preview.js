'use strict';

window.createPreview = (function () {

  return function (picture) {

    var block = document.querySelector('.pictures');
    var template = document.querySelector('#picture-template');
    var content = template.content.querySelector('.picture');

    var elementPicture = content.cloneNode(true);
    var pictureImg = elementPicture.children[0];
    var pictureLikes = elementPicture.querySelector('.picture-likes');
    var picturesComments = elementPicture.querySelector('.picture-comments');

    pictureImg.src = picture.url;
    pictureLikes.innerText = picture.likes;
    picturesComments.innerText = picture.comments.length;
    return block.appendChild(elementPicture);
  };
})();
