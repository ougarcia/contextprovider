import { z } from "zod";
import { existsSync, writeFileSync } from "node:fs";

const LIMIT = 149;
const ENDPOINT = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

const dataSchema = z.object({
  results: z.array(
    z.object({
      name: z.string(),
      url: z.string().url(),
    }),
  ),
});

const getSpriteUrl = (id: number) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/${id}.png`;

async function main() {
  const response = await fetch(ENDPOINT);
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  const data = dataSchema.parse(await response.json()).results;
  const pokemons = data.map((e) => {
    const splitUrl = e.url.split("/");
    const id = Number(splitUrl[splitUrl.length - 2]);
    return {
      ...e,
      id,
    };
  });
  writeFileSync("src/assets/data.json", JSON.stringify(pokemons, null, 2));

  // fetch sprites
  for (const pokemon of pokemons) {
    const filename = `src/assets/sprites/${pokemon.id}.png`;
    if (existsSync(filename)) {
      continue;
    }
    const spriteUrl = getSpriteUrl(pokemon.id);
    const response = await fetch(spriteUrl);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const blob = await response.blob();
    const buffer = Buffer.from(await blob.arrayBuffer());
    writeFileSync(filename, buffer);
  }
}

try {
  await main();
  process.exit(0);
} catch (e) {
  console.error("fatal error");
  console.error(e);
  process.exit(1);
}
