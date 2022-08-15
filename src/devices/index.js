import stiralka from '../img/add/stiralka.png';
import shapka from '../img/add/shapka.png';
import tolstovka from '../img/add/tolstovka.png';
import velik from '../img/add/velik.png';
import kofe from '../img/add/kofe.png';
import naushniki from '../img/add/naushniki.png';
import sumka from '../img/add/sumka.png';
import snowboard from '../img/add/snowboard.png';
import botinki from '../img/add/botinki.png';

const data = {
  productItems: [
    {
      id: 1,
      type: 'Техника',
      name: 'Стиральная машина Bosch',
      text: 'Машина в хорошем состоянии. Возможен разумный торг. В комплекте отдадим шланг.',
      price: '22 500',
      img: stiralka,
    },
    {
      id: 2,
      name: 'Шапочка',
      type: 'Одежда',
      text: 'Шапочка детская на ребенка 7-10 лет. 60% шерсть, 40% вискоза',
      price: '500',
      img: shapka,
    },
    {
      id: 3,
      type: 'Одежда',
      name: 'Толстовка',
      text: 'Новая толстовка белая без принта с карманом и капюшоном',
      price: '2 000',
      img: tolstovka,
    },
    {
      id: 4,
      name: 'Велосипед',
      type: 'Спорт',
      text: 'Велосипед в отличном состоянии. Ретро-стиль. Гаражное хранение',
      price: '28 000',
      img: velik,
    },
    {
      id: 5,
      type: 'Техника',
      name: 'Наушники',
      text: 'Наушники почти новые. Срок эксплуатации - меньше месяца',
      price: '4 500',
      img: naushniki,
    },
    {
      id: 6,
      name: 'Кофемашина',
      type: 'Техника',
      text: 'Кофемашина Lenovo с капучинатором. Пакет кофе 1 кг. - в подарок',
      price: '8 500',
      img: kofe,
    },
    {
      id: 7,
      type: 'Одежда',
      name: 'Сумка женская',
      text: 'Итальянска сумка из натуральной кожи. Качественная фурнитура, состояние новой',
      price: '7 500',
      img: sumka,
    },
    {
      id: 8,
      type: 'Одежда',
      name: 'Ботинки мужские зимние',
      text: 'Ботинки почти новые, качественные, теплые.Носили 2 недели',
      price: '8 000',
      img: botinki,
    },
    {
      id: 9,
      type: 'Спорт',
      name: 'Доска для сноубординга',
      text: 'Качественная красивая доска с креплениями.Состояние идеальное.',
      price: '48 500',
      img: snowboard,
    }
  ],
};

export default data;
