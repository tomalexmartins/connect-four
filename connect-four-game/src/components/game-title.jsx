function GameTitle({ fontSize, stokeWeight }) {
  return (
    <div className="flex flex-row">
      <div className="relative inline-block">
        {/* Color Fill */}
        <h1
          className={`${fontSize} font-[Pixel] font-normal tracking-[2px] leading-[1.1] text-yellowSunshine relative text z-10`}
        >
          Connect
        </h1>
        {/* Stroke under */}
        <h1
          className={`${fontSize} font-[Pixel] font-normal tracking-[2px] leading-[1.1] absolute top-0 left-0 text-transparent z-0`}
          style={{
            WebkitTextStroke: `${stokeWeight} black`,
          }}
        >
          Connect
        </h1>
      </div>
      <div className="relative inline-block">
        {/* Color Fill */}
        <h1
          className={`${fontSize} font-[Pixel] font-normal tracking-[2px] leading-[1.1] text-redCrimson relative z-10`}
        >
          4
        </h1>
        {/* Stroke under */}
        <h1
          className={`${fontSize} font-[Pixel] font-normal tracking-[2px] leading-[1.1] absolute top-0 left-0 text-transparent z-0`}
          style={{
            WebkitTextStroke: `${stokeWeight} black`,
          }}
        >
          4
        </h1>
      </div>
    </div>
  );
}

export default GameTitle;
