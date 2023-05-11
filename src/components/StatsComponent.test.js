import React from 'react';
import {ActivityIndicator, FlatList, Text, TextInput} from 'react-native';
import renderer from 'react-test-renderer';
import StatsComponent from './StatsComponent';
import { pokemonData } from '../mock/data';
import { fetchPokemonByGender } from '../api/fetchPokemonByGender';

it(`Checking Carousel component Rendering`, () => {
  const tree = renderer.create(<StatsComponent data={pokemonData}></StatsComponent>);
  expect(tree).toMatchSnapshot();
});

