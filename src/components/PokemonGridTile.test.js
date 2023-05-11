import React from "react";
import { ActivityIndicator, FlatList, Text, TextInput } from "react-native";
import renderer from "react-test-renderer";
import PokemonGridTile from "./PokemonGridTile";

const pressHandler = jest.fn();

it("renders correctly", () => {
  const tree = renderer.create(
    <PokemonGridTile
      name="charmander"
      pokeId={4}
      onPress={() => {}}
      type={[{ type: { name: "fire" } }]}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});


it("renders correctly", () => {
  const tree = renderer.create(
    <PokemonGridTile
      name="bulbasaur"
      pokeId={1}
      onPress={() => {}}
      type={[{ type: { name: "grass" } }, { type: { name: "poison" } }]}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});