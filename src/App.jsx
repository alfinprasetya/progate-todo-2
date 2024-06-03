import { useState } from 'react'
import tasks from './data/initial-tasks'
import Todos from './components/Todos'


function App() {
  const [todos, setTodos] = useState(tasks)

  return (
    <div>
      <h1>My Todo List</h1>
      {/* Gunakan method map di sini */}
      <Todos todos={todos} />
    </div>
  )
}

export default App