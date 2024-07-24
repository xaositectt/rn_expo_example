import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image, Text } from "react-native";
import Button from "@/src/components/Button";
import { useState } from "react";
import EmojiPicker from "@/src/components/EmojiPicker";

const PlaceholderImage = require("@/assets/images/kappa.jpg");
const Kappa2 = require("@/assets/images/kappa2.jpg");
import * as ImagePicker from "expo-image-picker";
import CircleButton from "@/src/components/CircleButton";
import IconButton from "@/src/components/IconButton";
import EmojiSticker from "@/src/components/EmojiSticker";
import EmojiList from "@/src/components/EmojiList";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );

  const [pickedEmoji, setPickedEmoji] = useState(null);

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    console.log("result", result);

    if (!result.canceled) {
      console.log(result);
      setSelectedImage(result?.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert("You did not select any image.");
    }
  };

  const imageSource = selectedImage ? { uri: selectedImage } : PlaceholderImage;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} />
        {pickedEmoji && <EmojiSticker imageSize={50} stickerSource={pickedEmoji} />}
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton
              icon="save-alt"
              label="Save"
              onPress={onSaveImageAsync}
            />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button
            theme="primary"
            label="Choose a photo"
            onPress={() => {
              pickImageAsync();
              // setIsModalVisible(true);
            }}
          />
          <Button
            label="Use this photo"
            onPress={() => {
              setShowAppOptions(true);
              setIsModalVisible(false);
            }}
          />
        </View>
      )}
      <EmojiPicker
        isVisible={isModalVisible}
        onClose={() => {
          setIsModalVisible(false);
        }}
      >
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
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
    width: "100%",
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
