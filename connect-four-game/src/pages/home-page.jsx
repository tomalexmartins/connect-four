import IconButton from "../components/buttons/button-icon";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center h-screen gap-[220px]">
        {/* Coluna da Esquerda */}
        <div className="pl-[268px] flex flex-col text-[30px]">
          
          <IconButton label="how to play?" className="text-[30px] " 
          width={250}
          height={70} />
        </div>

        {/* Coluna da Direita */}
        <div className="flex flex-col items-center gap-[42px] pr-[140px]">
          <IconButton label="player vs player" className="text-[32px] " />
          <IconButton label="player vs computer"className="text-[32px] "  />
        </div>
      
    </div>
  );
};

export default HomePage;