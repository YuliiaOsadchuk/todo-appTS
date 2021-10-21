import React from "react";
import styled from "styled-components";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 50px 150px;
  background-color: #fafafa;
`;

const TodosPage: React.FC = () => (
  <Container>
    <TodoForm />
    <TodoList />
  </Container>
);

export default TodosPage;
