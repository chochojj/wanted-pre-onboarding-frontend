import { Container } from "../style/styles";
import TodoForm from "../component/todo/TodoForm";
import TodoList from "../component/todo/TodoList";

const Todo = () => {
  return (
    <Container>
      <TodoForm />
      <TodoList />
    </Container>
  );
};

export default Todo;
