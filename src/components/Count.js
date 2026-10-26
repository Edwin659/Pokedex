import { Text, StyleSheet, View, Pressable } from "react-native";
import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  return (
  <View>
    <View style={styles.count}>
      <Text>Pokeball obtenus : </Text>
        <Text>{count}</Text>
    </View>
    <View style={styles.count}>
      <Pressable style={styles.bouton} onPress={() => setCount(count + 1)}>
        <Text>+</Text>
      </Pressable>
      <Pressable style={styles.bouton} onPress={() => setCount(count - 1)}>
        <Text>-</Text>
      </Pressable>
      <Pressable style={styles.bouton} onPress={() => setCount(0)}>
        <Text>Reset</Text>
        </Pressable>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  count: {
    flex: 1,
    flexDirection:"row"
  },
  bouton: {
    backgroundColor: "white",
    padding: 10,
    borderRadius:40
  }
})
