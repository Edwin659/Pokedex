import { View, Text, Image, StyleSheet } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import POKEMONS from "../../data/pokemon";
const ARTWORK =
"https://raw.githubusercontent.com/PokeAPI/sprites" +
  "/master/sprites/pokemon/other/official-artwork/";

const TYPE_COLORS = {
  Plante: "#78C850",
  Feu: "#F08030",
  Eau: "#6890F0",
  Electrik: "#F8D030",
  Normal:"#9E9C6B",
  Insecte: "#A6B91A",
  Poison:"#a33ea1" ,
  Sol: "#deb650",
  Roche:"#b6a136" ,
  Vol:"#90a1f0" ,
  Psy:"#f85888" ,
  Combat: "#c03028",
  Glace:"#96d9d6" ,
  Spectre:"#735797" ,
  Dragon: "#6F35FC",
  Ténèbres: "#705746",
    // Acier: ,
  Fée:"#D685AD" ,
};

export default function FichePokemon() {
  const { number } = useLocalSearchParams();
  const pokemon = POKEMONS.find(p => p.number === Number(number)); // trouvez le Pokémon avec find 2
  const typeColor = TYPE_COLORS[pokemon.type];
  return (
    <View style={{ flex: 1, alignItems: "center", padding: 24 }}>
      <Stack.Screen options={{ title: pokemon.name }} />
        <Image
          source={{
          uri: `${ARTWORK}${pokemon.number}.png`
        }}
          style={styles.image}

        />
        <View style={styles.infoContainer} >
          <Text style={styles.number}>#{pokemon.number}</Text>
          <Text style={styles.name}>{pokemon.name}</Text>
        <Text style={[styles.type, { backgroundColor: typeColor }]}>{pokemon.type}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200
  },
  infoContainer: {
    flex: 1,
    alignItems: "center"
  },
  name: {
    fontWeight: "bold",
    fontSize: 30,
    paddingVertical:5
  },
  number: {
    color: "grey",
    fontSize:15
  },
  type: {
    padding:10,
    borderRadius: 10,
    textAlign: "center",
  }
});
