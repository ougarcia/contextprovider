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

function App() {
  const [pokemons, dispatch] = useReducer(pokemonPartyReducer, initialPokemons);

  return (
    <>
      <Logo />
      <PokemonPartyContext.Provider value={pokemons}>
        <PokemonPartyDispatchContext.Provider value={dispatch}>
          <PokemonParty pokemons={pokemons.filter((p) => p.isSelected)} />
          <PokemonSelect />
        </PokemonPartyDispatchContext.Provider>
      </PokemonPartyContext.Provider>
    </>
  );
}

export default App;
