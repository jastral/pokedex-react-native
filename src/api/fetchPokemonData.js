import axios from "axios";
import { fetchPokemon } from "./fetchPokemon";

export async function fetchPokemonData(pokeId) {
  const POKE_SPECIES_URL = `https://pokeapi.co/api/v2/pokemon-species/${pokeId}`;
  const POKE_TYPE_URL = `https://pokeapi.co/api/v2/type/${pokeId}`;

  const pokemonData = await fetchPokemon(pokeId);

  const pokemonSpeciesData = await axios
    .get(POKE_SPECIES_URL)
    .catch((error) => console.error(`Error: ${error}`));

  const pokemonTypeData = await axios
    .get(POKE_TYPE_URL)
    .catch((error) => console.error(`Error: ${error}`));

  const pokemon = pokemonData?.data;
  const pokemonSpecies = pokemonSpeciesData?.data;
  const pokemonType = pokemonTypeData?.data;


  return {pokemon, pokemonSpecies, pokemonType};
}
