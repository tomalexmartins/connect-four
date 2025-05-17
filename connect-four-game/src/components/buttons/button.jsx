const Button = ({ label, textColor = "text-black", onClick }) => (
  <button
    onClick={onClick}
    className={`justify-center w-[500px] h-[83px]  bg-whiteParchment border-[5px] border-black cursor-pointer hover:opacity-50 transition-opacity duration-200`}
  >
    <p
      className={`${textColor} tracking-[1px] font-[Pixel] font-normal text-[50px]`}
    >
      {label}
    </p>
  </button>
);

export default Button;
