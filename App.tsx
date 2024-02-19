import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
} from "react-native";
import { useImageToText } from "./src/hooks/useImageToText";

export default function App() {
  const { image, pickImage, isLoading, extractedText } = useImageToText();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>
        Image to Text
      </Text>
      <Button
        title="Gallery"
        onPress={() => pickImage('gallery')}
      />
      <Button
        title="Camera"
        onPress={() => pickImage('camera')}
      />
      {image && (
        <Image
          source={{ uri: image }}
          style={{
            width: 400,
            height: 300,
            objectFit: "contain",
          }}
        />
      )}

      <Text style={styles.text1}>
        Extracted text:
      </Text>
      <Text style={styles.text1}>
        {isLoading ? 'loading...' : extractedText}
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#fff",
    height: "100%",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "green",
    textAlign: "center",
  },
  text1: {
    fontSize: 16,
    marginBottom: 10,
    color: "black",
    fontWeight: "bold",
  },
});
