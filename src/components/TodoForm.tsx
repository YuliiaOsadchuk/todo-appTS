import React, { useState } from "react";
import styled from "styled-components";
import { Spacer, Button, Input } from "../styles/global";

const Label = styled.label`
  font-size: 16px;
  font-weight: 700;
`;

interface Props {
  onAdd: (title: string) => void;
}

const TodoForm: React.FC<Props> = ({ onAdd }) => {
  const [title, setTitle] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
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
          onAdd(title);
          setTitle("");
        }}
      >
        Add
      </Button>
    </>
  );
};

export default TodoForm;
