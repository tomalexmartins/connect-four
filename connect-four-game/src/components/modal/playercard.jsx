import TextWithStroke from "../../helpers/text-stoke";
import symbolRed from "/assets/symbolRed.svg";
import symbolYellow from "/assets/symbolYellow.svg";

const PlayerCard = ({ side = "left" }) => {
  const isLeft = side === "left";
  const strokeColor = isLeft ? "#E63946" : "#FFF600"; // red / yellow
  const symbol = isLeft ? symbolRed : symbolYellow;

  return (
    <div
      className="bg-whiteParchment border-[8px] border-black w-[214px] h-[295px] flex flex-col items-center justify-start pt-[16px] shadow-md"
      style={{ fontFamily: "Pixel" }}
    >
      {/* Ícone grande e bem centralizado */}
      <img
        src={symbol}
        alt="Player Symbol"
        className="w-[150px] h-[110px] mb-[10px]"
      />

      {/* Texto PLAYER com stroke colorido */}
      <div className="relative inline-block mb-[10px]">
        <h1 className="text-[40px] font-[Pixel] tracking-[2px] leading-[1.1] text-black relative z-10">
          PLAYER
        </h1>
        <h1
          className="text-[40px] font-[Pixel] tracking-[2px] leading-[1.1] text-transparent absolute top-0 left-0 z-0"
          style={{ WebkitTextStroke: `2px ${strokeColor}` }}
        >
          PLAYER
        </h1>
      </div>

      {/* SCORE */}
      <TextWithStroke
        text="SCORE:"
        textColor="text-black"
        textSize="text-[30px]"
        strokeWeight="0.5px"
       
      />

      <TextWithStroke
        text="0"
        textColor="text-black"
        textSize="text-[30px]"
        strokeWeight="1px"
      />
    </div>
  );
};

export default PlayerCard;
