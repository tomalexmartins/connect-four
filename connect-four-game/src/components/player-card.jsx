import TextWithStroke from "../helpers/text-stoke";
import symbolRed from "/assets/player_red.svg";
import symbolYellow from "/assets/player_yellow.svg";
import { DEFAULT_PLAYER1, DEFAULT_PLAYER2 } from "../helpers/constants";

const PlayerCard = ({ side = "left", playerName, score = "0" }) => {
  // Define se o jogador está na esquerda
  const isLeft = side === "left";

  // Define a cor do texto e o ícone baseado no lado do jogador
  const textColor = isLeft ? "text-redCrimson" : "text-yellowSunshine";
  const playerIcon = isLeft ? symbolRed : symbolYellow;

  // Define o nome padrão caso o nome do jogador não seja informado
  const defaultName = isLeft ? DEFAULT_PLAYER1 : DEFAULT_PLAYER2;

  // Usa o nome do jogador, ou o nome padrão, convertendo para maiúsculas
  const displayName = playerName?.trim()
    ? playerName.toUpperCase()
    : defaultName.toUpperCase();

  return (
    <div className="bg-whiteParchment border-[8px] border-black w-[214px] h-[295px] flex flex-col items-center justify-start pt-[16px] shadow-md font-[Pixel]">
      {/* Ícone do jogador */}
      <img
        src={playerIcon}
        alt="playerIcon"
        className="w-[150px] h-[110px] mb-[10px]"
      />

      {/* Nome do jogador */}
      <div className="w-[180px] text-center mb-[10px]">
        <TextWithStroke
          text={displayName}
          textColor={textColor}
          textSize="text-[30px]"
          strokeWeight="2px"
        />
      </div>

      {/* Texto "SCORE:" */}
      <TextWithStroke
        text="SCORE:"
        textColor="text-black"
        textSize="text-[30px]"
        strokeWeight="0.5px"
      />

      {/* Pontuação do jogador */}
      <TextWithStroke
        text={score}
        textColor="text-black"
        textSize="text-[30px]"
        strokeWeight="1px"
      />
    </div>
  );
};

export default PlayerCard;
