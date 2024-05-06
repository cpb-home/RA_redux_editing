import Button from '../../ui/Button/Button'
import Input from '../../ui/Input/Input'
import styles from './form.module.css'

const Form = () => {

  const saveHandler = () => {
    console.log('save');
  }

  const cancelHandler = () => {
    console.log('cancel');
  }

  return (
    <form className={styles['form']}>
      <Input name='title' /><Input name='price' /><Button action='save' handler={saveHandler} /><Button action='cancel' handler={cancelHandler} />
    </form>
  )
}

export default Form
