import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';
import twoA from './screen/2_a';
import twoB from './screen/2_b';
import twoC from './screen/2_c';
import tiki_Ok from './screen/Tiki_Ok';

export default function App() {
  return (
     twoA()
    // twoB()
    // twoC()
    // tiki_Ok()
  );
}

