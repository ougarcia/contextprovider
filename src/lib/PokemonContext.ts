import { createContext } from "react";
import type { Action, Pokemon } from "../lib/types";

export const PokemonPartyContext = createContext<Pokemon[]>([]);
export const PokemonPartyDispatchContext =
  createContext<React.Dispatch<Action> | null>(null);
