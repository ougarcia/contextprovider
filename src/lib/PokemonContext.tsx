import type { Action, Pokemon } from "../lib/types";
import React, { createContext, useReducer } from "react";
import initialPokemons from "./initialPokemons";
import pokemonPartyReducer from "./PokemonReducer";

export const PokemonPartyContext = createContext<Pokemon[]>([]);
export const PokemonPartyDispatchContext =
  createContext<React.Dispatch<Action> | null>(null);

export function PokemonProvider({ children }: { children: React.ReactNode }) {
  const [pokemons, dispatch] = useReducer(pokemonPartyReducer, initialPokemons);

  return (
    <PokemonPartyContext.Provider value={pokemons}>
      <PokemonPartyDispatchContext.Provider value={dispatch}>
        {children}
      </PokemonPartyDispatchContext.Provider>
    </PokemonPartyContext.Provider>
  );
}
