import { Button, Image, Text, View, StyleSheet } from "react-native";
import { useEffect, useLayoutEffect, useState } from "react";
import { fetchPokemonData } from "../api/fetchPokemonData";
import PhysicalAttributeComponent from "../components/PhysicalAttributeComponent";
import StatsComponent from "../components/StatsComponent";
// import { MEALS } from "../data/dummy-data";

export default function PokemonDetails({ route, navigation }) {
  const pokeID = route.params.pokemonId;
  const [pokemonData, setPokemonData] = useState([]);

  const getPokemonDetails = async () => {
    const data = await fetchPokemonData(pokeID);
    setPokemonData(data);
  };

  useEffect(() => {
    getPokemonDetails();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeID}.png`,
          }}
        />
        <Text></Text>
      </View>
      <View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.heading}>Description:</Text>
        </View>
        <View style={styles.phisicalSttributesContainer}>
          <Text style={styles.heading}>Physical Attributes:</Text>
          <PhysicalAttributeComponent data={pokemonData} />
        </View>
        <View style={styles.statsContainer}>
          <Text style={styles.heading}>Stats:</Text>
          <StatsComponent data={pokemonData} />
        </View>
        <View style={styles.evolutionChainContainer}>
          <Text style={styles.heading}>Evolution Chain:</Text>
        </View>
        <View style={styles.outerContainer}>
          <Button title="Previous" />
          <Button title="Next" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#a6cbf0",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
  },
  tinyLogo: {
    width: 150,
    height: 150,
  },
});
