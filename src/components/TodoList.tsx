import React, { useState } from "react";
import styled from "styled-components";
import { ITodo } from "../interfaces";
import { Button, Input, Spacer } from "../styles/global";

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

interface Props {
  todos: ITodo[];
  onToogle: (id: number) => void;
  onRemove: (id: number) => void;
  onSave: (item: ITodo) => void;
}

const TodoList: React.FC<Props> = ({ todos, onToogle, onRemove, onSave }) => {
  const [editableItem, setEditableItem] = useState<ITodo | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditableItem({ ...editableItem, title: event.target.value } as ITodo);
  };

  const renderEditableItem = (item: ITodo) => (
    <Spacer>
      <Input value={item.title} type="text" onChange={handleInputChange} />
      <Button
        onClick={() => {
          onSave(item);
          setEditableItem(null);
        }}
      >
        save
      </Button>
    </Spacer>
  );

  const renderItem = (item: ITodo) => (
    <Spacer>
      <Item key={item.id}>
        <div>
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => onToogle(item.id)}
          />
          <Title completed={item.completed}>{item.title}</Title>
        </div>
        <Button onClick={() => setEditableItem(item)}>edit</Button>
        <Button onClick={() => onRemove(item.id)}>delete</Button>
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
