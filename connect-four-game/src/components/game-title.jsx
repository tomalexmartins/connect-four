import TextWithStroke from "../helpers/text-stoke";

function GameTitle({ textSize, stokeWeight }) {
  return (
    <div className="flex flex-row">
      <TextWithStroke
        text={"Connect"}
        textColor={"text-yellowSunshine"}
        textSize={textSize}
        strokeWeight={stokeWeight}
      />
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
