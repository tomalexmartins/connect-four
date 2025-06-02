import Button from "../buttons/button";
import { Link } from "react-router-dom";

function PauseGameModal({ onContinue, onRestart }) {
  return (
    <div className="bg-whiteParchment px-[50px] py-[38px] border-[5px]">
      {/* Título centralizado do modal */}
      <p className="flex justify-center tracking-[1px] font-[Pixel] font-normal text-[64px]">
        Pause
      </p>

      {/* Botões alinhados verticalmente com espaço */}
      <div className="flex flex-col justify-center pt-[46px] pb-[37px] space-y-[42px]">
        {/* Botão para continuar o jogo */}
        <Button label="Continue Game" onClick={onContinue} />

        {/* Botão para reiniciar o jogo */}
        <Button label="Restart Game" onClick={onRestart} />

        {/* Botão para sair do jogo, linka para a página inicial "/" */}
        <Link to="/">
          <Button textColor="text-redCrimson" label="Quit Game" />
        </Link>
      </div>
    </div>
  );
}

export default PauseGameModal;
