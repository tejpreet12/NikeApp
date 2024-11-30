import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { FlatList, Image, Pressable, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootStackParamList } from '../navigation/RootStackParamList';
import { setSelectedProduct } from '../redux/slices/product/productSlice';
import { RootState } from '../redux/store';

const Products = () => {

  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const products = useSelector((state:RootState) => state.products.products) //1st products is for reducer name and the 2nd is for initial State name

  return (
    <FlatList
    data={products}
    numColumns={2}
    renderItem={({item}) => (
      <Pressable onPress={() => {

        dispatch(setSelectedProduct(item.id))
        
        navigation.navigate('ProductDetails')
        }} style={styles.imgContainer}>
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