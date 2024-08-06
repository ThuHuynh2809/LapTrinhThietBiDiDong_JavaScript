import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screen/Login';
import DisplayNote from './screen/DisplayNote';
import DangKy from './screen/DangKy';
import AddNote from './screen/AddNote';


export default function App() {
  var Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name='DisplayNote' component={DisplayNote} options={{ headerShown: false }}/>
        <Stack.Screen name='DangKy' component={DangKy} options={{ headerShown: false }}/>       
        <Stack.Screen name='AddNote' component={AddNote} options={{headerShown: false}}/>
        
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
