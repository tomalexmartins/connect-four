import TextWithStroke from "../helpers/text-stoke";

const Timer = () => {
  return (
    <div className="flex flex-col space-y-2 font-[Pixel] text-[24px] text-white items-center">
      <TextWithStroke
        text={"00:00"}
        textColor={"text-white"}
        textSize={"text-[100px]"}
        strokeWeight={"10px"}
      />
      <TextWithStroke
        text={"Player 1's turn"}
        textColor={"text-white"}
        textSize={"text-[40px]"}
        strokeWeight={"6px"}
      />
      <p></p>
    </div>
  );
};

export default Timer;
