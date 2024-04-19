import { css, styled } from "styled-components";

export const PlaylistTitleCol = css`
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  word-break: break-all;
  width: 190px;
`;

export const ItemTaskList = styled.div``;

export const TaskList = styled.ul`
  display: flex;
  gap: 1px;
  flex-direction: column;
`;

export const Marker = styled.li`
  background-color: white;
  width: 250px;
  min-height: 30px;
  border-radius: 5px;
  align-items: center;
  padding: 0px 7px 0px 7px;
  display: flex;
  justify-content: space-between;
`;

export const ItemCheckbox = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const StyleCheckbox = styled.label`
  display: inline-block;
  position: relative;
  height: 15px;
  width: 15px;
  cursor: pointer;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: background-color 0.25s ease;
  border-radius: 50%;
  border: 1px solid #c4f9b9;
  &:after {
    content: "";
    position: absolute;
    left: 8px;
    top: 4px;
    width: 5px;
    height: 10px;
    border: solid #333;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    opacity: 0;
    transition: opacity 0.25s ease;
  }
`;

export const CheckboxCheckmark = styled.div``;

export const Checkbox = styled.input`
  opacity: 0;
  &:checked ~ ${CheckboxCheckmark} {
    content: "";
    position: absolute;
    left: 5px;
    top: 1px;
    width: 5px;
    height: 10px;
    border: solid #c4f9b9;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    transition: opacity 0.25s ease;
  }
  &:checked ~ ${CheckboxCheckmark}:after {
    opacity: 1;
  }
`;

export const TextTask = styled.p`
  ${PlaylistTitleCol};
`;

export const Delete = styled.svg`
  width: 10px;
  height: 10px;
  cursor: pointer;
`;
