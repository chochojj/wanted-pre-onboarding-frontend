import { memo, useState } from "react";

const Todos = memo(({ todoList, setTodoList, updataTodo, deleteTodo }) => {
  const [editableTodoId, setEditableTodoId] = useState(null);
  const [modifiedTodo, setModifiedTodo] = useState("");
  const [modifiedIsCompleted, setModifiedIsCompleted] = useState(false);

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

  const handleInputChange = (e) => {
    setModifiedTodo(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setModifiedIsCompleted(e.target.checked);
  };

  const handleDelete = (id) => {
    deleteTodo(id);
  };

  return (
    <div>
      {todoList &&
        todoList.map((data) => (
          <li key={data.id}>
            <label>
              <input
                type="checkbox"
                defaultChecked={data.isCompleted}
                onChange={() => handleCheckboxChange(data.id)}
              />
              {editableTodoId === data.id ? (
                <>
                  <input
                    data-testid="modify-input"
                    value={modifiedTodo}
                    onChange={handleInputChange}
                  />
                  <button data-testid="submit-button">제출</button>
                  <button data-testid="cancel-button" onClick={handleCancel}>
                    취소
                  </button>
                </>
              ) : (
                <>
                  <span>{data.todo}</span>
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
            </label>
          </li>
        ))}
    </div>
  );
});
export default Todos;
