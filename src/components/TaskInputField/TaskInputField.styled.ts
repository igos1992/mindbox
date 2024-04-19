import { styled } from "styled-components";

export const ItemInputField = styled.div`
  position: relative;
`;

export const DownArrow = styled.svg`
  width: 10px;
  height: 10px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 7px;
  transform: translateY(-50%);
  fill: #d3d3d3;
`;

export const Input = styled.input`
  padding-left: 30px;
  padding-right: 30px;
  width: 250px;
  height: 30px;
  border: none;
  border-radius: 5px;
  margin-bottom: 1px;
  outline: none;
  &:focus-visible {
    border: 1px solid #ff88a5;
  }
  &::placeholder {
    font-family: Roboto;
    color: #e9e9e9;
    font-style: italic;
    font-weight: 100;
  }
`;

export const AddTask = styled.svg`
  width: 10px;
  height: 10px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 7px;
  transform: translateY(-50%);
`;
