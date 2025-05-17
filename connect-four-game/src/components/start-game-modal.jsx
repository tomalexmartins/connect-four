import { useState } from "react";
import PlayerNameTf from "./player-name-textfield";
import Button from "./buttons/button";

function StartGameModal() {
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");

  return (
    <div className="bg-whiteParchment px-[50px] py-[38px] border-[5px]">
      <div className="space-y-[72px]">
        <div className="space-y-[26px]">
          <PlayerNameTf
            playerNumber="1"
            value={player1Name}
            onChange={setPlayer1Name}
            color="bg-redCrimson"
          />
          <PlayerNameTf
            playerNumber="2"
            value={player2Name}
            onChange={setPlayer2Name}
            color="bg-yellowSunshine"
          />
        </div>
        <Button label="Play"></Button>
      </div>
    </div>
  );
}

export default StartGameModal;
