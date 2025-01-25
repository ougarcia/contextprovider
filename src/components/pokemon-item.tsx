import { Pokemon } from "../lib/types";

type PokemonItemProps = {
  pokemon: Pokemon;
};

const PokemonItem = (props: PokemonItemProps) => (
  <div>{props.pokemon.name}</div>
);

export default PokemonItem;
