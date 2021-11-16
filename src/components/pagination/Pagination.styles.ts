import styled from "styled-components";

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PageButton = styled.button`
  cursor: pointer;
  font-size: 16px;
  padding: 5px 15px;
  background-color: cadetblue;
  border-radius: 4px;
  outline: none;
  border: none;
  margin: 3px;
  &::disabled {
    background-color: #cccccc;
  }
`;
