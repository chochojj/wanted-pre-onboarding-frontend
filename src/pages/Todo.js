import { Container } from "../style/styles";
import Todos from "../component/todo/Todos";
import AddForm from "../component/todo/AddForm";
import TodoList from "../component/todo/TodoList";

const Todo = () => {
  return (
    <Container>
      <TodoList>
        <AddForm />
        <Todos />
      </TodoList>
    </Container>
  );
};

export default Todo;
