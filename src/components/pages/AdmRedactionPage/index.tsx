import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import book from './book.svg';
import exit from './exit.svg';
import style from './adminred.module.scss';
import Vector from './Vector.svg';
import map from './map.png';

const AdminRed = () => (
  // const dispatch = useDispatch();
  // const [word] = useState('');
  // const [hasError, setHasError] = useState(false);

  // const submitHandler = () => {
  //   if (word.length > 3000) {
  //     setHasError(false);
  //   } else {
  //     setHasError(true);
  //   }
  // };
  // useEffect(() => {
  //   if (word.length > 3000) {
  //     setHasError(false);
  //   } else if (word.length > 0) {
  //     setHasError(true);
  //   }
  // }, [word]);

  // return (
  <Container className={style.container}>
    <NavLink to="/adminred" />
    <Row>
      <Col md={3}>
        <div className={style.profile}>
          <div className={style.block}>А</div>
          <div>
            <h1 className={style.text}>Дмитрий Н</h1>
            <p className={style.par}>Админ-меню</p>
          </div>
        </div>
        <div className={style.buttons}>
          <button type="button" className={style.add}>
            <img src={book} alt="book" className={style.img} />
            <p>Объявления</p>
          </button>
        </div>
        <div className={style.buttons}>
          <button type="button" className={style.exit}>
            <img src={exit} alt="exit" className={style.img} />
            <p>Выход</p>
          </button>
        </div>
      </Col>

      <Col md={9}>
        <div className={style.backBlock}>
          <button type="button" className={style.back}>
            <img src={Vector} className={style.img} alt="vector" />
            <p>Вернуться назад</p>
          </button>
        </div>
        <div className={style.articleBlock}>
          <h1 className={style.article}>Чепчик</h1>
          <button type="button" className={style.save}>
            <p>Сохранить</p>
          </button>
        </div>
        <div className={style.one}>
          <p className={style.character}>Название товара</p>
          <input type="text" className={style.articleName} />
        </div>
        <div className={style.categoryBlock}>
          <div>
            <p className={style.character}>Категория</p>
            <select className={style.category1}>
              <option>Одежда</option>
              <option>Спорт</option>
              <option>Мебель</option>
              <option>Техника</option>
              <option>Имущество</option>
            </select>
          </div>
          <div>
            <p className={style.character}>Стоимость</p>
            <input type="text" className={style.category2} />
          </div>
        </div>

        <div className={style.categoryBlock}>
          <div className={style.phone}>
            <p className={style.character}>Телефон</p>
            <input
              type="tel"
              placeholder="+7 (_ _ _) _ _ _ - _ _ - _ _"
              className={style.category1}
            />
          </div>
          <div className={style.phone}>
            <p className={style.character}>Дата публикации</p>
            <input type="date" className={style.category2} />
          </div>
        </div>
        <div className={style.opisanie}>
          <p className={style.character}>Описание</p>
          <input
            className={style.description}
            type="text"
            placeholder="Введите текст (до 3000 символов)"
          />
        </div>
        <div className={style.photo}>
          <p className={style.character}>Фотография</p>
          <input type="file" className={style.articleName} />
        </div>
        <div className={style.cart}>
          <p className={style.character}>Местоположение</p>
          <input type="text" placeholder="Введите адрес" className={style.articleName} />
        </div>
        <div className={style.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d70847.7122291897!2d44.01301882842602!3d56.29546803739852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1654188074330!5m2!1sru!2sru"
            width="600"
            height="450"
            loading="lazy"
            title="map"
            className={style.map}
          />
        </div>
      </Col>
    </Row>
  </Container>
);

export default AdminRed;
