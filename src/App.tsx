import pokeball from "./assets/pokeball.svg";
import { pokemons } from "./assets/data.json";
import "./App.css";
import PokemonParty from "./components/pokemon-party";
import PokemonSelect from "./components/pokemon-select";

function getRandomSix<T>(arr: T[]): T[] {
  return arr.sort(() => Math.random() - 0.5).slice(0, 6);
}

function App() {
  // create a `pokemonPartyReducer` and add it to context
  // add the pokemons data into context instead of prop drilling.

  return (
    <>
      <div>
        <img src={pokeball} className="logo" alt="React logo" />
      </div>
      <h1>Current Party</h1>
      <div>
        <PokemonParty names={getRandomSix(pokemons).map((e) => e.name)} />
      </div>
      <h1>Select Party</h1>
      <PokemonSelect />
    </>
  );
}

export default App;
