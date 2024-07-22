import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image, Text } from "react-native";
import Button from "@/src/components/Button";
import { useState } from "react";
import EmojiPicker from '@/src/components/EmojiPicker';

const PlaceholderImage = require("@/assets/images/kappa.jpg");
const Kappa2 = require("@/assets/images/kappa2.jpg");

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" onPress={() => { setIsModalVisible(true) }}/>
        <Button label="Use this photo"  onPress={() => { setIsModalVisible(false) }}/>
      </View>
      <EmojiPicker isVisible={isModalVisible} onClose={() => { setIsModalVisible(false) }}>
        <Image source={Kappa2} style={styles.modalImage} />
      </EmojiPicker>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  modalImage: {
    width: '100%',
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
