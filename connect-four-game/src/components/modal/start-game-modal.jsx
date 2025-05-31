import { useState } from "react";
import PlayerNameTf from "./player-name-textfield";
import Button from "../buttons/button";
import { Link } from "react-router-dom";

function StartGameModal({onClose}) {

  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");

  
  // 🔍 A rota atual
  
  return (

    <div className="relative w-[600px] bg-whiteParchment px-[40px] py-[38px] border-[5px] border-black text-navy font-[Pixel] shadow-xl">
      {/* Botão de fechar que redireciona para a Home */}
      <button
        onClick={onClose}
        className="absolute top-[20px] right-[20px] text-[60px] leading-none text-black hover:text-red-600"
      >
        X
      </button>
      
    
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
        <Link to="/game">
          <Button label="Play"></Button>
        </Link>
      </div>
    </div>
  );
}

export default StartGameModal;
