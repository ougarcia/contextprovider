import "./App.css";

import { useReducer } from "react";

import Logo from "./components/logo";
import PokemonParty from "./components/pokemon-party";
import PokemonSelect from "./components/pokemon-select";
import {
  PokemonPartyContext,
  PokemonPartyDispatchContext,
} from "./lib/PokemonContext";
import initialPokemons from "./lib/initialPokemons";
import pokemonPartyReducer from "./lib/PokemonReducer";

function getRandomSix<T>(arr: T[]): T[] {
  return arr.sort(() => Math.random() - 0.5).slice(0, 6);
}

function App() {
  const [pokemons, dispatch] = useReducer(pokemonPartyReducer, initialPokemons);

  // const handleAddPokemon = (id: number) => dispatch({ id, type: "add" });
  // const handleDeletePokemon = (id: number) => dispatch({ id, type: "remove" });

  return (
    <>
      <Logo />
      <PokemonPartyContext.Provider value={pokemons}>
        <PokemonPartyDispatchContext.Provider value={dispatch}>
          <PokemonParty pokemons={getRandomSix(pokemons)} />
          <PokemonSelect />
        </PokemonPartyDispatchContext.Provider>
      </PokemonPartyContext.Provider>
    </>
  );
}

export default App;
