import { useEffect, useState, useRef } from "react";
import TextWithStroke from "../helpers/text-stoke";

const Timer = ({ currentPlayer, onTimeUp, isPaused }) => {
  // Estado para controlar os segundos passados
  const [seconds, setSeconds] = useState(0);
  // useRef para garantir que a função onTimeUp seja chamada apenas uma vez por vez
  const timeoutTriggered = useRef(false);

  // Sempre que o jogador atual muda, reseta o timer e o flag de timeout
  useEffect(() => {
    setSeconds(0);
    timeoutTriggered.current = false;
  }, [currentPlayer]);

  // Efeito para controlar o intervalo que incrementa o timer a cada segundo
  useEffect(() => {
    // Se estiver pausado, o tempo não corre
    if (isPaused) return;

    // Intervalo que incrementa os segundos a cada 1 segundo (1000 ms)
    const interval = setInterval(() => {
      setSeconds((prev) => {
        const next = prev + 1;

        // Quando chega a 10 segundos, dispara a função onTimeUp depois de 1 segundo (somente uma vez)
        if (next === 10 && !timeoutTriggered.current) {
          timeoutTriggered.current = true; // Marca que o timeout foi disparado para não repetir
          setTimeout(() => {
            onTimeUp();
          }, 1000);
        }

        return next;
      });
    }, 1000);

    // Limpa o intervalo quando o componente desmonta ou a dependência muda
    return () => clearInterval(interval);
  }, [isPaused, onTimeUp]);

  // Função para formatar o tempo no formato 00:ss com zero à esquerda
  const formatTime = (sec) => `00:${sec.toString().padStart(2, "0")}`;

  return (
    <div className="flex flex-col font-[Pixel] items-center space-y-1">
      {/* Mostra o tempo formatado com o componente de texto com contorno */}
      <TextWithStroke
        text={formatTime(seconds)}
        textColor="text-white"
        textSize="text-[64px]"
        strokeWeight="8px"
      />

      {/* Mostra de quem é o turno atual formatado com o componente de texto com contorno */}
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
