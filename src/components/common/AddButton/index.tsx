import React from 'react';
import Button from 'react-bootstrap/Button';
import style from './button.module.scss';

type ButtonPropsType = {
  title: string;
  // onClick: () => void;
};

const AddButton = ({ title }: ButtonPropsType) => (
  <Button className={style.button} variant="warning" type="button">
    {title}
  </Button>
);

export default AddButton;
