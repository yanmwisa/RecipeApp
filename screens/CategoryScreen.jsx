import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from "react-native";

const recipes = {
  Breakfast: [
    { id: "1", name: "Pancakes" },
    { id: "2", name: "Omelette" }
  ],
  Lunch: [
    { id: "3", name: "Grilled Cheese" },
    { id: "4", name: "Caesar Salad" }
  ],
  Dinner: [
    { id: "5", name: "Spaghetti Bolognese" },
    { id: "6", name: "Roast Chicken" }
  ],
  Snacks: [
    { id: "7", name: "Fruit Salad" },
    { id: "8", name: "Chips and Dip" }
  ],
  Desserts: [
    { id: "9", name: "Chocolate Cake" },
    { id: "10", name: "Ice Cream Sundae" }
  ]
};

const CategoryScreen = ({ route, navigation }) => {
  const { category } = route.params; // Get category from navigation

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category} Recipes</Text>
      <FlatList
        data={recipes[category]} // Get recipes for the selected category
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.recipeItem}
            onPress={() => navigation.navigate("Recipe", { recipe: item.name })}
          >
            <Text style={styles.recipeText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

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
  recipeItem: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#f8f9fa",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e9ecef"
  },
  recipeText: {
    fontSize: 18,
    color: "#495057"
  }
});

export default CategoryScreen;
