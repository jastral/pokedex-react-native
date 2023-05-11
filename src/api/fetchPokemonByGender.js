import axios from "axios";

export async function fetchPokemonByGender(pokeId) {

  const POKE_GENDER_URL = `https://pokeapi.co/api/v2/pokemon-species/${pokeId}/`;

  const response = await axios
    .get(POKE_GENDER_URL)
    .then((data) => {
      const genderRate = data?.data?.gender_rate; // Gender rate is a number between 0 and 8
      let gender = "Genderless"; // Default value if the Pokemon has a gender rate of -1 or 0
      if (genderRate > 0) {
        gender = genderRate % 2 === 0 ? "Female" : "Male"; // Calculate gender based on gender rate
      }
      return gender;
    })
    .catch((error) => console.error(`Error: ${error}`));

  return response;
}

