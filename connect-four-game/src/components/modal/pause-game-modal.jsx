import Button from "../buttons/button";
import { Link } from "react-router-dom";

function PauseGameModal({ onContinue, onRestart }) {
  return (
    <div className="bg-whiteParchment px-[50px] py-[38px] border-[5px]">
      <p className="flex justify-center tracking-[1px] font-[Pixel] font-normal text-[64px]">
        Pause
      </p>
      <div className="flex flex-col justify-center pt-[46px] pb-[37px] space-y-[42px]">
        <Button label="Continue Game" onClick={onContinue}></Button>
        <Button label="Restart Game" onClick={onRestart}></Button>
        <Link to="/">
          <Button textColor="text-redCrimson" label="Quit Game" />
        </Link>
      </div>
    </div>
  );
}

export default PauseGameModal;
