import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ITodo } from "../../interfaces";
import { Button, Input, Spacer } from "../../global.styles.";
import { Item, Title } from "./TodoList.styles";
import { deleteTodo, editTodo, toogleTodo } from "../../store/todoSlice";
import { selectTodos } from "../../store/store";

const TodoList: React.FC = () => {
  const [editableItem, setEditableItem] = useState<ITodo | null>(null);
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    editableItem &&
      setEditableItem({ ...editableItem, title: event.target.value });
  };

  const handleSave = (item: ITodo) => {
    dispatch(editTodo(item));
    setEditableItem(null);
  };

  const handleToogle = (id: number) => {
    dispatch(toogleTodo(id));
  };

  const handleEdit = (item: ITodo) => {
    setEditableItem(item);
  };

  const handleDelete = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const renderEditableItem = (item: ITodo) => (
    <Spacer>
      <Input value={item.title} type="text" onChange={handleInputChange} />
      <Button onClick={() => handleSave(item)}>save</Button>
    </Spacer>
  );

  const renderItem = (item: ITodo) => (
    <Spacer key={item.id}>
      <Item>
        <div>
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => handleToogle(item.id)}
          />
          <Title completed={item.completed}>{item.title}</Title>
        </div>
        <Button onClick={() => handleEdit(item)}>edit</Button>
        <Button onClick={() => handleDelete(item.id)}>delete</Button>
      </Item>
    </Spacer>
  );

  return (
    <Spacer>
      {!todos.length && <p>You don`t have any todo yet</p>}
      {todos.map((todo) =>
        editableItem?.id === todo.id
          ? renderEditableItem(editableItem)
          : renderItem(todo)
      )}
    </Spacer>
  );
};

export default TodoList;
