import styles from './input.module.css'
import { IInputProps } from '../../models/interfaces'

const Input = ({ name }: IInputProps) => {
  return (
    <input className={styles['input']} name={name} required/>
  )
}

export default Input
