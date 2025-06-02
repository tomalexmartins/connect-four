function PlayerNameTf({ playerNumber, value, onChange, color }) {
  return (
    // Container vertical com espaçamento entre título e input
    <div className="flex flex-col space-y-[16px]">
      {/* Texto indicando o número do jogador */}
      <p className="font-[Pixel] font-normal leading-[1.1] text-[32px]">
        Player {playerNumber}
      </p>

      {/* Campo de input para o nome do jogador */}
      <input
        type="text"
        value={value} // valor atual do input
        onChange={(e) => onChange(e.target.value)} // chama função passada para atualizar o nome do jogador
        placeholder={`insert player ${playerNumber} name`} // placeholder dinâmico com número do jogador
        className={`${color} text-black placeholder-black font-[Pixel] font-normal tracking-[1px] leading-[1.1] w-full h-[83px] border-[5px] pl-[16px]`}
      />
    </div>
  );
}

export default PlayerNameTf;
