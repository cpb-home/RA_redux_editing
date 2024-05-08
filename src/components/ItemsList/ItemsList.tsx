import styles from './itemsList.module.css'
import Item from '../Item/Item'
import { IStoreItems } from '../../models/interfaces';
import { useSelector } from 'react-redux';

const ItemsList = () => {
  const { listItems } = useSelector((state: IStoreItems) => state.list);

  return (
    <ul className={styles['itemsList']}>
      {listItems.map((e, i) => <Item key={i} titleValue={e.titleValue} priceValue={e.priceValue} id={i} />)}
    </ul>
  )
}

export default ItemsList
