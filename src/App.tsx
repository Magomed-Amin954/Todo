
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import Header from './layout/Header/Header'


function App() {

  return (
    < div className='App'>
      <Header/>
      <AddTodo/>
      <TodoList/>
    </div>
  )
}

export default App
