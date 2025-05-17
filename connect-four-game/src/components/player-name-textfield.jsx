function PlayerNameTf({ playerNumber, value, onChange, color }) {
  return (
    <div className="flex flex-col space-y-[16px]">
      <p className="font-[Pixel] font-normal leading-[1.1] text-[32px]">
        Player {playerNumber}
      </p>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={`insert player ${playerNumber} name`}
        className={`${color} text-black placeholder-black font-[Pixel] font-normal tracking-[1px] leading-[1.1] w-[500px] h-[83px] border-[5px] pl-[16px]`}
      />
    </div>
  );
}

export default PlayerNameTf;
