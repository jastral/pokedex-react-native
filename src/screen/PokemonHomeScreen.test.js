import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator, FlatList, Text, TextInput } from "react-native";
import PokemonDetails from "./PokemonDetails";
import PokemonHomeScreen from "./PokemonHomeScreen";

import { render, fireEvent } from "@testing-library/react-native";

function renderWithNavigation({ screens = {}, navigatorConfig = {} } = {}) {
  const Stack = createNativeStackNavigator();

  const App = (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Pokedex" component={PokemonHomeScreen} />
        <Stack.Screen
          name="PokemonDetails"
          component={PokemonDetails}
          initialParams={{ data: null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

  return { ...render(App) };
}

describe('PokemonHomeScreen', () => {
  it('renders correctly', () => {
    const { getByTestId } = renderWithNavigation();
    const title = getByTestId('title');
    expect(title).toHaveTextContent('Search for any pokémon that exist on this planet');
  });

  test("navigates to PokemonDetails screen on press", () => {
    const navigation = { navigate: jest.fn() };
    const pokemonList = [
      { pokeId: "1", name: "Bulbasaur", type: "Grass/Poison" },
      { pokeId: "2", name: "Charmander", type: "Fire" },
      { pokeId: "3", name: "Squirtle", type: "Water" },
    ];
    const { getByTestId } = render(<PokemonHomeScreen navigation={navigation} />);
    const pokemonGridTile = getByTestId("pokemon-grid-tile-1");
    fireEvent.press(pokemonGridTile);
    expect(navigation.navigate).toHaveBeenCalledWith("PokemonDetails", {
      pokemonId: "1",
      pokemonName: "Bulbasaur",
    });
  });
});
