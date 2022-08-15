import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import style from './form.module.scss';

type FormPropsType = {
  title: string;
};

const Form: React.FC<FormPropsType> = ({ title, children }) => {
  const navigate = useNavigate();
  const handler = () => {
    navigate('/auth');
  };
  const handler2 = () => {
    navigate('/reg');
  };
  return (
    <div className={style.form}>
      <h1 className={style.title}>{title}</h1>
      <p className={style.par}>Создайте аккаунт</p>
      <div>
        <NavLink
          to="/reg"
          className={({ isActive }) => (isActive ? style.active : style.notactive)}>
          <button type="button" onClick={handler2} className={style.button1}>
            <p className={style.text}>Регистрация</p>
          </button>
        </NavLink>
        <NavLink
          to="/auth"
          className={({ isActive }) => (isActive ? style.active : style.notactive)}>
          <button type="button" onClick={handler} className={style.button2}>
            <p className={style.text}>Авторизация</p>
          </button>
        </NavLink>
      </div>

      <form className={style.body}>{children}</form>
    </div>
  );
};

export default Form;
