// Timer.jsx
import { useEffect, useState } from "react";
import TextWithStroke from "../helpers/text-stoke";

const Timer = ({ currentPlayer, onTimeUp, isPaused }) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev >= 10) {
          onTimeUp();
          return 0;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentPlayer, isPaused]);

  const formatTime = (sec) => `00:${sec.toString().padStart(2, "0")}`;

  return (
    <div className="flex flex-col font-[Pixel] items-center space-y-1">
      <TextWithStroke
        text={formatTime(seconds)}
        textColor="text-white"
        textSize="text-[64px]"
        strokeWeight="8px"
      />
      <TextWithStroke
        text={`${currentPlayer}'s turn`}
        textColor="text-white"
        textSize="text-[20px]"
        strokeWeight="3px"
      />
    </div>
  );
};

export default Timer;
