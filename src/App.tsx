import './App.css'
import Form from './components/Form/Form'
import ItemsList from './components/ItemsList/ItemsList'
import Search from './components/Search/Search'

function App() {

  return (
    <div className='container'>
      <Search />
      <Form />
      <ItemsList />
    </div>
  )
}

export default App
