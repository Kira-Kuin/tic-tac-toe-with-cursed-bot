import minimax from "./minimax";

const bestMove = (board: BoardElements) => {
  let bestScore = Infinity;
  let move = 0;
  for (let i = 0; i < 9; i++) {
    if (board[i] === "") {
      board[i] = "O";
      const score = minimax(board, 0, true);
      board[i] = "";
      if (score < bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }
  return move;
};

export default bestMove;
