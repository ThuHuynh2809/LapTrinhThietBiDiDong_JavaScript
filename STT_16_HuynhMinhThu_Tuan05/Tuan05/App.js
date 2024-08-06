import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, SafeAreaView, Image, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screen01 from './screen/Screen01';
import Screen02 from './screen/Screen02';

export default function App() {
  var Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen01" component={Screen01}/>
        <Stack.Screen name="Screen02" component={Screen02}/>
      </Stack.Navigator>
    </NavigationContainer>
    // Screen01()
    // Screen02()
  );
}