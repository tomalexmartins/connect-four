import IconButton from "../components/buttons/button-icon";
import GameTitle from "../components/game-title";
import Info from "/assets/icons/ic_info.svg";
import User from "/assets/icons/ic_user.svg"
import Users from "/assets/icons/ic_users.svg"
const HomePage = () => {
  return (
    <div className="flex items-center justify-center h-screen gap-[220px]">
        {/* Coluna da Esquerda */}
        <div className="pl-[268px] flex flex-col justify-center items-center justify-center gap-[70px] ">
          <GameTitle fontSize={"text-[100px]"} stokeWeight={"15px"}></GameTitle>
          <IconButton label="how to play?" icon={Info} className="text-[30px] " 
          width={250}
          height={70} />
        </div>

        {/* Coluna da Direita */}
        <div className="flex flex-col items-center gap-[42px] pr-[140px]">
          <IconButton label="player vs player" icon={User} className="text-[32px] " />
          <IconButton label="player vs computer" icon={Users} className="text-[32px] "  />
        </div>
      
    </div>
  );
};

export default HomePage;