import { pokemons as baseData } from "../assets/data.json";
import type { Pokemon } from "./types";

const initialPokemons: Pokemon[] = baseData.map((p) => ({
  ...p,
  isSelected: false,
}));

export default initialPokemons;
