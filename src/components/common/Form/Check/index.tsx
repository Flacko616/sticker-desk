import React from 'react';
import style from './check.module.scss';

const Check = () => (
  <div className={style.container}>
    <p className={style.text}>Принимаю условия</p>
    <a href="*" className={style.link}>
      Пользовательского соглашения
    </a>
    <input type="checkbox" className={style.input} />
    {/* <span className={style.checkmark} /> */}
  </div>
);

export default Check;
