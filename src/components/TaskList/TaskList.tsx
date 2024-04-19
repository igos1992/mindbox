import { FC } from "react";
import Types from "../Types/Types";
import * as S from "./TaskList.styled";

interface Tasks {
  isTaskListOpen: boolean;
  filteredTasks: () => Types[];
  toggleTaskStatus: (taskId: number) => void;
  removeTask: (taskId: number) => void;
}

const TaskList: FC<Tasks> = ({
  isTaskListOpen,
  filteredTasks,
  toggleTaskStatus,
  removeTask,
}) => {
  return (
    <S.ItemTaskList>
      {isTaskListOpen && (
        <S.TaskList>
          {filteredTasks().map((task) => (
            <S.Marker
              key={task.id}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                color: task.completed ? "#a0a0a0" : "#000",
              }}
            >
              <S.ItemCheckbox>
                <S.StyleCheckbox>
                  <S.Checkbox
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTaskStatus(task.id)}
                  />
                  <S.CheckboxCheckmark className="checkbox__checkmark" />
                </S.StyleCheckbox>
                <S.TextTask>{task.text}</S.TextTask>
              </S.ItemCheckbox>
              <S.Delete onClick={() => removeTask(task.id)}>
                <use xlinkHref="icons/sprite.svg#delete" />
              </S.Delete>
            </S.Marker>
          ))}
        </S.TaskList>
      )}
    </S.ItemTaskList>
  );
};

export default TaskList;
