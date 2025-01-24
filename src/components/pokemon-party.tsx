type PokemonPartyItemProps = {
  name: string;
};

type PokemonPartyProps = {
  names: string[];
};

const PokemonPartyItem = ({ name }: PokemonPartyItemProps) => <div>{name}</div>;

const PokemonParty = ({ names }: PokemonPartyProps) => (
  <>
    {names.map((n) => (
      <PokemonPartyItem key={n} name={n} />
    ))}
  </>
);

export default PokemonParty;
