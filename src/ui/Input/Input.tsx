import styles from './input.module.css'
import { IInputProps } from '../../models/interfaces'

const Input = ({ name, handler, value }: IInputProps) => {
  return (
    <>
      <input id={name} className={styles['input']} value={value} onChange={handler} name={name} placeholder={name === 'title' ? 'Название товара' : 'Цена товара'} required/>
    </>
  )
}

export default Input
