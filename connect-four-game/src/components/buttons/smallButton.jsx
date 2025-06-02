// Componente de botão pequeno estilizado para ser usado com uma label e um evento de clique
const SmallButton = ({ label, click }) => (
  <button
    onClick={click}
    className={`justify-center w-[117px] h-[53px] bg-whiteParchment border-[5px] border-black cursor-pointer hover:opacity-50 transition-opacity duration-200`}
  >
    <p className={`tracking-[1px] font-[Pixel] font-normal text-[30px]`}>
      {label}
    </p>
  </button>
);

export default SmallButton;
