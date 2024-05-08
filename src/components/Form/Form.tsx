import { useDispatch, useSelector } from 'react-redux'
import Button from '../../ui/Button/Button'
import Input from '../../ui/Input/Input'
import styles from './form.module.css'
import React from 'react'
import setTitleValue from '../../redux/setTitleValue'
import setPriceValue from '../../redux/setPriceValue'
import { IStoreItems } from '../../models/interfaces'
import addListItem from '../../redux/addListItem'
import changeChanger from '../../redux/changeChanger'
import changeListItem from '../../redux/changeListItem'
import setCurrentItem from '../../redux/setCurrentItem'

const Form = () => {
  const { titleValue, priceValue } = useSelector((state: IStoreItems) => state.currentItem) ;
  const { changer } = useSelector((state: IStoreItems) => state.itemChanger) ;
  const { id } = useSelector((state: IStoreItems) => state.changingItem) ;

  
  const dispatch = useDispatch();
  
  const saveHandler = () => {
    if (changer) {
      dispatch(changeListItem(Number(id), titleValue, priceValue));
      dispatch(setPriceValue(''));
      dispatch(setTitleValue(''));
      dispatch(changeChanger());
      dispatch(setCurrentItem(null, '', ''));
    } else {
      saveData();
    }
  }

  const cancelHandler = () => {
    dispatch(setTitleValue(''));
    dispatch(setPriceValue(''));
    dispatch(setCurrentItem(null, '', ''));
    dispatch(changeChanger());
  }

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    saveData();
  }

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'title') {
      dispatch(setTitleValue(e.target.value));
    } else if (e.target.name === 'price') {
      dispatch(setPriceValue(e.target.value));
    }
  }

  function saveData() {
    if (titleValue && priceValue) {
      dispatch(addListItem(titleValue, priceValue));
      dispatch(setTitleValue(''));
      dispatch(setPriceValue(''));
    }
  }

  return (
    <form className={styles['form']} onSubmit={submitHandler}>
      <Input value={titleValue} name='title' handler={changeHandler} />
      <Input value={priceValue} name='price' handler={changeHandler} />
      <Button action='save' handler={saveHandler} />
      {changer ? <Button action='cancel' handler={cancelHandler} /> : ''}
      <br />
    </form>
  )
}

export default Form
