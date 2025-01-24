import { z } from "zod";
import { writeFileSync } from "node:fs";

const ENDPOINT = "https://pokeapi.co/api/v2/pokemon/?limit=149";

const dataSchema = z.object({
  results: z.array(
    z.object({
      name: z.string(),
      url: z.string().url(),
    }),
  ),
});

async function main() {
  const response = await fetch(ENDPOINT);
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  const data = dataSchema.parse(await response.json()).results;
  const mapped = data.map((e) => {
    const splitUrl = e.url.split("/");
    const id = splitUrl[splitUrl.length - 2];
    return {
      ...e,
      id,
    };
  });
  console.log(mapped);
  writeFileSync("src/assets/data.json", JSON.stringify(mapped, null, 2));
}

try {
  await main();
  process.exit(0);
} catch (e) {
  console.error("fatal error");
  console.error(e);
  process.exit(1);
}
