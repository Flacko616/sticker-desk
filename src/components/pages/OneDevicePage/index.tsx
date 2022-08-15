import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import bosch1 from './stiralka/bosch1.png';
import bosch2 from './stiralka/bosch2.png';
import bosch3 from './stiralka/bosch3.png';
import bosch4 from './stiralka/bosch4.png';
import map from './stiralka/map.png';
import samsung from './stiralka/samsung.png';
import indesit from './stiralka/indesit.png';
import Vector from './Vector.svg';
import style from './one.module.scss';
import glaz from '../ShopPage/DevicePage/glaz.svg';
import Title from './showphone';

// eslint-disable-next-line react/jsx-indent
<NavLink to="/device" />;

const OneDevicePage = () => (
  <Container className={style.container}>
    <Row>
      <Col md={8}>
        <NavLink to="/">
          <img src={Vector} className={style.img} alt="vector" />
        </NavLink>
        <div className={style.date}>
          <p>14 апреля 2022</p>
        </div>
        <div>
          <h1 className={style.bosch}>Стиральная машина Bosch</h1>
          <p className={style.vin}>WS-25645-253-55</p>
        </div>
        <div className={style.view}>
          <img src={glaz} alt="" /> 500
        </div>
        <div className={style.add}>
          <img src={bosch1} className={style.bosch1} alt="bosch1" />
          <img src={bosch2} className={style.bosch2} alt="bosch2" />
          <img src={bosch3} className={style.bosch3} alt="bosch3" />
          <img src={bosch4} className={style.bosch4} alt="bosch4" />
          <img src={bosch3} className={style.bosch3} alt="bosch3" />
        </div>
        <div>
          <h3 className={style.opisanie}>Описание:</h3>
          <p className={style.text}>
            Стиральная машина в отличном состянии, чистая, без накипи. <br />С машиной отдам новый
            шланг для подключения воды и упаковку средства против накипи.
          </p>
        </div>
        <div>
          <h3 className={style.geo}>
            <strong>Местоположение:</strong> г. Нижний Новгород
          </h3>
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
      <Col md={4}>
        <div>
          <h3 className={style.price}>22 500 P</h3>
        </div>
        <div>
          <Title />
        </div>
        <div>
          <p className={style.viewall}>Смотрите также:</p>
          <div className={style.one1}>
            <img src={indesit} alt="indesit" />
            <p className={style.text}>
              Стиральная машина <br /> <strong> Indesit</strong>
            </p>
          </div>
          <div className={style.second2}>
            <img src={samsung} alt="samsung" />
            <p className={style.text}>
              Стиральная машина <br /> <strong>Samsung</strong>
            </p>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
);

export default OneDevicePage;
