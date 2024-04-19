import { useState, useEffect, FC } from "react";
import Types from "../components/Types/Types";
import TaskInputField from "../components/TaskInputField/TaskInputField";
import TaskList from "../components/TaskList/TaskList";
import ItemButton from "../components/ItemButton/ItemButton";
import * as S from "./Todo.styled";

const TodoListApp: FC = () => {
  const [tasks, setTasks] = useState<Types[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [filter, setFilter] = useState<string>("all");
  const [isTaskListOpen, setIsTaskListOpen] = useState<boolean>(true);

  useEffect(() => {
    if (tasks.length === 0) {
      const initialTask: Types = {
        id: 1,
        text: "Тестовое задание",
        completed: false,
      };
      setTasks([initialTask]);
    }
  }, []);

  const addTask = () => {
    if (newTask.trim() !== "") {
      const newTaskObject: Types = {
        id: tasks.length + 1,
        text: newTask,
        completed: false,
      };
      setTasks([...tasks, newTaskObject]);
      setNewTask("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  const toggleTaskStatus = (taskId: number) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const clearTasks = () => {
    setTasks([]);
  };

  const uncompletedTasksCount = tasks.filter((task) => !task.completed).length;

  const filteredTasks = () => {
    switch (filter) {
      case "completed":
        return tasks.filter((task) => task.completed);
      case "uncompleted":
        return tasks.filter((task) => !task.completed);
      default:
        return tasks;
    }
  };

  return (
    <S.SpanNotTracksFavorite>
      <S.Title>todos</S.Title>
      <TaskInputField
        setIsTaskListOpen={setIsTaskListOpen}
        isTaskListOpen={isTaskListOpen}
        handleKeyPress={handleKeyPress}
        newTask={newTask}
        setNewTask={setNewTask}
        addTask={addTask}
      />
      <TaskList
        isTaskListOpen={isTaskListOpen}
        toggleTaskStatus={toggleTaskStatus}
        removeTask={removeTask}
        filteredTasks={filteredTasks}
      />
      <ItemButton
        uncompletedTasksCount={uncompletedTasksCount}
        clearTasks={clearTasks}
        setFilter={setFilter}
      />
    </S.SpanNotTracksFavorite>
  );
};

export default TodoListApp;
