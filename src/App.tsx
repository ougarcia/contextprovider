import "./App.css";

import { useReducer } from "react";

import Logo from "./components/logo";
import PokemonParty from "./components/pokemon-party";
import PokemonSelect from "./components/pokemon-select";
import {
  PokemonPartyContext,
  PokemonPartyDispatchContext,
} from "./lib/PokemonContext";
import type { Action, Pokemon } from "./lib/types";
import initialPokemons from "./lib/initialPokemons";

function getRandomSix<T>(arr: T[]): T[] {
  return arr.sort(() => Math.random() - 0.5).slice(0, 6);
}

function pokemonPartyReducer(pokemon: Pokemon[], action: Action): Pokemon[] {
  const changedPokemonIndex = pokemon.findIndex((p) => p.id === action.id);
  const head = pokemon.slice(0, changedPokemonIndex);
  const tail = pokemon.slice(changedPokemonIndex + 1);
  switch (action.type) {
    case "add": {
      const partyCount = pokemon.filter((p) => p.isSelected).length;
      if (partyCount === 6) {
        return pokemon;
      }
      return [
        ...head,
        { ...pokemon[changedPokemonIndex], isSelected: true },
        ...tail,
      ];
    }
    case "remove": {
      return [
        ...head,
        { ...pokemon[changedPokemonIndex], isSelected: false },
        ...tail,
      ];
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
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
