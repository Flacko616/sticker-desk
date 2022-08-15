import React from 'react';
import style from './DevicePage.module.scss';
import glaz from './glaz.svg';

type deviceItemsPropsType = {
  id: string;
  name: string;
  text: string;
  price: string;
  img: string;
  type: string;
};

const DeviceList = (props: deviceItemsPropsType) => {
  // eslint-disable-next-line object-curly-newline
  const { id, name, text, price, img, type } = props;
  return (
    <div className={style.card}>
      <div>
        <div className={style.img}>
          <img src={img} alt="" />
          <div className={style.type}>
            <p>{type}</p>
          </div>
        </div>
        <div className={style.name}>{name}</div>
        <div className={style.text}>{text}</div>
        <div className={style.price}>{`${price} Р`}</div>
        <div className={style.passive}>
          <p className={style.date}>14 апреля 2022 год</p>
          <p className={style.views}>
            <img src={glaz} alt="" /> 500
          </p>
        </div>
      </div>
    </div>
  );
};
export default DeviceList;
