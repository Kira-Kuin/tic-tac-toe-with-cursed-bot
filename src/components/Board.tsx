import { Dispatch, SetStateAction, useEffect, useState } from "react";
import checkWinner from "../functions/check-winner";
import bestMove from "../functions/best-move";

const Board = ({
  boardArray,
  setBoardElement,
}: {
  boardArray: BoardElements;
  setBoardElement: Dispatch<SetStateAction<BoardElements>>;
}) => {
  const [isXNext, setIsXNext] = useState(true);

  useEffect(() => {
    const winner = checkWinner(boardArray);
    if (winner !== null) {
      alert(`Game Over! ${winner === "tie" ? "It's a tie!" : `${winner} wins!`}`);
      setBoardElement(Array(9).fill(""));
      setIsXNext(true);
    } else if (!isXNext) {
      const xenosBot = bestMove(boardArray);
      const newArray = [...boardArray];
      newArray[xenosBot] = "O";
      setBoardElement(newArray);
      setIsXNext(true);
    }
  }, [isXNext, boardArray, setBoardElement]);

  const updateTable = (idx: number) => {
    if (boardArray[idx] !== "" || !isXNext) return;
    const newArray = [...boardArray];
    newArray[idx] = "X";
    setBoardElement(newArray);
    setIsXNext(false);
  };

  return (
    <div className="grid grid-cols-3 grid-rows-3 size-[500px] gap-3">
      {boardArray.map((item, index) => (
        <button
          onClick={() => updateTable(index)}
          className="bg-gradient-to-t from-blue-500 to-cyan-500 rounded-md text-5xl grid place-items-center"
          key={index}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default Board;
