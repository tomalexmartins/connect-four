import { useNavigate } from "react-router-dom";
import TextWithStroke from "C:/Users/selin/connect-four/connect-four-game/src/helpers/text-stoke.jsx";

function RulesBox() {
  const navigate = useNavigate();

  return (
    <div className="relative w-[640px] bg-whiteParchment px-[36px] py-[28px] border-[5px] border-black text-navy font-[Pixel] shadow-xl">
      {/* Botão X */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-[20px] right-[20px] text-[48px] leading-none text-black hover:text-red-600"
      >
        X
      </button>

      <div>
        {/* Título principal: Rules */}
        <div className="flex justify-center mb-[16px]">
          <TextWithStroke
            text="Rules"
            textColor="text-black"
            textSize="text-[40px]"
            strokeWeight="1px"
          />
        </div>

        <div className="space-y-[20px] text-[15px] leading-tight">
          {/* Objective */}
          <div>
            <TextWithStroke
              text="Objective"
              textColor="text-redCrimson"
              textSize="text-[26px]"
              strokeWeight="2px"
            />
            <p className="mt-[6px] text-black font-pixel">
              Be the first player to connect four of your own colored discs in a row—
              horizontally, vertically, or diagonally. Use strategy, timing, and a bit of luck to
              outsmart your opponent. Keep an eye out for special cells that can earn you an extra
              move!
            </p>
          </div>

          {/* How to Play */}
          <div>
            <TextWithStroke
              text="How to Play ?"
              textColor="text-yellowSunshine"
              textSize="text-[26px]"
              strokeWeight="2px"
            />
            <ol className="mt-[6px] list-decimal list-inside space-y-[2px] pl-[2px] text-black font-pixel">
              <li>At the start, both players enter their names. The starting player and disc color are chosen randomly.</li>
              <li>Players take turns dropping a disc into one of the seven columns. The disc will fall to the lowest available space in that column.</li>
              <li>Each player has 10 seconds to make a move. If time runs out, the turn is skipped.</li>
              <li>If a disc lands on a special cell (marked with a white circle), the player receives an extra turn.</li>
              <li>
                The game ends when:
                <ul className="list-disc list-inside ml-4">
                  <li>A player connects four discs in a row (horizontal, vertical, or diagonal), or</li>
                  <li>The board is completely filled, resulting in a draw.</li>
                </ul>
              </li>
              <li>When a game ends, a modal appears offering a rematch.</li>
              <li>In rematches, the player who started the previous game goes second.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RulesBox;
