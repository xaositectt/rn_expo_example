import { Button, Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import { helloWorld } from "@/modules/speedometer";

import { setItem, getItem, getAllItems } from "@/utils/AsyncStorage";
import { Link, Redirect } from "expo-router";

export default function HomeScreen() {
  console.log("calling hello world module", helloWorld());

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Hello World!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Button
          title="Set localstore data"
          onPress={() => {
            console.log("set localstore");
            setItem("hello", "world");
          }}
          color="#841584"
        />
        <Button
          title="Get localstore data"
          onPress={() => {
            console.log("get localstore");
            getAllItems().then((items) => {
              console.log("getting items", items);
            });
          }}
          color="#841584"
        />
        <Link href="/user/1?query=hello_world">View first user details</Link>
        <Link href="/user/1?query=redirect">Redirect to root</Link>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
