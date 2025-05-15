import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page";
import RulesPage from "./pages/rules-page";
import GamePage from "./pages/game-page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rules" element={<RulesPage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </Router>
  );
}

export default App;
