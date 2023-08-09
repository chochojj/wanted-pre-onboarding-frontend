import { memo, useState } from "react";
import styled from "styled-components";

const Todos = memo(({ todoList, setTodoList, updateTodo, deleteTodo }) => {
  const [editableTodoId, setEditableTodoId] = useState(null);
  const [modifiedTodo, setModifiedTodo] = useState("");
  const [modifiedIsCompleted, setModifiedIsCompleted] = useState(false);

  const handleInputChange = (e) => {
    setModifiedTodo(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setModifiedIsCompleted(e.target.checked);
  };

  const handleModify = (id, todo, isCompleted) => {
    setEditableTodoId(id);
    setModifiedTodo(todo);
    setModifiedIsCompleted(isCompleted);
  };

  const handleCancel = () => {
    setEditableTodoId(null);
    setModifiedTodo("");
    setModifiedIsCompleted(false);
  };

  const handleUpdate = async (id, modifiedTodo, modifiedIsCompleted) => {
    if (modifiedTodo !== null && modifiedTodo.trim() === "") {
      handleCancel();
      return;
    }
    updateTodo(id, modifiedTodo, modifiedIsCompleted);
    handleCancel();
  };

  const handleDelete = (id) => {
    deleteTodo(id);
  };

  return (
    <div>
      {todoList &&
        todoList.map((data) => (
          <Todo key={data.id}>
            {editableTodoId === data.id ? (
              <>
                <label>
                  <input
                    type="checkbox"
                    defaultChecked={data.isCompleted}
                    onChange={handleCheckboxChange}
                  />
                  <input
                    type="text"
                    data-testid="modify-input"
                    value={modifiedTodo}
                    onChange={handleInputChange}
                  />
                </label>
                <button
                  data-testid="submit-button"
                  onClick={() =>
                    handleUpdate(data.id, modifiedTodo, modifiedIsCompleted)
                  }
                >
                  제출
                </button>
                <button data-testid="cancel-button" onClick={handleCancel}>
                  취소
                </button>
              </>
            ) : (
              <>
                <label>
                  <input
                    type="checkbox"
                    defaultChecked={data.isCompleted}
                    onChange={handleCheckboxChange}
                  />
                  <span>{data.todo}</span>
                </label>
                <button
                  data-testid="modify-button"
                  onClick={() =>
                    handleModify(data.id, data.todo, data.isCompleted)
                  }
                >
                  수정
                </button>
                <button
                  data-testid="delete-button"
                  onClick={() => handleDelete(data.id)}
                >
                  삭제
                </button>
              </>
            )}
          </Todo>
        ))}
    </div>
  );
});
export default Todos;

const Todo = styled.li`
  width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;

  label {
    width: 260px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }

  span,
  input[type="text"] {
    width: 250px;
  }

  button {
    height: 25px;
    width: 40px;
    border: none;
    background-color: transparent;
    border-radius: 3px;

    &:hover {
      background-color: salmon;
      color: white;
    }
  }
`;
