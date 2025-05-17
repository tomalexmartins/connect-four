import SmallButton from "../components/buttons/smallButton";
import GameTitle from "../components/game-title";
import Timer from "../components/timer";
import { useState } from "react";
import gameTable from "/assets/gameTable.svg";
import gamePanel from "/assets/gamePanel.svg";
import PauseGameModal from "../components/modal/pause-game-modal";

function GamePage() {
  //mudar para os nomes dos players que vem da modal, mudados ou default.
  const [currentPlayer, setCurrentPlayer] = useState("Player 1");
  const [isPaused, setIsPaused] = useState(false);

  const switchTurn = () => {
    setCurrentPlayer((prev) => (prev === "Player 1" ? "Player 2" : "Player 1"));
  };

  return (
    <div className="min-h-screen bg-blueSkypop flex flex-col">
      <div className="flex flex-row justify-between pt-[50px] px-[32px]">
        <GameTitle textSize={"text-[48px]"} stokeWeight={"10px"} />
        <Timer />
        <SmallButton label="Menu" click={() => setIsPaused(true)} />
      </div>

      <div className="flex flex-row justify-between">
        <div className="pl-[86px]">
          <h1>CartãoPlayer1</h1>
        </div>
        <div className="z-20 relative pt-[50px] -mb-[86.7px]">
          <img
            src={gamePanel}
            className="h-[594px] max-w-full"
            alt="Game Panel"
          />
        </div>
        <div className="pr-[86px]">
          <h1>CartãoPlayer2</h1>
        </div>
      </div>

      <div className="flex justify-center relative z-10">
        <img
          src={gameTable}
          className="h-[353px] max-w-full"
          alt="Game Table"
        />
      </div>
      {isPaused && (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
          <PauseGameModal
            onContinue={() => setIsPaused(false)}
            onRestart={() => {
              setIsPaused(false);
            }}
          />
        </div>
      )}
    </div>
  );
}

export default GamePage;
