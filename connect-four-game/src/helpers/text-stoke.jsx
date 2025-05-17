function TextWithStroke({ text, textColor, textSize, strokeWeight }) {
  const baseClass = `${textSize} font-[Pixel] font-normal tracking-[2px] leading-[1.1]`;

  return (
    <div className={`relative inline-block`}>
      {/* Color Fill */}
      <h1 className={`${baseClass} ${textColor} relative z-10`}>{text}</h1>

      {/* Stroke under */}
      <h1
        className={`${baseClass} text-transparent absolute top-0 left-0 z-0`}
        style={{ WebkitTextStroke: `${strokeWeight} black` }}
      >
        {" "}
        {text}
      </h1>
    </div>
  );
}

export default TextWithStroke;
