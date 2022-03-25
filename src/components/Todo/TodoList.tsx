import React from "react";
import { TodoListInterface } from "./typesAndInterfaces";
import { TodoListBody, List } from "./styles";
import TodoListItem from "./TodoListItem";

const TodoList: React.FC<TodoListInterface> = ({
  todos,
  removeTodo,
  editTodo,
}) => {
  return (
    <TodoListBody>
      <List>
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            item={todo}
            removeTodo={removeTodo}
            editTodo={editTodo}
          />
        ))}
      </List>
    </TodoListBody>
  );
};

export default TodoList;
