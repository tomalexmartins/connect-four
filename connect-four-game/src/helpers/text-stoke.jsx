function TextWithStroke({ text, textColor, textSize, strokeWeight }) {
  // Base de classes para o texto que será usado em ambos os elementos <h1>
  const baseClass = `${textSize} font-[Pixel] font-normal tracking-[2px] leading-[1.1]`;

  return (
    // Container relativo para posicionar o texto com contorno atrás do texto preenchido
    <div className={`relative inline-block`}>
      {/* Texto colorido visível (fill) com z-index acima */}
      <h1 className={`${baseClass} ${textColor} relative z-10`}>{text}</h1>

      {/* Texto com contorno (stroke) atrás do texto colorido */}
      <h1
        className={`${baseClass} text-transparent absolute top-0 left-0 z-0`}
        style={{ WebkitTextStroke: `${strokeWeight} black` }} // Aplica o contorno preto usando CSS
      >
        {text}
      </h1>
    </div>
  );
}

export default TextWithStroke;
