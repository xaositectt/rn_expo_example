import React from "react-native";
import Toast from "react-native-root-toast";
export const ExampleToast = ({ message, visible }: { message: string, visible: boolean }) => {
  return (
    <Toast
      visible={visible}
      position={80}
      shadow={false}
      animation={false}
      hideOnPress={true}
    >
      {message}
    </Toast>
  );
};

export default ExampleToast
