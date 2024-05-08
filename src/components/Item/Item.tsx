import styles from './item.module.css'
import Button from '../../ui/Button/Button'
import { IItem, IStoreItems } from '../../models/interfaces'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import removeListItem from '../../redux/removeListItem'
import changeChanger from '../../redux/changeChanger'
import setCurrentItem from '../../redux/setCurrentItem'
import setTitleValue from '../../redux/setTitleValue'
import setPriceValue from '../../redux/setPriceValue'

const Item = ({ titleValue, priceValue, id }: IItem) => {
  const { changer } = useSelector((state: IStoreItems) => state.itemChanger);
  const { listItems } = useSelector((state: IStoreItems) => state.list);

  const dispatch = useDispatch();

  const changeHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button: HTMLButtonElement = e.currentTarget;
    if (!changer) {
      dispatch(changeChanger());
      const el = listItems.find((e, i) => i === Number(button.dataset.id));
      if (el) {//console.log(el)
        dispatch(setCurrentItem(Number(button.dataset.id), el.priceValue, el.titleValue)); //получить текст и цену
        dispatch(setTitleValue(el.titleValue));
        dispatch(setPriceValue(el.priceValue));
      }
    }
  }

  const deleteHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button: HTMLButtonElement = e.currentTarget;

    dispatch(removeListItem(Number(button.dataset.id)));
  }

  return (
    <li className={styles['item']}>
      <span>{titleValue + ':'}</span><span>{priceValue}</span> <Button elId={id} action='change' handler={changeHandler} /><Button action='delete' elId={id} handler={deleteHandler} />
    </li>
  )
}

export default Item
