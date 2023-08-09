import { useState, memo } from "react";
import styled from "styled-components";

const AddForm = memo(({ addTodo }) => {
  const [value, setValue] = useState("");

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <Container onSubmit={handleSubmit}>
      <input
        data-testid="new-todo-input"
        value={value}
        onChange={onChangeInput}
        placeholder={`할 일 입력하기 !`}
      />
      <button type="submit" data-testid="new-todo-add-button">
        추가
      </button>
    </Container>
  );
});

export default AddForm;

const Container = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
