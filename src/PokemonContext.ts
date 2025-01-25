import { createContext } from "react";

// TODO: consolidate these types
type Pokemon = { id: number; name: string; isSelected: boolean };
type Action = { type: "add" | "remove"; id: number };

export const PokemonPartyContext = createContext<Pokemon[] | null>(null);
export const PokemonPartyDispatchContext =
  createContext<React.Dispatch<Action> | null>(null);
