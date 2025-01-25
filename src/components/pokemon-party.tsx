import { useContext } from "react";
import PokemonItem from "./pokemon-item";
import { PokemonPartyContext } from "../lib/PokemonContext";

function PokemonParty() {
  const pokemons = useContext(PokemonPartyContext);
  const partyPokemon = pokemons.filter((p) => p.isSelected);
  return (
    <>
      <h1>Current Party</h1>
      <p>Limit of six pokemon per party</p>
      <div>
        {partyPokemon.map((p) => (
          <PokemonItem key={p.id} pokemon={p} />
        ))}
      </div>
    </>
  );
}

export default PokemonParty;
