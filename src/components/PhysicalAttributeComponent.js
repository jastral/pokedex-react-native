import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { fetchPokemonByGender } from "../api/fetchPokemonByGender";

export default function PhysicalAttributeComponent(pokemonData) {
  const pokemon = pokemonData?.data.pokemon;
  const pokemonSpecies = pokemonData?.data.pokemonSpecies;
  const pokemonType = pokemonData?.data.pokemonType;

  const [gender, setGender] = useState('');

  const id = pokemon?.id; 

  async function getPokemonGender() {
    const data = await fetchPokemonByGender(id);

    return setGender(data);
  }

  useEffect(() => {
    getPokemonGender();
  });

  const EggGroups = pokemonSpecies?.egg_groups.map((eggGroup, idx) => {
    return (
      <Text style={styles.text} key={idx}>
        {eggGroup?.name}
      </Text>
    );
  });

  const Abilities = pokemon?.abilities.map((ability, idx) => {
    return (
      <Text style={styles.text} key={idx}>
        {ability?.ability?.name}
      </Text>
    );
  });

  const Types = pokemon?.types.map((type, idx) => {
    return (
      <Text style={styles.text} key={idx}>
        {type?.type?.name}
      </Text>
    );
  });

  const WeakAgainst = pokemonType?.damage_relations?.double_damage_from.map(
    (damage, idx) => {
      return (
        <Text style={styles.text} key={idx}>
          {damage?.name}
        </Text>
      );
    }
  );

  return (
    <View style={styles.pAContainer}>
      <Text style={styles.heading}>Height:</Text>
      <Text style={styles.text}>{pokemon?.height}</Text>
      <Text style={styles.heading}>Weight:</Text>
      <Text style={styles.text}>{pokemon?.weight}</Text>
      <Text style={styles.heading}>Gender:</Text>
      <Text>{gender}</Text>
      <Text style={styles.heading}>Egg Group:</Text>
      <View>{EggGroups}</View>
      <Text style={styles.heading}>Abilities:</Text>
      <View>{Abilities}</View>
      <Text style={styles.heading}>Types:</Text>
      <View>{Types}</View>
      <Text style={styles.heading}>Weak Against:</Text>
      <View>{WeakAgainst}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontWeight: "bold",
    fontSize: 14,
  },
  text: {
    fontSize: 14,
  },
  pAContainer: {
    
  }
});
