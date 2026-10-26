import { Text, StyleSheet } from "react-native"

export default function Titre(){
  return( <Text style={styles.titre}>Ed's POKEDEX</Text>)
}

const styles = StyleSheet.create({
  titre: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10
  }
})
