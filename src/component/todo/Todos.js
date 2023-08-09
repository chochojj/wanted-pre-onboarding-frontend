import { memo } from "react";

const Todos = memo(({ todoList }) => {
  console.log(todoList);
  return (
    <div>
      {todoList &&
        todoList.map((data) => (
          <li key={data.id}>
            <label>
              <input type="checkbox" checked={data.isCompleted} />
              <span>{data.todo}</span>
            </label>
            <button data-testid="modify-button">수정</button>
            <button data-testid="delete-button">삭제</button>
          </li>
        ))}
    </div>
  );
});

export default Todos;
