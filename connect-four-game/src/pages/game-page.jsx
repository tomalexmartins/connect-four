import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

import SmallButton from "../components/buttons/smallButton";
import GameTitle from "../components/game-title";
import Timer from "../components/timer";
import PlayerCard from "../components/player-card";
import PauseGameModal from "../components/modal/pause-game-modal";
import GameOverModal from "../components/modal/game-over-modal";

import gameTable from "/assets/game_table.svg";
import gamePanel from "/assets/game_panel.svg";
import player1Disk from "/assets/disk_red.svg";
import player2Disk from "/assets/disk_yellow.svg";
import hoverDisk1 from "/assets/hover_red.svg";
import hoverDisk2 from "/assets/hover_yellow.svg";

import {
  DEFAULT_PLAYER1,
  DEFAULT_PLAYER2,
  COMPUTER_NAME,
} from "../helpers/constants";

function GamePage() {
  // Recebe os nomes dos jogadores e modo de jogo via URL
  const location = useLocation();
  const { player1Name, player2Name, gameMode } = location.state || {};

  // Define nomes dos jogadores
  const p1Name = player1Name?.trim() || DEFAULT_PLAYER1;
  const p2Name =
    gameMode === "pvp" ? player2Name?.trim() || DEFAULT_PLAYER2 : COMPUTER_NAME;

  // Decide aleatoriamente quem começa
  const [currentPlayer, setCurrentPlayer] = useState(() =>
    Math.random() < 0.5 ? p1Name : p2Name
  );

  // Pausa
  const [isPaused, setIsPaused] = useState(false);
  // Tabuleiro (6x7)
  const [grid, setGrid] = useState(() =>
    Array.from({ length: 6 }, () => Array(7).fill(null))
  );

  // Coluna onde o rato está em cima
  const [hoveredColumn, setHoveredColumn] = useState(null);
  // Estado do jogo
  const [gameOver, setGameOver] = useState(false);
  // Vencedor
  const [winner, setWinner] = useState(null);

  // Alterna entre os jogadores
  const switchTurn = () => {
    setCurrentPlayer((prev) => (prev === p1Name ? p2Name : p1Name));
  };

  // Coloca um disco na coluna clicada
  const dropDisk = (column) => {
    if (grid[0][column] !== null || isPaused || gameOver) return;

    const newGrid = grid.map((row) => [...row]);

    let placedRow = -1;
    for (let row = 5; row >= 0; row--) {
      if (newGrid[row][column] === null) {
        newGrid[row][column] = currentPlayer;
        placedRow = row;
        break;
      }
    }
    if (placedRow === -1) return;

    setGrid(newGrid);

    // Verifica se houve vitória
    if (checkWin(newGrid, currentPlayer)) {
      setWinner(currentPlayer);
      setGameOver(true);
      return;
    }

    // Verifica se o tabuleiro está cheio (empate)
    if (newGrid.every((row) => row.every((cell) => cell !== null))) {
      setWinner(null);
      setGameOver(true);
      return;
    }

    // Passa a vez ao próximo jogador
    switchTurn();
  };

  // Função que verifica 4 em linha em várias direções
  const checkWin = (grid, player) => {
    const rows = 6,
      cols = 7,
      connect = 4;

    const checkDirection = (startRow, startCol, rowDir, colDir) => {
      for (let i = 0; i < connect; i++) {
        const r = startRow + i * rowDir;
        const c = startCol + i * colDir;
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] !== player) {
          return false;
        }
      }
      return true;
    };

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (grid[row][col] !== player) continue;

        if (
          checkDirection(row, col, 1, 0) || // vertical
          checkDirection(row, col, 0, 1) || // horizontal
          checkDirection(row, col, 1, 1) || // diagonal para baixo-direita
          checkDirection(row, col, 1, -1) // diagonal para baixo-esquerda
        ) {
          return true;
        }
      }
    }
    return false;
  };

  // Recomeça o jogo, limpa tudo e escolhe o jogador inicial
  const resetGame = () => {
    setGrid(Array.from({ length: 6 }, () => Array(7).fill(null)));
    setGameOver(false);
    setWinner(null);
    setCurrentPlayer(Math.random() < 0.5 ? p1Name : p2Name);
    setIsPaused(false);
  };

  // Jogada automática do computador (escolhe coluna válida aleatória)
  const computerMove = () => {
    const validColumns = [];
    for (let col = 0; col < 7; col++) {
      if (grid[0][col] === null) validColumns.push(col);
    }

    if (validColumns.length === 0) return;

    const randomCol =
      validColumns[Math.floor(Math.random() * validColumns.length)];

    dropDisk(randomCol);
  };

  // Executa jogada do computador após delay, se for a vez dele
  useEffect(() => {
    if (gameOver || isPaused) return;

    if (currentPlayer === COMPUTER_NAME) {
      const timer = setTimeout(() => {
        computerMove();
      }, 700);

      return () => clearTimeout(timer);
    }
  }, [currentPlayer, gameOver, isPaused, grid]);

  return (
    <div className="min-h-screen bg-blueSkypop flex flex-col">
      {/* Barra superior com título, timer e botão de menu */}
      <div className="relative flex items-start justify-between pt-[50px] px-[32px]">
        <GameTitle textSize="text-[48px]" stokeWeight="10px" />
        <div className="absolute top-[20px] left-1/2 -translate-x-1/2">
          <Timer
            currentPlayer={currentPlayer}
            onTimeUp={switchTurn}
            isPaused={isPaused || gameOver}
          />
        </div>
        <div className="pt-[4px]">
          <SmallButton label="Menu" click={() => setIsPaused(true)} />
        </div>
      </div>

      {/* Área do jogo com cartões dos jogadores e tabuleiro */}
      <div className="mt-auto">
        <div className="flex flex-row justify-between items-start mt-[20px]">
          {/* Cartão do jogador 1 */}
          <div className="pl-[86px] mt-[50px]">
            <PlayerCard side="left" playerName={p1Name} />
          </div>

          {/* Tabuleiro do jogo */}
          <div className="z-20 relative">
            <div className="relative w-[500px] h-[390px] mx-auto">
              {/* Disco que aparece em cima ao passar com o rato */}
              {hoveredColumn !== null &&
                !gameOver &&
                currentPlayer !== COMPUTER_NAME && (
                  <img
                    src={currentPlayer === p1Name ? hoverDisk1 : hoverDisk2}
                    className="absolute w-[80px] h-[80px] transition-opacity"
                    style={{
                      top: "-70px",
                      left: `${hoveredColumn * 70 + 5}px`,
                      zIndex: 30,
                    }}
                    alt="Hover disk"
                  />
                )}

              {/* Discos colocados no tabuleiro */}
              <div className="absolute top-0 left-0 w-full h-full z-10">
                {grid.map((row, rowIndex) =>
                  row.map((cell, colIndex) => {
                    if (!cell) return null;
                    const src = cell === p1Name ? player1Disk : player2Disk;
                    return (
                      <motion.img
                        key={`${rowIndex}-${colIndex}-${cell}`}
                        src={src}
                        initial={{ y: -100 }}
                        animate={{ y: rowIndex * 60 + 40 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="absolute w-[63px] h-[63px]"
                        style={{ left: `${colIndex * 70 + 5}px`, zIndex: 20 }}
                        alt={`Disk ${cell}`}
                      />
                    );
                  })
                )}
              </div>

              {/* Zonas clicáveis para jogar */}
              {[...Array(7)].map((_, colIndex) => (
                <div
                  key={colIndex}
                  className={`absolute h-full cursor-pointer ${
                    gameOver || currentPlayer === COMPUTER_NAME
                      ? "pointer-events-none"
                      : ""
                  }`}
                  style={{
                    left: `${colIndex * 70}px`,
                    width: "70px",
                    top: 0,
                    zIndex: 40,
                  }}
                  onMouseEnter={() => setHoveredColumn(colIndex)}
                  onMouseLeave={() => setHoveredColumn(null)}
                  onClick={() => dropDisk(colIndex)}
                />
              ))}

              {/* Imagem do painel do jogo (por cima) */}
              <img
                src={gamePanel}
                alt="Game Panel"
                className="absolute top-0 left-0 z-20 pointer-events-none"
              />
            </div>
          </div>

          {/* Cartão do jogador 2 */}
          <div className="pr-[86px] mt-[50px]">
            <PlayerCard side="right" playerName={p2Name} />
          </div>
        </div>

        {/* Imagem da mesa do jogo abaixo */}
        <div className="flex justify-center z-10">
          <img
            src={gameTable}
            alt="Game Table"
            className="h-[200px] max-w-full"
          />
        </div>
      </div>

      {/* Modal de pausa */}
      {isPaused && !gameOver && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/30">
          <PauseGameModal
            onContinue={() => setIsPaused(false)}
            onRestart={() => {
              resetGame();
              setIsPaused(false);
            }}
          />
        </div>
      )}

      {/* Modal de fim de jogo */}
      {gameOver && (
        <div className="fixed inset-0 z-50 flex flex-col justify-center items-center">
          <GameOverModal winner={winner} onRestart={resetGame} />
        </div>
      )}
    </div>
  );
}

export default GamePage;
