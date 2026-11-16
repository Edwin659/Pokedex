import { Tabs } from "expo-router";
import { Image } from "react-native";
export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{
        title: "Pokédex",
        tabBarIcon: ({ color, size }) => (
          <Image
            source={require("../../../assets/images/tabIcons/explore.png")}
            style={{
              width: size,
              height: size,
              tintColor:color,
            }}
            resizeMode="contain"
          />
        )
      }} />
      <Tabs.Screen name="profil" options={{
        title: "Profil",
        tabBarIcon: ({ color, size }) => (
          <Image
            source={require("../../../assets/images/tabIcons/home.png")}
            style={{
              width: size,
              height: size,
              tintColor:color,
            }}
            resizeMode="contain"
          />
          )
        }}
      />
    </Tabs>
  );
}
