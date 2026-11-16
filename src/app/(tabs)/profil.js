import { Text, View, StyleSheet, Image } from "react-native";
const ARTWORK =
"https://raw.githubusercontent.com/PokeAPI/sprites" +
  "/master/sprites/pokemon/other/official-artwork/";
export default function Profil() {
  return (
    <View>
      <Text style={styles.titre}>EDWIN</Text>
      <Text>Mon pokemon préféré : </Text>
      <View style={{ flex: 1, alignItems: "center", padding: 24 }}>
          <Image
            source={{
            uri: `${ARTWORK}172.png`
          }}
            style={styles.image}
          />
          <View style={styles.infoContainer} >
            <Text style={styles.number}>#172</Text>
            <Text style={styles.name}>Pichu</Text>
          <Text style={[styles.type, { backgroundColor:"#F8D030",
 }]}>Electrik</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  titre: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10
  },
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
})
