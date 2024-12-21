import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";

const recipeDetails = {
  Pancakes: {
    image: require("../assets/Pancakes.jpg"),
    ingredients: [
      "1 cup flour",
      "2 tablespoons sugar",
      "1 teaspoon baking powder",
      "1/2 teaspoon salt",
      "1 cup milk",
      "1 egg",
      "2 tablespoons butter"
    ],
    instructions: [
      "Mix all the dry ingredients in a bowl.",
      "Add milk, egg, and melted butter. Stir until smooth.",
      "Heat a pan and pour batter to form pancakes.",
      "Cook until bubbles form, then flip and cook until golden brown."
    ]
  },
  Omelette: {
    image: require("../assets/Omelette.jpg"),
    ingredients: [
      "2 eggs",
      "1/4 cup milk",
      "Salt and pepper",
      "1 tablespoon butter"
    ],
    instructions: [
      "Whisk eggs, milk, salt, and pepper in a bowl.",
      "Heat butter in a pan over medium heat.",
      "Pour the egg mixture and let it set.",
      "Fold the omelette in half and serve warm."
    ]
  },
  "Grilled Cheese": {
    image: require("../assets/Grilled Cheese.jpg"),
    ingredients: [
      "2 slices of bread",
      "1 slice of cheese",
      "1 tablespoon butter"
    ],
    instructions: [
      "Butter one side of each slice of bread.",
      "Place the cheese between the unbuttered sides of the bread.",
      "Cook in a skillet over medium heat until golden brown on both sides."
    ]
  },
  "Caesar Salad": {
    image: require("../assets/Caesar Salad.jpg"),
    ingredients: [
      "1 head of romaine lettuce",
      "1/4 cup Caesar dressing",
      "1/4 cup grated Parmesan",
      "Croutons"
    ],
    instructions: [
      "Chop the romaine lettuce.",
      "Toss with Caesar dressing until evenly coated.",
      "Top with Parmesan cheese and croutons."
    ]
  },
  "Chocolate Cake": {
    image: require("../assets/Chocolate Cake.jpg"),
    ingredients: [
      "1 and 1/2 cups flour",
      "1 cup sugar",
      "1/4 cup cocoa powder",
      "1 teaspoon baking soda",
      "1/2 teaspoon salt",
      "1 cup water",
      "1/4 cup vegetable oil",
      "1 teaspoon vanilla extract"
    ],
    instructions: [
      "Preheat the oven to 350°F (175°C).",
      "Mix all dry ingredients in a bowl.",
      "Add wet ingredients and mix until smooth.",
      "Pour batter into a greased pan and bake for 30 minutes."
    ]
  },
  "Spaghetti Bolognese": {
    image: require("../assets/Spaghetti Bolognese.jpg"),
    ingredients: [
      "200g spaghetti",
      "100g ground beef",
      "1/2 cup tomato sauce",
      "1 clove garlic, minced",
      "1/4 cup grated Parmesan"
    ],
    instructions: [
      "Cook the spaghetti according to package instructions.",
      "In a pan, sauté garlic and ground beef until browned.",
      "Add tomato sauce and simmer for 10 minutes.",
      "Serve the sauce over spaghetti and top with Parmesan cheese."
    ]
  },
  "Roast Chicken": {
    image: require("../assets/Roast Chicken.jpg"),
    ingredients: [
      "1 whole chicken",
      "2 tablespoons olive oil",
      "Salt and pepper",
      "1 teaspoon garlic powder",
      "1 teaspoon paprika"
    ],
    instructions: [
      "Preheat the oven to 375°F (190°C).",
      "Rub the chicken with olive oil, salt, pepper, garlic powder, and paprika.",
      "Place the chicken on a roasting pan and bake for 1.5 hours or until fully cooked."
    ]
  },
  "Fruit Salad": {
    image: require("../assets/Fruit Salad.jpg"),
    ingredients: [
      "1 cup diced watermelon",
      "1 cup diced pineapple",
      "1 cup sliced strawberries",
      "1 cup blueberries"
    ],
    instructions: [
      "Combine all the fruits in a large bowl.",
      "Toss gently to mix.",
      "Chill in the refrigerator for 30 minutes before serving."
    ]
  },
  "Chips and Dip": {
    image: require("../assets/Chips and Dip.jpg"),
    ingredients: ["1 bag of tortilla chips", "1 cup guacamole", "1 cup salsa"],
    instructions: [
      "Arrange tortilla chips on a serving platter.",
      "Serve with bowls of guacamole and salsa on the side."
    ]
  },
  "Ice Cream Sundae": {
    image: require("../assets/Ice Cream Sundae.jpg"),
    ingredients: [
      "2 scoops vanilla ice cream",
      "1/4 cup hot fudge sauce",
      "1/4 cup whipped cream",
      "1 cherry"
    ],
    instructions: [
      "Place the ice cream in a bowl or glass.",
      "Drizzle with hot fudge sauce.",
      "Top with whipped cream and a cherry."
    ]
  }
};

const RecipeDetailsScreen = ({ route }) => {
  const { recipe } = route.params; // Get the recipe name from navigation
  const details = recipeDetails[recipe]; // Fetch details for the selected recipe

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{recipe}</Text>
      <Image source={details.image} style={styles.image} />
      <Text style={styles.subtitle}>Ingredients</Text>
      <FlatList
        data={details.ingredients}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.text}>- {item}</Text>}
      />
      <Text style={styles.subtitle}>Instructions</Text>
      <FlatList
        data={details.instructions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.text}>• {item}</Text>}
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
    marginBottom: 10
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10
  },
  text: {
    fontSize: 16,
    marginBottom: 5
  }
});

export default RecipeDetailsScreen;
