import { useState } from "react";
import { usePokemon } from "../lib/PokemonContext";
import PokemonItem from "./PokemonItem";

function PokemonSelect() {
  const [searchTerm, setSearchTerm] = useState("");
  const pokemons = usePokemon();

  const filteredPokemons = searchTerm
    ? pokemons.filter((p) =>
        p.name.toLowerCase().startsWith(searchTerm.toLowerCase()),
      )
    : [];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <h1>Search and Select Party</h1>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search Pokemon..."
        />
        {filteredPokemons.length > 0 && (
          <div>
            {filteredPokemons.map((p) => (
              <PokemonItem key={p.id} pokemon={p} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default PokemonSelect;
