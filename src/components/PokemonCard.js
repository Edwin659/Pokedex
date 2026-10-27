import { Text, StyleSheet, View, Image, Pressable } from "react-native"
import { useState } from "react"

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

const BOUTON_COLORS = {
Plante: "#8dd16b",
Feu: "#f2914d",
Eau: "#6d95f0",
Electrik: "#f8d549",
};

export default function PokemonCard({ number, name, type, ARTWORK }) {
  const cardColor = CARD_COLORS[type];
  const typeColor = TYPE_COLORS[type];
  const boutonColor = BOUTON_COLORS[type]
  const [isCaptured, setCaptured] = useState(true);

  return (
    <View style={[styles.container, { backgroundColor: cardColor }, !isCaptured && {borderColor: typeColor, borderWidth:2} ]}>
    <Image
      source={{ uri: `${ARTWORK}${number}.png` }}
      style={styles.image}
    />
    <View style={styles.infoContainer}>
      <Text style={styles.number}>#{number}</Text>
      <Text style={styles.name}>{name}</Text>
        <Text style={[styles.type,{backgroundColor: typeColor}]}>{type}</Text>
    </View>

      <Pressable style={[styles.button,!isCaptured && {backgroundColor: boutonColor}]} onPress={()=>setCaptured(!isCaptured)}>
        <Text>{isCaptured ? "Capturer ◓" : "Capturé ✓"}</Text>
      </Pressable>

  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-between",
    borderRadius: 50,
    margin: 5,
    padding:15
  },
  containerCaptured: {
    borderColor: "purple",
    borderWidth:2
  },
  image: {
    width: 100,
    height: 100
  },
  infoContainer: {
    flex: 1,
    marginLeft:15
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
    alignSelf: "flex-start",
    margin: 10,
  },
  button: {
    borderColor: "black",
    borderRadius: 10,
    borderWidth:2,
    margin: 5,
    paddingHorizontal: 12,
    minWidth: 120,
    alignItems: "center",
    justifyContent: "center",
    height:40
  },
  buttonClique: {
    backgroundColor: "#fafafa"
  },
  buttonText: {
    color: "black",
    textAlign: "center",
    width:"100%",
  }
});
