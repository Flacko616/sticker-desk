/* eslint-disable object-curly-newline */
/* eslint-disable react/require-default-props */
import React from 'react';
import style from './input.module.scss';

type InputPropsType = {
  title: string;
  id: string;
  placeholder: string;
  // value: string;
  // setValue: string;
  type?: 'text' | 'password';
};

const Input = ({ title, id, placeholder, type = 'text' }: InputPropsType) => (
  <label className={style.wrapper} htmlFor={id}>
    <span>{title}</span>
    <input id={id} placeholder={placeholder} type={type} />
  </label>
);

export default Input;
