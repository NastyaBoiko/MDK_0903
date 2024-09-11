let pictures = [
  'img/tomato-red-large.jpg',
  'img/tomato-yellow-large.jpg',
  'img/tomato-strange-large.jpg'
];


let previews = document.querySelectorAll('.gallery__picture-preview');
// console.log(previews);
let fullPhoto = document.querySelector('.full-picture');
// console.log(fullPhoto);

let addPreviewClickHandler = function (preview, photoLink) {
  preview.addEventListener('click', function () {
    fullPhoto.src = photoLink;
  });
};

for (let i = 0; i < previews.length; i++) {
  addPreviewClickHandler(previews[i], pictures[i]);
}


/* Техническое задание

Мяу! Нужно оживить галерею с фотографиями товаров.

В галерее есть миниатюры (элементы с классом 'gallery__picture-preview') и большое изображение (класс 'full-picture').

После клика по превью большая фотография должна поменяться. Большое изображение должно быть таким же, как и в миниатюре, только большего размера.

Пути к полноразмерным фотографиям находятся в массиве pictures. Порядок элементов в массиве такой же, как и порядок миниатюр в разметке.

*/
