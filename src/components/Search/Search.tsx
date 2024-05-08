import React from 'react';
import styles from './search.module.css'
import { useDispatch } from 'react-redux';
import searchItem from '../../redux/searchtem';

const Search = () => {
  const dispatch = useDispatch();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inp: HTMLInputElement = e.currentTarget;
    dispatch(searchItem(inp.value));
  }

  return (
    <div className={styles['search']}>
      <input className={styles['searchInput']} type='search' name='search' onChange={inputHandler} placeholder='Поиск товаров...' />
    </div>
  )
}

export default Search
