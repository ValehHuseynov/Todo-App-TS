import React, { useState } from "react";
import TodoList from "./TodoList";
import { useTodos } from "./hooks/useTodos";
import { TodoBody } from "./styles";
import TodoForm from "./TodoForm";

export const Todo: React.FC = () => {
  const { todos, addTodo, removeTodo, editTodo } = useTodos("todos");
  return (
    <TodoBody>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} editTodo={editTodo} />
    </TodoBody>
  );
};
