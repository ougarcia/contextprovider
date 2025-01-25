import type { Action, Pokemon } from "./types";

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

export default pokemonPartyReducer;
