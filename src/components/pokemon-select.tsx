import { useContext, useState } from "react";
import { PokemonPartyContext } from "../lib/PokemonContext";
import type { Pokemon } from "../lib/types";
import PokemonItem from "./pokemon-item";

const PokemonSelect = () => {
  const [state, setState] = useState<Pokemon[]>([]);
  const pokemons = useContext(PokemonPartyContext);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length === 0) {
      setState([]);
      return;
    }
    setState(
      pokemons.filter((pn) =>
        pn.name.toLowerCase().startsWith(value.toLowerCase()),
      ),
    );
  };

  return (
    <>
      <h1>Select Party</h1>
      <div>
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Search Pokemon..."
        />
        {state.length > 0 && (
          <div>
            {state.map((p) => (
              <PokemonItem key={p.id} pokemon={p} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default PokemonSelect;
