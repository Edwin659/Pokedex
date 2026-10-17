import { Text, StyleSheet, View, Image } from "react-native"

const TYPE_COLORS = {
Plante: "#78C850",
Feu: "#F08030",
Eau: "#6890F0",
Electrik: "#F8D030",
};

const CARD_COLORS = {
Plante: "#bae3a5",
Feu: "#f7bd94",
Eau: "#b2c7f7",
Electrik: "#fbe693",
};


export default function PokemonCard({ number, name, type, ARTWORK }) {
  const cardColor = CARD_COLORS[type];
  const typeColor = TYPE_COLORS[type];
  return (
    <View style={[styles.container, { backgroundColor: cardColor }]}>
    {/* <Image source={{ uri: ARTWORK + "4" + ".png" }} />*/}
    <Image
      source={{ uri: `${ARTWORK}${number}.png` }}
      style={styles.image}
    />
    <View>
      <Text style={styles.number}>#{number}</Text>
      <Text style={styles.name}>{name}</Text>
        <Text style={[styles.type,{backgroundColor: typeColor}]}>{type}</Text>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 50,
    margin: 5,
    padding:15
  },
  image: {
    width: 100,
    height: 100
  },
  name: {
    fontWeight: "bold",
    fontSize:20
  },
  number: {
    color: "grey"
  },
  type: {
    padding:10,
    borderRadius: 10,
    textAlign: "center",
    margin: 10,
  }
});
