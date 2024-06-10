import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(title);
    setTitle("");
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div style={styles.container}>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <input
          type="text"
          placeholder="Add your Todo"
          style={styles.formInput}
          onChange={(event) => {
            handleChangeTitle(event);
          }}
          value={title}
        />
        <button style={styles.button}>Add Todo</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    marginBottom: "32px",
    width: "80%",
    maxWidth: "900px",
    margin: "0 auto",
  },
  formInput: {
    height: "66px",
    width: "80%",
    fontSize: "16px",
    padding: "0 16px",
    borderTopLeftRadius: "20px",
    borderBottomLeftRadius: "20px",
  },
  button: {
    height: "72px",
    fontSize: "16px",
    borderTopRightRadius: "20px",
    borderBottomRightRadius: "20px",
  },
};

export default TodoForm;
