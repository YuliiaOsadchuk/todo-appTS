import React, { useState } from "react";
import styled from "styled-components";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { ITodo } from "../interfaces";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 50px 150px;
  background-color: #fafafa;
`;

const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleAddTodo = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };

    setTodos([newTodo, ...todos]);
  };

  const handleToogle = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const handleRemove = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleSave = (item: ITodo) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === item.id) {
          return item;
        }
        return todo;
      })
    );
  };

  return (
    <Container>
      <TodoForm onAdd={handleAddTodo} />
      <TodoList
        todos={todos}
        onToogle={handleToogle}
        onRemove={handleRemove}
        onSave={handleSave}
      />
    </Container>
  );
};
export default TodosPage;
