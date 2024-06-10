import { useContext } from "react";
import { TodoContext } from "../App";

const TodoItem = ({ todo }) => {
  const { toggleCompleted, deleteTodo } = useContext(TodoContext);

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
      <button onClick={() => deleteTodo(todo.id)} style={styles.button}>
        x
      </button>
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
    justifyContent: "space-between",
    alignItems: "center",
  },
  checkbox: {
    marginRight: "10px",
    height: "25px",
    width: "25px",
  },
  button: {
    backgroundColor: "#BB0000",
    color: "#fff",
    height: "30px",
    width: "30px",
    borderRadius: "100%",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default TodoItem;
