import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todoSlice/todoSlice";
import { ITodo } from "../../interfaces";
import { Spacer, Button, Input } from "../../global.styles.";
import { Label } from "./TodoForm.styles";

const TodoForm: React.FC = () => {
  const [title, setTitle] = useState("");
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
