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


describe('PokemonDetails component', () => {

  test('renders the Pokemon description', async () => {
    const { getByText } = render(<PokemonDetails route={{ params: { pokemonId: '1' } }} />);
    const description = await getByText('Description:');
    expect(description).toBeDefined();
  });

  // Add more test cases as needed
});


