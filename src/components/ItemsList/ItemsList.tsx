import styles from './itemsList.module.css'
import Item from '../Item/Item'
import { IStoreItems } from '../../models/interfaces';
import { useSelector } from 'react-redux';

const ItemsList = () => {
  const { listItems } = useSelector((state: IStoreItems) => state.list);
  const { searchedText } = useSelector((state: IStoreItems) => state.searchItem);

  let array;
  const list  = listItems.filter(e => e.titleValue.toLowerCase().includes(searchedText.toLowerCase()))
  if (searchedText.length === 0) {
    array = listItems;
  } else {
    array = list;
  }

  return (
    <ul className={styles['itemsList']}>
      {array.map((e, i) => <Item key={i} titleValue={e.titleValue} priceValue={e.priceValue} id={i} />)}
    </ul>
  )
}

export default ItemsList
