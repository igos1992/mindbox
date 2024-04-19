import { FC } from "react";
import * as S from "./TaskInputField.styled";

interface TaskInput {
  setIsTaskListOpen: (isTaskListOpen: boolean) => void;
  isTaskListOpen: Boolean;
  newTask: string;
  setNewTask: (text: string) => void;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  addTask: () => void;
}

const TaskInputField: FC<TaskInput> = ({
  setIsTaskListOpen,
  isTaskListOpen,
  newTask,
  setNewTask,
  handleKeyPress,
  addTask,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };
  return (
    <S.ItemInputField>
      <S.DownArrow onClick={() => setIsTaskListOpen(!isTaskListOpen)}>
        <use xlinkHref="icons/sprite.svg#down-arrow" />
      </S.DownArrow>
      <S.Input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="What needs to be done?"
        data-testid="task-input"
      />
      <S.AddTask onClick={addTask} data-testid="add-task-button">
        <use xlinkHref="icons/sprite.svg#add-task" />
      </S.AddTask>
    </S.ItemInputField>
  );
};

export default TaskInputField;
