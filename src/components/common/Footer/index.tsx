import React from 'react';
import style from './footer.module.scss';
import Logo from './Logo.png';

const Footer = () => (
  <footer className={style.footer}>
    <div className={style.logotip}>
      <img src={Logo} className={style.logo} alt="Sticker" />
      <p className={style.add}> | Доска объявлений</p>
    </div>
    <p className={style.desk}>© ООО «Доска диджитал», 2022 </p>
  </footer>
);

export default Footer;
