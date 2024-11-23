import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import products from '../data/products';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/RootStackParamList';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Products = () => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <FlatList
    data={products}
    numColumns={2}
    renderItem={({item}) => (
      <Pressable onPress={() => navigation.navigate('ProductDetails')} style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={{
            uri: item.image,
          }}
        />
      </Pressable>
    )}
  />
  )
}

export default Products

const styles = StyleSheet.create({
    imgContainer: {
        width:'50%',
        padding: 1,
      },
      img: {
        width: '100%',
        aspectRatio: 1 / 1,
      },
})