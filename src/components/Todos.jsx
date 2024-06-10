import TodoItem from "./TodoItem"; // Lakukan import

const Todos = ({ todos }) => {
  return (
    <div style={styles.container}>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

const styles = {
  container: {
    width: "80%",
    maxWidth: "900px",
    margin: "0 auto",
  },
};

export default Todos;
