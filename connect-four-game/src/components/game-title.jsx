function GameTitle({ fontSize }) {
  return (
    <div className="flex flex-row">
      <h1
        className={`${fontSize} font-pixel font-normal tracking-[2px] leading-[1.1]`}
      >
        Connect
      </h1>
      <h1
        className={`${fontSize} font-pixel font-normal tracking-[2px] leading-[1.1]`}
      >
        4
      </h1>
    </div>
  );
}

export default GameTitle;
