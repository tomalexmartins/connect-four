import GameTitle from "../components/game-title";

function HomePage() {
  return (
    <div className="min-h-screen bg-cream text-navy font-pixel flex flex-col items-center justify-center">
      <h1 className="text-5xl text-redish">HOME PAGE</h1>
      <GameTitle fontSize={"text-[100px]"} />
    </div>
  );
}

export default HomePage;
