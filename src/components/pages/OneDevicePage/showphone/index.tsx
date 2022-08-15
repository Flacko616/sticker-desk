import React, { useState } from 'react';
import style from './phone.module.scss';

const Title = () => {
  const [title, setTitle] = useState('Показать номер');

  return (
    <button className={style.phone} type="button" onClick={() => setTitle('8(930)456-65-69')}>
      {title}
    </button>
  );
};
export default Title;
