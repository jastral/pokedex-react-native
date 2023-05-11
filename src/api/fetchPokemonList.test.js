import { POKE_LIST_URL, fetchPokemonList } from "./fetchPokemonList";

beforeEach(() => {
  jest.mock("axios");
});



it("Pokemon List Fetched", async () => {
  const response = await fetchPokemonList();

  expect(response[0].name).toEqual('bulbasaur');
});

