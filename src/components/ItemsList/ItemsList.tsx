import styles from './itemsList.module.css'
import Item from '../Item/Item'

const ItemsList = () => {
  return (
    <ul className={styles['itemsList']}>
      <Item />
    </ul>
  )
}

export default ItemsList
