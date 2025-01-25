import type { Pokemon } from "../lib/types";
import PokemonItem from "./pokemon-item";

type PokemonPartyProps = {
  pokemons: Pokemon[];
};

const PokemonParty = ({ pokemons }: PokemonPartyProps) => (
  <>
    <h1>Current Party</h1>
    <p>Limit of six pokemon per party</p>
    <div>
      {pokemons.map((p) => (
        <PokemonItem key={p.id} pokemon={p} />
      ))}
    </div>
  </>
);

export default PokemonParty;
