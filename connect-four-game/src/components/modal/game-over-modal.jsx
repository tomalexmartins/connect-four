import Button from "../buttons/button";

function GameOverModal({ winner, onRestart }) {
  return (
    <div className="relative bg-whiteParchment px-[40px] py-[38px] border-[5px] border-black font-[Pixel] shadow-xl w-fit h-fit max-w-[90vw] max-h-[90vh] overflow-y-auto">
      {/* Mostra o nome do vencedor, ou mensagem de empate se não houver vencedor */}
      {winner ? (
        <h2 className="text-3xl font-bold mb-4 text-center">{winner} wins!</h2>
      ) : (
        <h2 className="text-3xl font-bold mb-4 text-center">It's a draw!</h2>
      )}

      {/* Botão para reiniciar o jogo, chama a função onRestart */}
      <Button label="Play Again" onClick={onRestart} />
    </div>
  );
}

export default GameOverModal;
