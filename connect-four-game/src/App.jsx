function App() {
  return (
    <div className="min-h-screen bg-cream text-navy font-pixel flex flex-col items-center justify-center">
      <h1 className="text-5xl text-redish">Connect Four</h1>
      <p className="text-blueish mt-4">Player vs Player</p>
      <button className="mt-6 bg-yellow text-navy px-4 py-2 rounded shadow-lg hover:bg-redish hover:text-white transition">
        Start Game
      </button>
    </div>
  );
}

export default App;
