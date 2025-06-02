import { useState } from "react";
import { Link } from "react-router-dom";
import PlayerNameTf from "../text-fields/player-name-textfield";
import Button from "../buttons/button";

function StartGameModal({ onClose, gameMode }) {
  // Estado para armazenar o nome do jogador 1
  const [player1Name, setPlayer1Name] = useState("");
  // Estado para armazenar o nome do jogador 2
  const [player2Name, setPlayer2Name] = useState("");

  // Remove espaços em branco no início/fim para evitar nomes vazios ou com espaços
  const trimmedPlayer1 = player1Name.trim();
  const trimmedPlayer2 = player2Name.trim();

  return (
    <div className="relative bg-whiteParchment px-[40px] py-[38px] border-[5px] border-black text-navy font-[Pixel] shadow-xl w-fit h-fit max-w-[90vw] max-h-[90vh] overflow-y-auto">
      {/* Botão para fechar o modal, posicionado no canto superior direito */}
      <button
        onClick={onClose}
        className="absolute top-[20px] right-[20px] text-[60px] leading-none text-black cursor-pointer hover:text-red-600"
      >
        X
      </button>

      <div className="flex flex-col gap-[40px] items-start w-full">
        {/* Campos para inserção dos nomes dos jogadores */}
        <div className="flex flex-col gap-[26px] w-full">
          {/* Nome do jogador 1 */}
          <PlayerNameTf
            playerNumber="1"
            value={player1Name}
            onChange={setPlayer1Name}
            color="bg-redCrimson"
          />

          {/* Condicional: se modo jogador vs jogador, mostra input do jogador 2 */}
          {gameMode === "pvp" && (
            <PlayerNameTf
              playerNumber="2"
              value={player2Name}
              onChange={setPlayer2Name}
              color="bg-yellowSunshine"
            />
          )}
        </div>

        {/* Botão Play que navega para a tela do jogo */}
        <Link
          to="/game"
          state={{
            // Passa nomes já "trimmed" para evitar espaços em branco
            player1Name: trimmedPlayer1,
            // Se PvP, passa nome do jogador 2, senão "Computer"
            player2Name: gameMode === "pvp" ? trimmedPlayer2 : "Computer",
            gameMode,
          }}
        >
          <Button label="Play" />
        </Link>
      </div>
    </div>
  );
}

export default StartGameModal;
