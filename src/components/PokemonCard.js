import { Text, StyleSheet, View, Image, Pressable } from "react-native"
import { useState } from "react"

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

const CARD_COLORS = {
Plante: "#bae3a5",
Feu: "#f7bd94",
Eau: "#b2c7f7",
Electrik: "#fbe693",
Normal:"#BCBB96" ,
Insecte: "#daea69",
Poison:"#d48dd2" ,
Sol: "#ead190",
Roche:"#ccb853" ,
Vol:"#bdc7f6" ,
Psy:"#fba1bc" ,
Combat: "#e0736d",
Glace: "#ceedec",
Spectre:"#9a83b8" ,
Dragon: "#a580fd",
Ténèbres: "#94735d",
  // Acier: ,
  Fée:"#e9bed3" ,
};

const BOUTON_COLORS = {
Plante: "#8dd16b",
Feu: "#f2914d",
Eau: "#6d95f0",
Electrik: "#f8d549",
Normal:"#918f5f" ,
Insecte:"#bacf1d" ,
Poison:"#b545b3" ,
Sol: "#e2bf65",
Roche:"#b6a136" ,
Vol:"#a6b4f3" ,
Psy:"#f97099" ,
Combat: "#d3372e",
Glace:"#a9e0dd" ,
Spectre:"#8063a5" ,
Dragon: "#814efc",
Ténèbres: "#705746",
  // Acier: ,
  Fée:"#dc98ba" ,
};

export default function PokemonCard({ number, name,captured, onCapture, type, ARTWORK }) {
  const cardColor = CARD_COLORS[type];
  const typeColor = TYPE_COLORS[type];
  const boutonColor = BOUTON_COLORS[type]

  return (
    <View style={[styles.container, { backgroundColor: cardColor }, captured && {borderColor: typeColor, borderWidth:2} ]}>
    <Image
      source={{ uri: `${ARTWORK}${number}.png` }}
      style={styles.image}
    />
    <View style={styles.infoContainer}>
      <Text style={styles.number}>#{number}</Text>
      <Text style={styles.name}>{name}</Text>
        <Text style={[styles.type,{backgroundColor: typeColor}]}>{type}</Text>
    </View>

      <Pressable style={[styles.button,captured && {backgroundColor: boutonColor}]} onPress={onCapture}>
        <Text>{!captured ? "Capturer ◓" : "Capturé ✓"}</Text>
      </Pressable>

  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    alignItems:"center"
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
