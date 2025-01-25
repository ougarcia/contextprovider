import type { Pokemon } from "../lib/types";
import { usePokemon, usePokemonDispatch } from "../lib/PokemonContext";

type Props = { pokemon: Pokemon };

function PokemonItem({ pokemon }: Props) {
  const pokemons = usePokemon();
  const dispatch = usePokemonDispatch();
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
}

export default PokemonItem;
