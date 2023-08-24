import { Container } from "../style/styles";
import styled from "styled-components";
import Todos from "../component/todo/Todos";
import AddForm from "../component/todo/AddForm";
import TodoList from "../component/todo/TodoList";

const Todo = () => {
  return (
    <Wrap>
      <TodoList>
        <AddForm />
        <Todos />
      </TodoList>
    </Wrap>
  );
};

export default Todo;

const Wrap = styled(Container)`
  width: fit-content;
`;
