import { useState } from 'react'
import tasks from './data/initial-tasks'

function App() {
  const [todos, setTodos] = useState(tasks)

  return (
    <div>
      <h1>My Todo List</h1>
      {/* Gunakan method map di sini */}
      {todos.map((todo) => {
        return <p key={todo.id}>{todo.title}</p>
      })}
    </div>
  )
}

export default App