import axios from "axios";
import { fetchPokemon } from "./fetchPokemon";

// export const POKE_LIST_URL = "https://pokeapi.co/api/v2/pokemon";



export async function fetchPokemonList() {

  // const offset = 20 * (page - 1);
  const POKE_LIST_URL = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=786`;

  const res = await axios
    .get(POKE_LIST_URL)
    .catch((error) => console.error(`Error: ${error}`));

  const data = res?.data?.results;

  const promises = data.map(async (pokemon) => {
    const { url } = pokemon;
    const pokeId = url.substring(34, url.length - 1);
    const response = await fetchPokemon(pokeId);
    const type = response?.data?.types;

    return {...pokemon, pokeId, type}
  })
  const pokemons = Promise.all(promises);



  return pokemons;
}
