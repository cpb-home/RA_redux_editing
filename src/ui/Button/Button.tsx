import styles from './button.module.css'
import { IButtonProps } from '../../models/interfaces'

const Button = ({ action, handler }: IButtonProps) => {

  let content;
  switch (action) {
    case 'cancel':
      content = 'Cancel';
      break;
    case 'change':
      content = <img src='https://e7.pngegg.com/pngimages/966/555/png-clipart-computer-icons-drawing-editing-pencil-pencil-angle-pencil.png' alt='Кнопка Изменить' title='Кнопка Изменить' />;
      break;
    case 'delete':
      content = <img src='https://e7.pngegg.com/pngimages/990/934/png-clipart-computer-icons-psd-scalable-graphics-symbol-miscellaneous-angle.png' alt='Кнопка Удалить' title='Кнопка Удалить' />;
      break;
    case 'save':
      content = 'Save';
  }

  return (
    <button className={styles['button']} type='button' onClick={handler}>
      {content}
    </button>
  )
}

export default Button
