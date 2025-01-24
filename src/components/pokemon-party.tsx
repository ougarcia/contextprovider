type PokemonPartyItemProps = {
  name: string;
};

type PokemonPartyProps = {
  names: string[];
};

const PokemonPartyItem = ({ name }: PokemonPartyItemProps) => <div>{name}</div>;

const PokemonParty = ({ names }: PokemonPartyProps) => (
  <>
    <h1>Current Party</h1>
    <div>
      {names.map((n) => (
        <PokemonPartyItem key={n} name={n} />
      ))}
    </div>
  </>
);

export default PokemonParty;
