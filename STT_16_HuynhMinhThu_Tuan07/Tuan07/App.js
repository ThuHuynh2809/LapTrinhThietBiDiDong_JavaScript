import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen02 from './screen/screen02';
import Screen01 from './screen/screen01';
import Screen03 from './screen/screen03';

export default function App() {
  var Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='screen01' component={Screen01} options={{ headerShown: false }}/>
        <Stack.Screen name='screen02' component={Screen02} options={{ headerShown: false }}/>
        <Stack.Screen name='screen03' component={Screen03} options={{ headerShown: false }}/>       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
