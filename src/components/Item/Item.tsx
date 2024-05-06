import styles from './item.module.css'
import Button from '../../ui/Button/Button'

const Item = () => {

  const changeHandler = () => {
    console.log('change');
  }

  const deleteHandler = () => {
    console.log('delete');
  }

  return (
    <li className={styles['item']}>
      <span>Название айтема</span> <Button action='change' handler={changeHandler} /><Button action='delete' handler={deleteHandler} />
    </li>
  )
}

export default Item
