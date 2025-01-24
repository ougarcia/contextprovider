import reactLogo from "./assets/react.svg";
import { pokemons } from "./assets/data.json";
import viteLogo from "/vite.svg";
import "./App.css";
import PokemonParty from "./components/pokemon-party";
import PokemonSelect from "./components/pokemon-select";

function getRandomSix<T>(arr: T[]): T[] {
  return arr.sort(() => Math.random() - 0.5).slice(0, 6);
}

function App() {
  // create a `PokemonSelect` component and put it somewhere on the tree
  // create a `pokemonPartyReducer` and add it to context
  // add the pokemons data into context instead of prop drilling.

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl font-bold underline">Vite + React</h1>
      <div>
        <PokemonParty names={getRandomSix(pokemons).map((e) => e.name)} />
      </div>
      <PokemonSelect />
    </>
  );
}

export default App;
