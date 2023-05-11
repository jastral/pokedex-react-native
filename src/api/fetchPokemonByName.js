import axios from "axios";
import { fetchPokemonList } from "./fetchPokemonList";

export async function fetchPokemonByName(pokeName) {
  const pokemonList = await fetchPokemonList();

  const filteredList = pokemonList.filter((pokemon) => pokemon?.name.includes(pokeName));
  console.log(filteredList);

  return filteredList;
}
