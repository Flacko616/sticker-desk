import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import telezhka from './telezhka.png';
import style from './ShopPage.module.scss';
import repeat from './repeat.svg';
import DeviceList from './DevicePage';
import data from '../../../devices/index.js';

const ShopPage = () => (
  <Container className={style.AddDesk}>
    <Row>
      <Col md={5} className={style.block}>
        <p className={style.head}>Доска объявлений</p>
        <p className={style.par}>
          Находи тысячи разнообразных товаров и услуг
          <br /> от продавцов со всей страны
          <br /> безопасные расчеты быстрый сервис
        </p>
      </Col>
      <Col md={7}>
        <img src={telezhka} alt="telega" className={style.img} />
      </Col>
    </Row>
    <div className={style.navigate}>
      <button type="button" className={style.all}>
        <p>Вся доска</p>
      </button>
      <button type="button" className={style.auto}>
        <p>Автомобили</p>
      </button>
      <NavLink to="/error">
        <button type="button" className={style.also}>
          <p>Аксессуары</p>
        </button>
      </NavLink>
      <NavLink to="/error">
        <button type="button" className={style.also}>
          <p>Мебель</p>
        </button>
      </NavLink>
      <NavLink to="/error">
        <button type="button" className={style.also}>
          <p>Одежда</p>
        </button>
      </NavLink>
      <NavLink to="/error">
        <button type="button" className={style.also}>
          <p>Спорт</p>
        </button>
      </NavLink>
      <NavLink to="/error">
        <button type="button" className={style.also}>
          <p>Техника</p>
        </button>
      </NavLink>
      <NavLink to="/error">
        <button type="button" className={style.also2}>
          <p>Товары для дома</p>
        </button>
      </NavLink>
    </div>
    <Row>
      <h1 className={style.view}>Вся лента</h1>
      <Col md={4}>
        <NavLink to="/device">
          <DeviceList
            id="0"
            type={data.productItems[0].type}
            name={data.productItems[0].name}
            text={data.productItems[0].text}
            price={data.productItems[0].price}
            img={data.productItems[0].img}
          />
        </NavLink>
        {/* <DeviceList
          id="0"
          type={data.productItems[0].type}
          name={data.productItems[0].name}
          text={data.productItems[0].text}
          price={data.productItems[0].price}
          img={data.productItems[0].img}
        /> */}
        <DeviceList
          id="3"
          type={data.productItems[3].type}
          name={data.productItems[3].name}
          text={data.productItems[3].text}
          price={data.productItems[3].price}
          img={data.productItems[3].img}
        />
        <DeviceList
          id="6"
          type={data.productItems[6].type}
          name={data.productItems[6].name}
          text={data.productItems[6].text}
          price={data.productItems[6].price}
          img={data.productItems[6].img}
        />
      </Col>
      <Col md={4}>
        <DeviceList
          id="1"
          type={data.productItems[1].type}
          name={data.productItems[1].name}
          text={data.productItems[1].text}
          price={data.productItems[1].price}
          img={data.productItems[1].img}
        />
        <DeviceList
          id="4"
          type={data.productItems[4].type}
          name={data.productItems[4].name}
          text={data.productItems[4].text}
          price={data.productItems[4].price}
          img={data.productItems[4].img}
        />
        <DeviceList
          id="7"
          type={data.productItems[7].type}
          name={data.productItems[7].name}
          text={data.productItems[7].text}
          price={data.productItems[7].price}
          img={data.productItems[7].img}
        />
      </Col>
      <Col md={4}>
        <DeviceList
          id="2"
          type={data.productItems[2].type}
          name={data.productItems[2].name}
          text={data.productItems[2].text}
          price={data.productItems[2].price}
          img={data.productItems[2].img}
        />
        <DeviceList
          id="5"
          type={data.productItems[5].type}
          name={data.productItems[5].name}
          text={data.productItems[5].text}
          price={data.productItems[5].price}
          img={data.productItems[5].img}
        />
        <DeviceList
          id="8"
          type={data.productItems[8].type}
          name={data.productItems[8].name}
          text={data.productItems[8].text}
          price={data.productItems[8].price}
          img={data.productItems[8].img}
        />
      </Col>
    </Row>
    <div className={style.download}>
      <button type="button" className={style.knopka}>
        <img src={repeat} alt="repeat" />
        <p className={style.buttontext}>Загрузить еще</p>
      </button>
    </div>
  </Container>
);

export default ShopPage;
