import { FC } from "react";
import * as S from "./ItemButton.styled";

interface Buttons {
  uncompletedTasksCount: number;
  setFilter: (text: string) => void;
  clearTasks: () => void;
}

const ItemButton: FC<Buttons> = ({
  uncompletedTasksCount,
  setFilter,
  clearTasks,
}) => {
  return (
    <S.ItemButton>
      <S.RemainingTasksText>
        {uncompletedTasksCount} items left
      </S.RemainingTasksText>
      <S.ItemButtonTaskStatus>
        <S.Button onClick={() => setFilter("all")}>All</S.Button>
        <S.Button onClick={() => setFilter("completed")}>Completed</S.Button>
        <S.Button onClick={() => setFilter("uncompleted")}>
          Uncompleted
        </S.Button>
      </S.ItemButtonTaskStatus>
      <S.Button onClick={clearTasks}>Clear Completed</S.Button>
    </S.ItemButton>
  );
};

export default ItemButton;
