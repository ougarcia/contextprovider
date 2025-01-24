type PokemonPartyItemProps = {
  name: string;
};

type PokemonPartyProps = {
  names: string[];
};

const PokemonPartyItem = ({ name }: PokemonPartyItemProps) => <li>{name}</li>;

const PokemonParty = ({ names }: PokemonPartyProps) => (
  <ul>
    {names.map((n) => (
      <PokemonPartyItem key={n} name={n} />
    ))}
  </ul>
);

export default PokemonParty;
