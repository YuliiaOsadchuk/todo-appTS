import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { ITodo } from "../interfaces";
import { Button, Input, Spacer } from "../styles/global";
import { useTypedSelector } from "../hooks/todoTypedSelector";
import { deleteTodo, saveTodo, toogleTodo } from "../redux/actions";

const Item = styled.div`
  background-color: #ccc;
  border-radius: 8px;
  width: 50%;
  height: 80px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

interface TitleProps {
  readonly completed: boolean;
}

const Title = styled.span<TitleProps>`
  padding-left: 10px;
  text-decoration: ${(props) => props.completed && "line-through"};
`;

const TodoList: React.FC = () => {
  const [editableItem, setEditableItem] = useState<ITodo | null>(null);
  const { todos } = useTypedSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditableItem({ ...editableItem, title: event.target.value } as ITodo);
  };

  const handleSave = (item: ITodo) => {
    dispatch(saveTodo(item));
    setEditableItem(null);
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
            onChange={() => dispatch(toogleTodo(item.id))}
          />
          <Title completed={item.completed}>{item.title}</Title>
        </div>
        <Button onClick={() => setEditableItem(item)}>edit</Button>
        <Button onClick={() => dispatch(deleteTodo(item.id))}>delete</Button>
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
