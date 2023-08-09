import React, { useState, useRef, useEffect, memo } from "react";
import styled from "styled-components";

const AddForm = memo(({ addTodo }) => {
  const [value, setValue] = useState("");
  const input = useRef(null);

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    input.current.focus();
    setValue("");
  }, [addTodo]);

  return (
    <Container
      onSubmit={(e) => {
        e.preventDefault();
        addTodo(value);
      }}
    >
      <input
        data-testid="new-todo-input"
        ref={input}
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
