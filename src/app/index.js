import { Text,View, StyleSheet, ScrollView, Pressable } from "react-native";
import Titre from "../components/Titre"
import PokemonCard from "../components/PokemonCard"
import Count from "../components/Count"
import Aide from "../components/Aide"
import Filtre from "../components/Filtre"


const ARTWORK =
"https://raw.githubusercontent.com/PokeAPI/sprites" +
"/master/sprites/pokemon/other/official-artwork/";

const POKEMONS = [
  { number: 1, name: "Bulbizarre", type: "Plante" },
  { number: 4, name: "Salamèche", type: "Feu" },
  { number: 7, name: "Carapuce", type: "Eau" },
  { number: 25, name: "Pikachu", type: "Electrik" },
  { number: 37, name: "Goupix", type: "Feu" },
  { number: 43, name: "Mystherbe", type: "Plante" },
  { number: 172, name: "Pichu", type: "Electrik" },
];



export default function Index() {
  return (
    <ScrollView style={styles.uppercontainer}>
      <Titre />
      <View style={styles.container}>
        <Text>{POKEMONS.length} pokemons possédés</Text>
        <Aide />
      </View>
      {POKEMONS.map((pokemon) => (
        <PokemonCard
          key={pokemon.number}
          number={pokemon.number}
          name={pokemon.name}
          type={pokemon.type}
          ARTWORK={ARTWORK}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  uppercontainer: {
    backgroundColor: "lightgrey",
    padding:10
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  element: {
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    borderRadius:40
  }
});
