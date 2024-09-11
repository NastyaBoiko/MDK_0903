var assortmentData = [
  {
    inStock: true,
    isHit: false
  },
  {
    inStock: false,
    isHit: false
  },
  {
    inStock: true,
    isHit: true
  },
  {
    inStock: true,
    isHit: false
  },
  {
    inStock: false,
    isHit: false
  }
];

function updateCards(data) {
  let goods = document.querySelectorAll(".good");

  for (let i = 0; i < data.length; i++) {
    goodClasses = goods[i].classList;
    data[i].isHit ? goodClasses.add('good--hit') : "";
    data[i].inStock ? goodClasses.add('good--available') : goodClasses.add('good--unavailable');
  }

}

updateCards(assortmentData);

/* Техническое задание

Мяу! На сайте магазина мороженого надо отображать актуальное состояние товаров: «в наличии», «нет в наличии», «хит».

Данные по продуктам хранятся в массиве с объектами assortmentData, каждый объект соответствует одному товару и содержит свойства:

- inStock. Если значение true — мороженое в наличии, если false — товара в наличии нет.
- isHit. Если значение true — мороженое самое популярное среди покупателей.

Каждому состоянию товара соответствует специальный класс:

Товар в наличии — good--available.
Недоступный товар — good--unavailable.
Хит продаж — good--hit.

Оформи код в виде функции updateCards, которая принимает на вход массив с данными. Вызови её, передав assortmentData.

*/
