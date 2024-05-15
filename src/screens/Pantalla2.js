import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet,StatusBar } from 'react-native';
import Constants from 'expo-constants';

const favoriteFoods = [
  {
    id: 1,
    name: 'California roll',
    description: 'Rollo de 10 piezas, compuesto por aguacate, pepino, camaron y ajonjoli por fuera.',
    image: require('../img/sushi.jpg'),
  },
  {
    id: 2,
    name: 'Pasta',
    description: 'Deliciosa pasta alfredo',
    image: require('../img/pasta.jpg'),
  },
  {
    id: 3,
    name: 'Margherita Pizza',
    description: 'deliciosa pizza artesanal (personal).',
    image: require('../img/pizza.jpg'),
  },
  {
    id: 4,
    name: 'Tacos',
    description: 'Tacos mexicanos con carne asada, cebolla y salsa picante.',
    image: require('../img/tacos.jpg'),
  },
  {
    id: 5,
    name: 'Panini',
    description: 'deslicioso panini italiano elaborado con berenjena asada.',
    image: require('../img/panini.jpg'),
  },
  {
    id: 6,
    name: 'Hamburguesa triple',
    description: 'Increibles hamburguesas de carne.',
    image: require('../img/hamburguesa.jpg'),
  },
];
const statusBarHeight = Constants.statusBarHeight || StatusBar.currentHeight || 0;

const FavoriteFoodsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {favoriteFoods.map(food => (
        <View key={food.id} style={styles.foodContainer}>
          <Image source={food.image} style={styles.foodImage} />
          <Text style={styles.foodName}>{food.name}</Text>
          <Text style={styles.foodDescription}>{food.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:statusBarHeight,
    paddingHorizontal:10,
    backgroundColor: '#fff',
  },
  foodContainer: {
    marginBottom: 20,
  },
  foodImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  foodName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  foodDescription: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default FavoriteFoodsScreen;
