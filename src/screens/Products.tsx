import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import products from '../data/products';

const Products = () => {
  return (
    <FlatList
    data={products}
    numColumns={2}
    renderItem={({item}) => (
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={{
            uri: item.image,
          }}
        />
      </View>
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