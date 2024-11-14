import {Image, StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import Products from './src/screens/Products';


const App = () => {
  return (
    <View style={styles.container}>
      <Products />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

});
