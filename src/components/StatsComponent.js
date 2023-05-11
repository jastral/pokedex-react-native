import { View, Text, StyleSheet } from "react-native";

export default function StatsComponent(pokemonData) {
  const pokemon = pokemonData?.data?.pokemon;

  const Stats = pokemon?.stats.map((stat, idx) => {
    return (
      <View key={idx}>
      <Text style={styles.heading}>
        {(stat?.stat?.name).toUpperCase()}: 
      </Text>
      <Text style={styles.text}>
        {stat?.base_stat}
      </Text>
      </View>
    );
  });
  return <View style={styles.searchContainer}>{Stats}</View>;
}

const styles = StyleSheet.create({
  heading: {
    fontWeight: "bold",
    fontSize: 14,
  },
  text: {
    fontSize: 14,
  },
});
