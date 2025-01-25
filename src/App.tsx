import "./App.css";
import Logo from "./components/logo";
import PokemonParty from "./components/pokemon-party";
import PokemonSelect from "./components/pokemon-select";
import { PokemonProvider } from "./lib/PokemonContext";

function App() {
  return (
    <>
      <Logo />
      <PokemonProvider>
        <PokemonParty />
        <PokemonSelect />
      </PokemonProvider>
    </>
  );
}

export default App;
