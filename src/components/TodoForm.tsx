import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";
import { ITodo } from "../interfaces";
import { Spacer, Button, Input } from "../styles/global";

const Label = styled.label`
  font-size: 16px;
  font-weight: 700;
`;

const TodoForm: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const dispatch = useDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleAddTodo = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };

    dispatch(addTodo(newTodo));
    setTitle("");
  };

  return (
    <>
      <Label htmlFor="title">Add todo</Label>
      <Spacer />
      <Input
        type="text"
        placeholder="Enter title"
        id="title"
        onChange={handleInputChange}
        value={title}
      />
      <Spacer />
      <Button
        onClick={() => {
          handleAddTodo(title);
        }}
      >
        Add
      </Button>
    </>
  );
};

export default TodoForm;
