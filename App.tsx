// import { View, Text } from 'react-native';
// import React from 'react';
// import AppNavigator from './src/navigation/AppNavigator';
// // import {GestureHandlerRootView} from 'react-native-gesture-handler';

// const App = () => {
//   return (
//     <>
//       <AppNavigator />
//     </>
//   );
// };

// export default App;

import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { tambah, kurang } from './src';

const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  const [angka1, setAngka1] = useState('');
  const [angka2, setAngka2] = useState('');
  const [hasil, setHasil] = useState(0);

  // Fungsi untuk tombol BAGI
  const tekanBagi = () => {
    if (angka2 === '0') {
      setHasil("Tidak bisa dibagi dengan 0");
    } else {
      const hasilBagi = parseInt(angka1) / parseInt(angka2);
      setHasil(hasilBagi);
    }
  };

  // Fungsi untuk tombol KALI
  const tekanKali = () => {
    const hasilKali = parseInt(angka1) * parseInt(angka2);
    setHasil(hasilKali);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Count : ${count}`}</Text>
      <View style={styles.buttonRow}>
        <Button title="Increment" onPress={increment} color="#4CAF50" />
        <Button title="Decrement" onPress={decrement} color="#F44336" />
      </View>

      <TextInput
        keyboardType="numeric"
        placeholder="Input Angka 1"
        onChangeText={(text) => setAngka1(text)}
        value={angka1}
        style={styles.input}
      />

      <TextInput
        keyboardType="numeric"
        placeholder="Input Angka 2"
        onChangeText={(text) => setAngka2(text)}
        value={angka2}
        style={styles.input}
      />

      <View style={styles.buttonRow}>
        <Button title="Tambah" onPress={() => setHasil(tambah(parseInt(angka1), parseInt(angka2)))} color="#2196F3" />
        <Button title="Kurang" onPress={() => setHasil(kurang(parseInt(angka1), parseInt(angka2)))} color="#FF9800" />
      </View>

      <View style={styles.buttonRow}>
        <Button title="Bagi" onPress={tekanBagi} color="#9C27B0" />
        <Button title="Kali" onPress={tekanKali} color="#3F51B5" />
      </View>

      <Text style={styles.result}>Hasil : {hasil}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f8',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
    marginBottom: 20,
    paddingLeft: 10,
    fontSize: 18,
    backgroundColor: '#fff',
  },
  buttonRow: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
    width: '100%',
  },
  result: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#333',
  },
});

export default App;



// import React from 'react';
// import {Text, View, Button} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

// const Stack = createStackNavigator();

// const HomeScreen = ({navigation}: {navigation: any}) => {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Home Screen</Text>
//       <Button title="Next" onPress={() => navigation.navigate('NextScreen')} />
//     </View>
//   );
// };

// const NextScreen = () => {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Next Screen</Text>
//     </View>
//   );
// };

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="NextScreen" component={NextScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
