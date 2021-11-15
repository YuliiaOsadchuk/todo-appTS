import React, { useState } from "react";
import { ITodo } from "../../interfaces";
import { Button, Input, Spacer } from "../../global.styles.";
import { Item, Title } from "./TodoList.styles";
import {
  useGetTodosQuery,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
  useToogleTodoMutation,
} from "../../store/todosApi";

const TodoList: React.FC = () => {
  const [editableItem, setEditableItem] = useState<ITodo | null>(null);
  const { data: todos } = useGetTodosQuery();
  const [deleteTodo] = useDeleteTodoMutation();
  const [editTodo] = useUpdateTodoMutation();
  const [toogleTodo] = useToogleTodoMutation();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    editableItem &&
      setEditableItem({ ...editableItem, title: event.target.value });
  };

  const handleSave = async (item: ITodo) => {
    await editTodo(item).unwrap();
    setEditableItem(null);
  };

  const handleToogle = async (item: ITodo) => {
    await toogleTodo(item).unwrap();
  };

  const handleEdit = (item: ITodo) => {
    setEditableItem(item);
  };

  const handleDelete = async (id: number) => {
    await deleteTodo(id).unwrap();
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
            onChange={() => handleToogle(item)}
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
      {!todos && <p>You don`t have any todo yet</p>}
      {todos?.map((todo) =>
        editableItem?.id === todo.id
          ? renderEditableItem(editableItem)
          : renderItem(todo)
      )}
    </Spacer>
  );
};

export default TodoList;
