import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function baiViDu() {
  var [dataTong, setData] = useState('');
  var [dataA, setDataA] = useState('');
  var [dataB, setDataB] = useState('');
  return (
    <View style={styles.container}>

      <View style={styles.boxDataA}>
        <Text>  Nhập số A:</Text>
        <TextInput onChangeText={setDataA} value={dataA}></TextInput>
      </View>
      <View style={styles.boxDataB}>
        <Text>  Nhập số B:</Text>
        <TextInput onChangeText={setDataB} value={dataB}></TextInput>
      </View>
      <View style={styles.boxKetQua}>
        <Text>  Kết quả: {dataA} + {dataB} = </Text>
        <TextInput onChangeText={setData} value={dataTong}></TextInput>
      </View>
      <View style={styles.btnClick}>
        <Button title='Click' onPress={() => { setData(sum(Number(dataA), Number(dataB))); }}>
        </Button>
      </View>
      
    </View>
  );
}
function sum(dataA, dataB) {
  return dataA + dataB;
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  boxDataA: {
    width: '305px',
    height: '45px',
    top: '70px',
    left: '40px',
    backgroundColor: '#C4C4C4'
  },
  boxDataB: {
    width: '305px',
    height: '45px',
    top: '100px',
    left: '40px',
    backgroundColor: '#C4C4C4'
  },
  boxKetQua: {
    width: '305px',
    height: '45px',
    top: '130px',
    left: '40px',
    backgroundColor: '#C4C4C4'
  },
  btnClick: {
    top: '250px',

  }

});
