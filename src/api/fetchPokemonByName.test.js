import { fetchPokemonByName } from "./fetchPokemonByName";

beforeEach(() => {
  jest.mock("axios");
});

const data = [
  {
    name: 'ivysaur',
    url: 'https://pokeapi.co/api/v2/pokemon/2/',
    pokeId: '2',
    // type: {[{ type: { name: "fire" } }]},
  }
];

it("fetch pokemon by name", async () => {
  const pokemonName = 'ivysaur'
  const response = await fetchPokemonByName(pokemonName);


  expect(response[0].pokeId).toEqual("2");
});

it("did not fetched pokemon by name", async () => {
  const pokemonName = 'abc'
  const response = await fetchPokemonByName(pokemonName);

  expect(response).toEqual([]);
});


