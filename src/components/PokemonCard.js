import { Text, StyleSheet, View, Image, Pressable } from "react-native"

const TYPE_COLORS = {
  Grass: "#78C850",
  Fire: "#F08030",
  Water: "#6890F0",
  Electric: "#F8D030",
  Normal:"#9E9C6B",
  Bug: "#A6B91A",
  Poison:"#a33ea1" ,
  Ground: "#deb650",
  Rock:"#b6a136" ,
  Flying:"#90a1f0" ,
  Psychic:"#f85888" ,
  Fighting: "#c03028",
  Ice:"#96d9d6" ,
  Ghost:"#735797" ,
  Dragon: "#6F35FC",
  Dark: "#705746",
  Fairy:"#D685AD" ,
};

const CARD_COLORS = {
  Grass: "#bae3a5",
  Fire: "#f7bd94",
  Water: "#b2c7f7",
  Electric: "#fbe693",
  Normal:"#BCBB96" ,
  Bug: "#daea69",
  Poison:"#d48dd2" ,
  Ground: "#ead190",
  Rock:"#ccb853" ,
  Flying:"#bdc7f6" ,
  Psychic:"#fba1bc" ,
  Fighting: "#e0736d",
  Ice: "#ceedec",
  Ghost:"#9a83b8" ,
  Dragon: "#a580fd",
  Dark: "#94735d",
  Fairy:"#e9bed3" ,
};

const BOUTON_COLORS = {
  Grass: "#8dd16b",
  Fire: "#f2914d",
  Water: "#6d95f0",
  Electric: "#f8d549",
  Normal:"#918f5f" ,
  Bug:"#bacf1d" ,
  Poison:"#b545b3" ,
  Ground: "#e2bf65",
  Rock:"#b6a136" ,
  Flying:"#a6b4f3" ,
  Psychic:"#f97099" ,
  Fighting: "#d3372e",
  Ice:"#a9e0dd" ,
  Ghost:"#8063a5" ,
  Dragon: "#814efc",
  Dark: "#705746",
  Fairy:"#dc98ba" ,
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
    padding: 15,
  },
  containerCaptured: {
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
  type:
{    borderRadius: 10,
    textAlign: "center",
    margin: 10,
    padding:5
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
