import SmallButton from "../components/buttons/smallButton";
import GameTitle from "../components/game-title";
import Timer from "../components/timer";
import PlayerCard from "../components/modal/playercard";
import { useState } from "react";
import gameTable from "/assets/gameTable.svg";
import gamePanel from "/assets/gamePanel.svg";
import PauseGameModal from "../components/modal/pause-game-modal";

function GamePage() {
  const [currentPlayer, setCurrentPlayer] = useState("Player 1");
  const [isPaused, setIsPaused] = useState(false);

  const switchTurn = () => {
    setCurrentPlayer((prev) => (prev === "Player 1" ? "Player 2" : "Player 1"));
  };

  return (
    <div className="min-h-screen bg-blueSkypop flex flex-col">
      {/* Top bar */}
      <div className="relative flex items-start justify-between pt-[50px] px-[32px]">
        <GameTitle textSize="text-[48px]" stokeWeight="10px" />

        <div className="absolute top-[20px] left-1/2 -translate-x-1/2">
          <Timer 
  currentPlayer={currentPlayer}
  onTimeUp={switchTurn}
  isPaused={isPaused}
/>
        </div>

        <div className="pt-[4px]">
          <SmallButton label="Menu" click={() => setIsPaused(true)} />
        </div>
      </div>

      {/* Painel e cartas dos jogadores */}
      <div className="flex flex-row justify-between items-start mt-[20px]">
        <div className="pl-[86px] mt-[50px]">
          <PlayerCard side="left" />
        </div>

        <div className="z-20 relative mt-[20px] -mb-[50px]">
          <img
            src={gamePanel}
            className="h-[400px] w-[500px] max-w-full"
            alt="Game Panel"
          />
        </div>

        <div className="pr-[86px] mt-[50px]">
          <PlayerCard side="right" />
        </div>
      </div>

      {/* Game Table ajustada */}
      <div className="flex justify-center z-10 -mt-[10px]">
        <img
          src={gameTable}
          className="h-[200px] max-w-full"
          alt="Game Table"
        />
      </div>

      {/* Modal de pausa */}
      {isPaused && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
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
