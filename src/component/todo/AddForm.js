import { useState, memo } from "react";
import styled from "styled-components";
import Button from "../common/Button";

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
      <Button type="submit" data-testid="new-todo-add-button" width="70px">
        추가
      </Button>
    </Container>
  );
});

export default AddForm;

const Container = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;

  input {
    width: 270px;
    height: 30px;
    margin-right: 2px;
    padding: 0 5px;
  }
`;
