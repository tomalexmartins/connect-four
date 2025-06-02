import RulesMenu from "../components/rules-menu";
import GameTitle from "../components/game-title";

function RulesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Cabeçalho com o título do jogo, alinhado ao topo e à esquerda */}
      <div className="flex justify-between items-start pt-[50px] px-[32px]">
        <GameTitle textSize="text-[48px]" stokeWeight="10px" />
      </div>

      {/* Área principal da página, centraliza o componente com as regras */}
      <div className="flex flex-1 justify-center items-center overflow-y-auto">
        <RulesMenu />
      </div>
    </div>
  );
}

export default RulesPage;
