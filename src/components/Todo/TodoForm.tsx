import React from "react";
import { TodoFormBody, TodoFormButton, TodoFormInput } from "./styles";
import { useInput } from "./hooks/useInput";

interface TodoFormInterface {
  addTodo: Function;
}

const TodoForm: React.FC<TodoFormInterface> = ({ addTodo }) => {
  const [value, onChange, onReset] = useInput("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (value.trim() !== "") addTodo(value);
    onReset();
  };

  return (
    <TodoFormBody onSubmit={handleSubmit}>
      <TodoFormInput value={value} onChange={onChange} />
      <TodoFormButton type="submit">Add</TodoFormButton>
    </TodoFormBody>
  );
};

export default TodoForm;
