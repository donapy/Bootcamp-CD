import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState(false);
  const fetchPokemon = () => {
    Axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807").then(
      (res) => {
        setPokemon(res.data.results);
      }
    );
  };

  return (
    <div className="App">
      <div>
        <button onClick={fetchPokemon}>Fetch Pokemon</button>
        <hr />
      </div>
      <div>
        {pokemon &&
          pokemon.map((poke, key) => {
            return <p key={key}>{poke.name}</p>;
          })}
      </div>
    </div>
  );
}

export default App;
