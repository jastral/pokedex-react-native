import { fetchPokemonData } from "./fetchPokemonData";

beforeEach(() => {
  jest.mock("axios");
});

it("fetch pokemon data", async () => {
  const response = await fetchPokemonData(1);

  expect(response.pokemon.name).toEqual('bulbasaur');
});

// it("did not fetched pokemon data", async () => {
//   const response = await fetchPokemonData(0);

//   console.log(response);
//   expect(response).toEqual(undefined);
// });

