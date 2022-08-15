import React from 'react';
import Input from '../../common/Form/Input';
import Button from '../../common/RegButton';
import style from './recover.module.scss';

const Recorve = () => (
  <div className={style.block}>
    <h1 className={style.header}>Восстановление пароля</h1>
    <div className={style.path}>
      <div className={style.spanwrap}>
        <span className={style.span}>1</span>
        <p className={style.par}>Проверка почты</p>
      </div>
      <div className={style.spanwrap2}>
        <span className={style.span}>2</span>
        <p className={style.par}>Восстановление пароля</p>
      </div>
    </div>
    <Input title="" id="email" placeholder="Email" />
    <Button title="Высслать ссылку" />

    <p className={style.text}>
      Выполняя вход в сервис, вы подтверждаете, что <br />
      ознакомились с документами
      <a href="*">
        «политика <br />
        конфидициальности»
      </a>
      и
      <a href="*">
        «согласие на обработку
        <br />
        персональных данных»
      </a>
      и <a href="*">«пользовательское соглашение»</a>
      <br />и согласны с ними.
    </p>
  </div>
);

export default Recorve;
