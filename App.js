import 'react-native-gesture-handler';
import Pantalla1 from './src/screens/Pantalla1';
import inicio from './src/screens/inicio';
import pantalla2 from './src/screens/Pantalla2';
import { useEffect, useState } from 'react';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';



export default function App() {
  const Tab = createBottomTabNavigator();

  const [isShowSplash, setIsShowSplash] = useState(true);
  
  useEffect(() =>{
    setTimeout(() =>{
      setIsShowSplash(false);
    }, 4000);
    
  });
  
  return (
    <>
    {isShowSplash ? (
      <Pantalla1/>
    ): (
      <NavigationContainer>
      <Tab.Navigator  screenOptions={{
          headerShown: false
        }}>
        <Tab.Screen name="Inicio" component={inicio} options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}/>
        <Tab.Screen name="comida" component={pantalla2} options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
    )}
    </>

  );

}


