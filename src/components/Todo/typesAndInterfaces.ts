export type Todos = {
  id: string;
  text: string;
};

export interface TodoListInterface {
  todos: Todos[];
  removeTodo: Function;
  editTodo: Function;
}

export interface TodoItemInterface {
  item: Todos;
  removeTodo: Function;
  editTodo: Function;
}
