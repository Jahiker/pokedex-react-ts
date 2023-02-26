import "./App.css";

import { Items, Pokemon, Pokemons } from "./pages";

import { Route, HashRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Pokemons />} />
          <Route path="/pokemons" element={<Pokemons />} />
          <Route path="/pokemons/:name" element={<Pokemon />} />
          <Route path="/items" element={<Items />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
