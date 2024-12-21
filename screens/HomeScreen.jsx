import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet
} from "react-native";

const categories = [
  { id: "1", name: "Breakfast", image: require("../assets/breakfast.jpg") },
  { id: "2", name: "Lunch", image: require("../assets/lunch.jpg") },
  { id: "3", name: "Dinner", image: require("../assets/dinner.jpg") },
  { id: "4", name: "Snacks", image: require("../assets/snacks.jpg") },
  { id: "5", name: "Desserts", image: require("../assets/desserts.jpg") }
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipe Categories</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        numColumns={2} // Display items in 2 columns
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.categoryItem}
            onPress={() =>
              navigation.navigate("Category", { category: item.name })
            }
          >
            <Image source={item.image} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  categoryItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    backgroundColor: "#f8f9fa",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e9ecef",
    overflow: "hidden" // Ensures image doesn't overflow rounded corners
  },
  categoryImage: {
    width: "100%",
    height: 120, // Adjust height for better appearance
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  categoryText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#495057",
    padding: 10,
    textAlign: "center"
  }
});
