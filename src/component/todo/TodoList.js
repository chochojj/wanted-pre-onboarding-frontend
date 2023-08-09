import { useState, useEffect, useCallback } from "react";
import AddForm from "./AddForm";
import Todos from "./Todos";
import { getTodosApi, createTodoApi, deleteTodoApi } from "../../apis/api";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const data = await getTodosApi();
        console.log(data);
        setTodoList(data);
      } catch (error) {
        console.error("데이터");
      }
    };
    fetchTodo();
  }, []);

  const addTodo = useCallback((value) => {
    const addTodo = async () => {
      try {
        const data = await createTodoApi(value);
        setTodoList((prev) => [...prev, data]);
      } catch (error) {
        console.log(error.message);
      }
    };
    addTodo();
  });

  const deleteTodo = useCallback(async (id) => {
    try {
      await deleteTodoApi(id); // API로부터 할 일 삭제
      setTodoList((prev) => prev.filter((el) => el.id !== id)); // 삭제된 할 일 제외
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <div>
      <AddForm addTodo={addTodo} />
      <Todos
        todoList={todoList}
        setTodoList={setTodoList}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default TodoList;
