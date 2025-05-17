const Button = ({ label, textColor = "text-black" }) => (
  <button
    className={`justify-center w-[500px] h-[83] bg-whiteParchment border-[5px] border-black `}
  >
    <p
      className={`${textColor} tracking-[1px] font-[Pixel] font-normal text-[50px]`}
    >
      {label}
    </p>
  </button>
);

export default Button;
