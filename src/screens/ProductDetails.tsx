import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootStackParamList } from '../navigation/RootStackParamList';
import { RootState } from '../redux/store';
import { addCartItem } from '../redux/slices/cart/cartSlice';

const ProductDetails = () => {

  const {width} = useWindowDimensions();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const product = useSelector((state:RootState) => state.products.selectedProduct);
  const dispatch = useDispatch();

  return (
    <View>
      <ScrollView>
        {/* Image Carousel */}
        <FlatList
          data={product?.images}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <Image source={{uri: item}} style={{aspectRatio: 1, width}} />
          )}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        />

        <View style={{padding: 20}}>
          {/* Title */}

          <Text style={styles.title}>{product?.name}</Text>

          {/* Price */}

          <Text style={styles.price}>${product?.price}</Text>

          {/* Description */}

          <Text style={styles.description}>{product?.description}</Text>
        </View>
      </ScrollView>
      {/* Add to cart button */}
          <Pressable style={styles.button} onPress={() => {
            dispatch(addCartItem(product));
            navigation.navigate('Cart')
            }}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </Pressable>
      {/* Navigation icon */}
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: '500',
    marginVertical: 10,
  },
  price: {
    fontWeight: '500',
    fontSize: 16,
    letterSpacing: 1,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: '300',
  },
  button: {
    backgroundColor: 'black',
    position: 'absolute',
    bottom: 30,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 100,
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
});
