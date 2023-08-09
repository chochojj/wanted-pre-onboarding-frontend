import { useState, useEffect, useCallback } from "react";
import AddForm from "./AddForm";
import Todos from "./Todos";
import {
  getTodosApi,
  createTodoApi,
  updateTodoApi,
  deleteTodoApi,
} from "../../apis/api";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const data = await getTodosApi();
        console.log(data);
        setTodoList(data);
      } catch (error) {
        console.error("패치 오류");
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
        console.error("작성 오류");
      }
    };
    addTodo();
  }, []);

  const updateTodo = useCallback(async (id, newTodo, isCompleted) => {
    try {
      await updateTodoApi(id, newTodo, isCompleted);
      setTodoList((prevTodos) => {
        const updatedTodos = prevTodos.map((todo) =>
          todo.id === id
            ? { ...todo, todo: newTodo, isCompleted: isCompleted }
            : todo
        );
        const found = updatedTodos.some((todo) => todo.id === id);
        return found
          ? updatedTodos
          : [...updatedTodos, { id, todo: newTodo, isCompleted: isCompleted }];
      });
    } catch (error) {
      console.error("수정 오류");
    }
  }, []);

  const deleteTodo = useCallback(async (id) => {
    try {
      await deleteTodoApi(id);
      setTodoList((prev) => prev.filter((el) => el.id !== id));
    } catch (error) {
      console.error("삭제 오류");
    }
  }, []);

  return (
    <div>
      <AddForm addTodo={addTodo} />
      <Todos
        todoList={todoList}
        setTodoList={setTodoList}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default TodoList;
