import { fetchPokemonByGender } from "./fetchPokemonByGender";

beforeEach(() => {
  jest.mock("axios");
});

it("fetch pokemon's gender", async () => {
  const pokeId = 3
  const response = await fetchPokemonByGender(pokeId);

  expect(response).toEqual("Male");
});

it("did not fetched pokemon's gender", async () => {
  const pokemonName = 'abc'
  const response = await fetchPokemonByGender(pokemonName);

  expect(response).toEqual(undefined);
});


