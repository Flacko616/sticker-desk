import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import style from './adminpage.module.scss';
import book from './img/book.svg';
import exit from './img/exit.svg';
import menu from './img/menu.svg';
import left from './img/left.svg';
import right from './img/right.svg';
import triple from './img/triple.svg';
// eslint-disable-next-line react/jsx-indent
<NavLink to="/superadmin" />;

const AdminPage = () => (
  <Container className={style.container}>
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
        <div className={style.all}>
          <div>
            <h1 className={style.one}>Объявления</h1>
            <p className={style.sec}>Всего 45</p>
          </div>
          <div>
            <button type="button" className={style.plus}>
              <p>
                Добавить<strong>+</strong>
              </p>
            </button>
          </div>
        </div>
        <div className={style.line}>
          <input type="text" className={style.searcher} placeholder="Найти объявление" />
          <button type="button" className={style.filter}>
            <p>Фильтровать</p>
            <img src={menu} alt="menu" />
          </button>
          <div className={style.scroll}>
            <p>1—8 из 145</p>
            <button type="button" className={style.strelki}>
              <img src={left} alt="left" />
            </button>
            <button type="button" className={style.strelki}>
              <img src={right} alt="right" />
            </button>
          </div>
        </div>
        <Row className={style.wrap}>
          <Col md={3}>
            <h3 className={style.categori}>Название объявлений</h3>
          </Col>
          <Col md={3}>
            <h3 className={style.categori}>Категория</h3>
          </Col>
          <Col md={2}>
            <h3 className={style.categori}>Дата публикаций</h3>
          </Col>
          <Col md={1}>
            <h3 className={style.categori}>Публикация</h3>
          </Col>

          <div className={style.blockone}>
            <p className={style.name}>Чепчик</p>
            <p className={style.also}>Одежда</p>
            <p className={style.also}>8 апреля</p>
            <p className={style.also}>да</p>
            <button type="button" className={style.menu}>
              <img src={triple} alt="menu" />
            </button>
          </div>
          <div className={style.blockone}>
            <p className={style.name}>Самовар</p>
            <p className={style.also}>Для дома</p>
            <p className={style.also}>5 апреля</p>
            <p className={style.also}>да</p>
            <button type="button" className={style.menu}>
              <img src={triple} alt="menu" />
            </button>
          </div>
          <div className={style.blockone}>
            <p className={style.name}>Лада калина</p>
            <p className={style.also}>Автомобиль</p>
            <p className={style.also}>6 апреля</p>
            <p className={style.also}>да</p>
            <button type="button" className={style.menu}>
              <img src={triple} alt="menu" />
            </button>
          </div>
          <div className={style.blockone}>
            <p className={style.name}>Часы Ролекс</p>
            <p className={style.also}>Аксессуары</p>
            <p className={style.also}>7 апреля</p>
            <p className={style.also}>да</p>
            <button type="button" className={style.menu}>
              <img src={triple} alt="menu" />
            </button>
          </div>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default AdminPage;
