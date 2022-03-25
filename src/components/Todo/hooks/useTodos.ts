import { Todos } from "../typesAndInterfaces";
import useLocalStorage from "./useLocalStorage";
import { v4 as uuid } from "uuid";

export const useTodos = (key: string) => {
  const [todos, setTodos] = useLocalStorage(key, []);

  const addTodo = (text: string) => {
    const newTodos: Todos[] = [...todos, { id: uuid(), text: text }];
    setTodos(newTodos);
  };

  const removeTodo = (todoId: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  const editTodo = (todoId: string, newText: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, text: newText } : todo
    );

    setTodos(updatedTodos);
  };

  return {
    todos,
    addTodo,
    removeTodo,
    editTodo,
  } as const;
};
