import { styled } from "styled-components";

export const ItemButton = styled.div`
  font-family: Roboto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 5px;
  width: 250px;
  height: 30px;
  background-color: white;
  margin: 1px 0px 10px 0px;
  border-radius: 4px;
  padding: 0px 7px 0px 7px;
`;

export const RemainingTasksText = styled.p``;

export const ItemButtonTaskStatus = styled.div`
  display: flex;
  gap: 5px;
`;

export const Button = styled.button`
  padding: 3px;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  &:hover {
    border: 1px solid #ff88a5;
    padding: 2px;
  }
  &:focus {
    border: 1px solid #ff88a5;
    outline: none;
    padding: 2px;
  }
`;
