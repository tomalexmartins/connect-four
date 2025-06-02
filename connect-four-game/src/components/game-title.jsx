import TextWithStroke from "../helpers/text-stoke";

function GameTitle({ textSize, stokeWeight }) {
  return (
    // Container flexível em linha para alinhar os dois textos lado a lado
    <div className="flex flex-row">
      {/* Primeiro texto "Connect" com cor amarela e estilos passados por props */}
      <TextWithStroke
        text={"Connect"}
        textColor={"text-yellowSunshine"}
        textSize={textSize}
        strokeWeight={stokeWeight}
      />

      {/* Segundo texto "4" com cor vermelha e estilos passados por props */}
      <TextWithStroke
        text={"4"}
        textColor={"text-redCrimson"}
        textSize={textSize}
        strokeWeight={stokeWeight}
      />
    </div>
  );
}

export default GameTitle;
