import RulesBox from "../components/modal/rulesbox";
import GameTitle from "../components/game-title";

function RulesPage() {
  return (
    <div className="min-h-screen bg-blueRoyal">
      {/* Cabeçalho com o título no canto superior esquerdo */}
      <div className="flex justify-between items-start pt-[50px] px-[32px]">
        <GameTitle textSize="text-[48px]" stokeWeight="10px" />
      </div>

      {/* Caixa de regras centralizada, bem mais acima */}
      <div className="flex justify-center mt-0  overflow-y-auto">
        <RulesBox />
      </div>
    </div>
  );
}

export default RulesPage;
