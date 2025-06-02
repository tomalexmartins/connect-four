const IconButton = ({
  label,
  icon,
  className = "",
  width = 434,
  height = 83,
  onClick,
}) => (
  <button
    onClick={onClick}
    className={`flex items-center px-6 bg-whiteParchment text-black border-[5px] border-black cursor-pointer hover:opacity-50 transition-opacity duration-200 font-[Pixel] gap-2 ${className}`}
    style={{
      width: `${width}px`,
      height: `${height}px`,
    }}
  >
    {/* Label com overflow controlado */}
    <span className="whitespace-nowrap overflow-hidden text-ellipsis">
      {label}
    </span>

    {/* Renderiza o ícone se existir */}
    {icon && (
      <div className="flex items-center">
        {/* Se for ícone específico, repete 2 vezes */}
        {typeof icon === "string" && icon.includes("ic_user.svg") ? (
          <>
            <img src={icon} alt="icon" />
            <img src={icon} alt="icon" />
          </>
        ) : (
          <img src={icon} alt="icon" />
        )}
      </div>
    )}
  </button>
);

export default IconButton;
