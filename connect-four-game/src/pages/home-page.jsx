import IconButton from "../components/buttons/button-icon";
import GameTitle from "../components/game-title";
import StartGameModal from "../components/modal/start-game-modal";

import Info from "/assets/icons/ic_info.svg";
import User from "/assets/icons/ic_user.svg";
import Users from "/assets/icons/ic_users.svg";

import { Link } from "react-router-dom";
import { useState } from "react";

const HomePage = () => {
  // Estado para mostrar ou esconder a modal de início de jogo
  const [showModal, setShowModal] = useState(false);
  // Estado para guardar o modo de jogo escolhido (pvp ou pvc)
  const [gameMode, setGameMode] = useState(null);

  return (
    <div className="flex items-center justify-center h-screen gap-[220px]">
      {/* Lado esquerdo com título e link para regras */}
      <div className="pl-[268px] flex flex-col justify-center items-center gap-[70px]">
        <GameTitle textSize={"text-[100px]"} stokeWeight={"15px"} />
        <Link to="/rules">
          <IconButton
            label="how to play?"
            icon={Info}
            className="text-[25px]"
            width={255}
            height={70}
          />
        </Link>
      </div>

      {/* Lado direito com botões para escolher modo de jogo */}
      <div className="flex flex-col items-center gap-[42px] pr-[140px]">
        <IconButton
          label="player vs player"
          icon={User}
          className="text-[32px]"
          onClick={() => {
            setGameMode("pvp"); // Define modo PvP
            setShowModal(true); // Mostra a modal para começar o jogo
          }}
        />
        <IconButton
          label="player vs computer"
          icon={Users}
          className="text-[32px]"
          onClick={() => {
            setGameMode("pvc"); // Define modo PvC
            setShowModal(true); // Mostra a modal para começar o jogo
          }}
        />
      </div>

      {/* Modal para iniciar o jogo aparece quando showModal é true */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex justify-center p-40">
          <StartGameModal
            gameMode={gameMode} // Passa o modo de jogo selecionado para a modal
            onClose={() => setShowModal(false)} // Fecha a modal
          />
        </div>
      )}
    </div>
  );
};

export default HomePage;
