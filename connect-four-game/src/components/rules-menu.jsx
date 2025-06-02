import { Link } from "react-router-dom";
import TextWithStroke from "../helpers/text-stoke";

function RulesMenu() {
  return (
    <div className="relative w-[640px] bg-whiteParchment px-[36px] py-[28px] border-[5px] border-black text-navy font-[Pixel] shadow-xl">
      {/* Botão para fechar as regras e voltar para a home */}
      <Link
        to="/"
        className="absolute top-[20px] right-[20px] text-[48px] leading-none text-black hover:text-red-600 cursor-pointer"
      >
        X
      </Link>

      <div>
        {/* Título centralizado */}
        <div className="flex justify-center mb-[16px]">
          <TextWithStroke
            text="Rules"
            textColor="text-black"
            textSize="text-[40px]"
            strokeWeight="1px"
          />
        </div>

        {/* Conteúdo das regras */}
        <div className="space-y-[20px] text-[15px] leading-tight">
          {/* Seção Objetivo */}
          <div>
            <TextWithStroke
              text="Objective"
              textColor="text-redCrimson"
              textSize="text-[26px]"
              strokeWeight="2px"
            />
            <p className="mt-[6px] text-black">
              Be the first player to connect four of your own colored discs in a
              row— horizontally, vertically, or diagonally. Use strategy,
              timing, and a bit of luck to outsmart your opponent. Keep an eye
              out for special cells that can earn you a extra move!
            </p>
          </div>

          {/* Seção Como Jogar */}
          <div>
            <TextWithStroke
              text="How to Play ?"
              textColor="text-yellowSunshine"
              textSize="text-[26px]"
              strokeWeight="2px"
            />
            <ol className="mt-[6px] list-decimal list-inside space-y-[2px] pl-[2px] text-black">
              <li>
                At the start, both players enter their names. The starting
                player and disc color are chosen randomly.
              </li>
              <li>
                Players take turns dropping a disc into one of the seven
                columns. The disc will fall to the lowest available space in
                that column.
              </li>
              <li>
                Each player has 10 seconds to make a move. If time runs out, the
                turn is skipped.
              </li>
              <li>
                If a disc lands on a special cell (marked with a white circle),
                the player receives a extra move.
              </li>
              <li>
                The game ends when:
                <ul className="list-disc list-inside ml-4">
                  <li>
                    A player connects four discs in a row (horizontal, vertical,
                    or diagonal), or
                  </li>
                  <li>The board is completely filled, resulting in a draw.</li>
                </ul>
              </li>
              <li>When a game ends, a modal appears offering a rematch.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RulesMenu;
