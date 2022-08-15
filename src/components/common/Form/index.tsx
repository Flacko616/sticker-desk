import React, { useState } from 'react';
// import search from './search.svg';
import style from './form.module.scss';

const Search = () => (
  <div className={style.block}>
    {/* <img src={search} alt="Sticker" className={style.img} /> */}
    <form>
      <input type="text" className={style.searcher} placeholder="Поиск..." />
      <button className={style.button} type="button">
        <p className={style.text}>Искать</p>
      </button>
    </form>
  </div>
);
export default Search;
