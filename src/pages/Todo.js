import styled from "styled-components";
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

const Container = styled.div``;
