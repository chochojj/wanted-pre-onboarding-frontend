import { useState, useEffect, useCallback } from "react";
import AddForm from "./AddForm";
import Todos from "./Todos";
import { getTodos, createTodo } from "../../apis/api";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const data = await getTodos();
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
        const data = await createTodo(value);
        setTodoList((prev) => [...prev, data]);
      } catch (error) {
        console.log(error.message);
      }
    };
    addTodo();
  });

  return (
    <div>
      <AddForm addTodo={addTodo} />
      <Todos TodoList={todoList} />
    </div>
  );
};

export default TodoList;
