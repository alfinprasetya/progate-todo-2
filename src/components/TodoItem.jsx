const TodoItem = ({ todo }) => {
  return (
    <div style={styles.todoItem}>
      <p>{todo.title}</p>
    </div>
  )
}

const styles = {
  todoItem: {
    border: '2px solid #FFDA78',
    backgroundColor: "#FFDA78",
    fontSize: '24px',
    margin: '10px',
    padding: '0 5px',
    borderRadius: '20px'
  },
}

export default TodoItem