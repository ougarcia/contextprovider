import { useState } from "react";
import { pokemons } from "../assets/data.json";

const POKEMON_NAMES = pokemons.map((p) => p.name);

const PokemonSelect = () => {
  const [state, setState] = useState<string[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length === 0) {
      setState([]);
      return;
    }
    setState(
      POKEMON_NAMES.filter((pn) =>
        pn.toLowerCase().startsWith(value.toLowerCase()),
      ),
    );
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleSearch}
        placeholder="Search Pokemon..."
      />
      {state.length > 0 && (
        <div>
          {state.map((pokemon) => (
            <div key={pokemon}>{pokemon}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PokemonSelect;
