import React from 'react';
import { NavLink } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import Logo from './Logo.png';
import AddButton from '../AddButton';
import Button from '../RegButton';
import Search from '../Form';
import style from './header.module.scss';
import Profile from './profile.svg';

// import GetUserName from '../../../store/auth/selectors';
// import { ClearUserNameAction } from '../../../store/auth/actions';

const Header = () => (
  // const name = useSelector(GetUserName);
  // const dispatch = useDispatch();

  <header className={style.header}>
    <NavLink to="/">
      <button type="button" className={style.button}>
        <img src={Logo} alt="Sticker" />
      </button>
    </NavLink>
    <Search />
    <AddButton title="Подать объявление" />
    <NavLink to="/reg">
      <img src={Profile} alt="profile" />
      {/* <div>
          {name ? (
            <>
              <h2>{name}</h2>
              <Button title="Профиль" onClick={() => dispatch(ClearUserNameAction())} />
            </>
          ) : (
            'Войти'
          )}
        </div>
        <button type="button" className={style.button}>
          <p className={style.text}>Войти</p>
        </button> */}
      <button type="button" className={style.button}>
        <p className={style.text}>Войти</p>
      </button>
    </NavLink>
  </header>
);
export default Header;
