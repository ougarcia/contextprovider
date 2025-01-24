import { pokemons } from "./assets/data.json";

import "./App.css";

import Logo from "./components/logo";
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
      <Logo />
      <PokemonParty names={getRandomSix(pokemons).map((e) => e.name)} />
      <PokemonSelect />
    </>
  );
}

export default App;
