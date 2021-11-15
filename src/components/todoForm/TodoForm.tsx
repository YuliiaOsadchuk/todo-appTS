import React, { useState } from "react";
import { Spacer, Button, Input } from "../../global.styles.";
import { Label } from "./TodoForm.styles";
import { useAddTodoMutation } from "../../store/todosApi";

const TodoForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [addTodo] = useAddTodoMutation();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleAddTodo = async (title: string) => {
    if (title) {
      await addTodo({
        title: title,
        id: Date.now(),
        completed: false,
      }).unwrap();
    }
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
