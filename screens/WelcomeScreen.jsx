import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet
} from "react-native";

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/welcome-background.jpg")} // Replace with your actual background image
      style={styles.background}
    >
      {/* Overlay for darkening the image */}
      <View style={styles.darkOverlay} />

      {/* Content on top of the darkened background */}
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to the Recipe Hub</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")} // Navigate to the Home screen
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  darkOverlay: {
    ...StyleSheet.absoluteFillObject, // Makes the overlay cover the entire ImageBackground
    backgroundColor: "rgba(0, 0, 0, 0.5)" // Adjust the alpha value to control the darkness
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20
  },
  button: {
    backgroundColor: "#ff5722",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff"
  }
});
