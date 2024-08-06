import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import increment from './redux/actions';
import store from './redux/store';
import reducer from './redux/reducers';
import { useState } from 'react';
import { Provider } from 'react-redux';
import Counter from './Counter';
import { connect } from 'react-redux';


export default function App() {
  var [count, setCount] = useState(0);
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Counter />
        <Counter />
        <Counter />
      </View>

    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnAdd: {
    height: 100,
    width: 100,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
