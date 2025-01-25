import "./App.css";
import Logo from "./components/logo";
import PokemonParty from "./components/PokemonParty";
import PokemonSelect from "./components/PokemonSelect";
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
