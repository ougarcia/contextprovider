import type { Pokemon } from "../lib/types";

import { createContext, useContext, useReducer } from "react";

import { pokemons as baseData } from "../assets/data.json";

type Action = { type: "add" | "remove"; id: number };

export const PokemonContext = createContext<Pokemon[]>([]);

export const PokemonDispatchContext =
  createContext<React.Dispatch<Action> | null>(null);

export function PokemonProvider({ children }: { children: React.ReactNode }) {
  const [pokemons, dispatch] = useReducer(pokemonPartyReducer, initialPokemons);

  return (
    <PokemonContext.Provider value={pokemons}>
      <PokemonDispatchContext.Provider value={dispatch}>
        {children}
      </PokemonDispatchContext.Provider>
    </PokemonContext.Provider>
  );
}

export function usePokemon() {
  return useContext(PokemonContext);
}

export function usePokemonDispatch() {
  return useContext(PokemonDispatchContext);
}

function pokemonPartyReducer(pokemon: Pokemon[], action: Action): Pokemon[] {
  switch (action.type) {
    case "add": {
      const partyCount = pokemon.filter((p) => p.isSelected).length;
      if (partyCount === 6) {
        return pokemon;
      }
      return pokemon.map((p) =>
        p.id === action.id ? { ...p, isSelected: true } : p,
      );
    }
    case "remove": {
      return pokemon.map((p) =>
        p.id === action.id ? { ...p, isSelected: false } : p,
      );
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const initialPokemons: Pokemon[] = baseData
  .map((p) => ({
    ...p,
    isSelected: false,
  }))
  .sort((a, b) => a.id - b.id);
