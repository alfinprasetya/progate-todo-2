import { useState } from 'react'
import tasks from './data/initial-tasks'
import Todos from './components/Todos'


function App() {
  const [todos, setTodos] = useState(tasks)

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Todo List</h1>
      <Todos todos={todos} />
    </div>
  )
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '12px',
  },
  title: {
    fontSize: '36px',
    color: '#FF7F3E'
  },
}

export default App