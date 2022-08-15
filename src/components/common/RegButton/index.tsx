import React from 'react';
import style from './RegButton.module.scss';

type ButtonPropsType = {
  title: string;
  // onClick: () => void;
};

const Button = ({ title }: ButtonPropsType) => (
  <button type="submit" className={style.knopka}>
    <p className={style.text}>{title}</p>
  </button>
);

export default Button;
