import IconButton from "../components/buttons/button-icon";
import GameTitle from "../components/game-title";
import Info from "/assets/icons/ic_info.svg";
import User from "/assets/icons/ic_user.svg"
import Users from "/assets/icons/ic_users.svg"
import { Link } from "react-router-dom";
import StartGameModal from "../components/modal/start-game-modal";
import { useState } from "react";


const HomePage = () => {
  const [showModal, setShowModal] = useState(false);


  return (
    <div className="flex items-center justify-center h-screen gap-[220px]">
        {/* Coluna da Esquerda */}
        <div className="pl-[268px] flex flex-col justify-center items-center  gap-[70px] ">
          <GameTitle textSize={"text-[100px]"} stokeWeight={"15px"}></GameTitle>
          <Link to="/rules">
          <IconButton label="how to play?" icon={Info} className="text-[25px] " 
          width={250}
          height={70} />
          </Link>
        </div>

        {/* Coluna da Direita */}
        <div className="flex flex-col items-center gap-[42px] pr-[140px]">
          <IconButton label="player vs player" icon={User} className="text-[32px] " onClick={() =>setShowModal(true) } />
          <IconButton label="player vs computer" icon={Users} className="text-[32px] " onClick={() =>setShowModal (true) } />
        </div>
      
        
        {showModal && (
          
  <div className="fixed inset-0 z-50 w-full flex justify-center mt-[100px] mb-[100px]">     
        <StartGameModal onClose={() => setShowModal(false)} /></div>
      )}
        
      
    </div>
  );
};

export default HomePage;