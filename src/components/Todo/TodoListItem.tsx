import React, { useState } from "react";
import { ListItem, ListItemButtons, TodoFormInput } from "./styles";
import { RiDeleteBin6Line, RiEdit2Line, RiCheckLine } from "react-icons/ri";
import { TodoItemInterface } from "./typesAndInterfaces";
import { useInput } from "./hooks/useInput";

const TodoListItem: React.FC<TodoItemInterface> = ({
  item,
  removeTodo,
  editTodo,
}) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [value, onChange] = useInput(item.text);

  const handleEditTodo = () => {
    if (isEdit) {
      editTodo(item.id, value);
      setIsEdit(false);
    } else {
      setIsEdit(true);
    }
  };
  return (
    <ListItem>
      {isEdit ? (
        <TodoFormInput value={value} onChange={onChange} />
      ) : (
        <span>{item.text}</span>
      )}

      <ListItemButtons>
        <button type="button" onClick={handleEditTodo}>
          {isEdit ? <RiCheckLine /> : <RiEdit2Line />}
        </button>

        <button type="button" onClick={removeTodo.bind(null, item.id)}>
          <RiDeleteBin6Line />
        </button>
      </ListItemButtons>
    </ListItem>
  );
};

export default TodoListItem;
