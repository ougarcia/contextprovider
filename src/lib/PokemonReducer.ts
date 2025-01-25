import type { Action, Pokemon } from "./types";

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

export default pokemonPartyReducer;
