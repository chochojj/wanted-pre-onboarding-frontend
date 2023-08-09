import { memo, useState } from "react";

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
          <li key={data.id}>
            <label>
              <input
                type="checkbox"
                defaultChecked={data.isCompleted}
                onChange={handleCheckboxChange}
              />
              {editableTodoId === data.id ? (
                <>
                  <input
                    data-testid="modify-input"
                    value={modifiedTodo}
                    onChange={handleInputChange}
                  />
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
