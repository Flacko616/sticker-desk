import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './error.module.scss';
import error from './error.png';

const ErrorPage = () => (
  <div className={style.page}>
    <div className={style.text}>
      <p className={style.head}>Упс кажется на эту страницу прилег котик!</p>
      <p className={style.error}>Ошибка 404</p>
      <p className={style.par}>Мы уже разбираемся, почему так получилось, скоро все починим.</p>
    </div>
    <NavLink to="/error" />
    <div>
      <img src={error} alt="kotik" className={style.img} />
    </div>
  </div>
);

export default ErrorPage;
