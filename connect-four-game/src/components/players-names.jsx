import { useState } from "react";
import PlayerNameTf from "./player-name-textfield";

function PlayerNamesMenu() {
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");

  return (
    <div className="space-y-[26px]">
      <PlayerNameTf
        playerNumber="1"
        value={player1Name}
        onChange={setPlayer1Name}
        color="redCrimson"
      />
      <PlayerNameTf
        playerNumber="2"
        value={player2Name}
        onChange={setPlayer2Name}
        color="redCrimson"
      />
    </div>
  );
}

export default PlayerNamesMenu;
