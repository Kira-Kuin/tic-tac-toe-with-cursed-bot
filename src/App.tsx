import { type FormEvent, useRef, useState } from "react";
import Board from "./components/Board";

const App = () => {
  const [board, setBoard] = useState<BoardElements>(Array(9).fill(""));
  const [username, setUsername] = useState("");
  const r = useRef<HTMLInputElement | null>(null);

  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    setUsername(r.current?.value as string);
    console.log(e);
  };

  return (
    <div className="flex flex-col gap-16 justify-center items-center h-screen max-md:px-8">
      {!username ? (
        <form
          onSubmit={handleClick}
          className="flex flex-col gap-6">
          <input
            ref={r}
            type="text"
            placeholder="Enter Name to Play With"
            className="border-2 border-black rounded-md px-4 py-2 placeholder:text-black font-semibold text-xl"
          />
          <div className="mx-auto">
            <button className="bg-gradient-to-t from-blue-500 to-cyan-500 rounded-md w-fit px-6 py-3 font-semibold">
              Submit
            </button>
          </div>
        </form>
      ) : (
        <>
          <p className="text-6xl font-semibold max-md:text-3xl">{username}(X) vs Xenos Bot(O)</p>
          <Board
            boardArray={board}
            setBoardElement={setBoard}
          />
          <p className="absolute bottom-5 left-5">made with love by Xenos ❤️</p>
        </>
      )}
    </div>
  );
};

export default App;
