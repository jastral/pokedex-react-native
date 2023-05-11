import axios from "axios";

export async function fetchPokemon(pokeId) {
  const POKE_URL = `https://pokeapi.co/api/v2/pokemon/${pokeId}`;

  const response = await axios
    .get(POKE_URL)
    .catch((error) => console.error(`Error: ${error}`));

  return response;
}
