import { fetchPokemon } from "./fetchPokemon";

beforeEach(() => {
  jest.mock("axios");
});

it("Pokemon Fetched", async () => {
  const response = await fetchPokemon(1);

  console.log(response.status);

  expect(response.status).toEqual(200);
});

it("Pokemon not Fetched", async () => {
  const response = await fetchPokemon(0);

  console.log(response);

  expect(response).toEqual(undefined);
});