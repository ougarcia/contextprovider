import { useContext } from "react";
import { Pokemon } from "../lib/types";
import {
  PokemonPartyContext,
  PokemonPartyDispatchContext,
} from "../lib/PokemonContext";

type PokemonItemProps = {
  pokemon: Pokemon;
};

const PokemonItem = ({ pokemon }: PokemonItemProps) => {
  const dispatch = useContext(PokemonPartyDispatchContext);
  const pokemons = useContext(PokemonPartyContext);
  if (!dispatch) {
    throw new Error("PokemonPartyDisaptchContext Provider missing");
  }
  const partySize = pokemons.filter((p) => p.isSelected).length;

  const handleChange = (id: number, isSelected: boolean) => {
    const type = isSelected ? "add" : "remove";
    dispatch({ type, id });
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={pokemon.isSelected}
        onChange={() => handleChange(pokemon.id, !pokemon.isSelected)}
        disabled={!pokemon.isSelected && partySize >= 6}
      />
      <span>{pokemon.name}</span>
    </div>
  );
};

export default PokemonItem;
