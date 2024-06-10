const TodoItem = ({ todo, toggleCompleted }) => {
  const getTodoTitleStyle = () => {
    if (todo.completed === true) {
      return { textDecoration: "line-through" };
    } else {
      return { textDecoration: "none" };
    }
  };

  return (
    <div style={styles.todoItem}>
      <input
        type="checkbox"
        style={styles.checkbox}
        onChange={() => toggleCompleted(todo.id)}
      ></input>
      <p style={getTodoTitleStyle()}>{todo.title}</p>
    </div>
  );
};

const styles = {
  todoItem: {
    border: "2px solid #FFDA78",
    backgroundColor: "#FFDA78",
    fontSize: "24px",
    margin: "10px",
    padding: "0 20px",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  checkbox: {
    marginRight: "10px",
    height: "25px",
    width: "25px",
  },
};

export default TodoItem;
