import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './RootStackParamList';
import Products from '../screens/Products';
import ProductDetails from '../screens/ProductDetails';
import ShoppingCart from '../screens/ShoppingCart';
import Feather from 'react-native-vector-icons/Feather';
import { ms } from '../utils/Scaling';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { selectNumberOfItems } from '../redux/slices/cart/cartSlice';
import { useSelector } from 'react-redux';

const AppNavigator = () => {

  const numberOfItems = useSelector(selectNumberOfItems);

  const Stack = createNativeStackNavigator<RootStackParamList>();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <Stack.Navigator screenOptions={{contentStyle: {backgroundColor: 'white'}}}>
      <Stack.Screen
        name="Products"
        component={Products}
        options={{
          headerRight: () => (
            <Pressable style={{flexDirection: 'row'}} onPress={() => navigation.navigate('Cart')}>
              <Feather name="shopping-cart" size={24} color="Grey" />
              <Text style={{marginLeft: ms(5), color: 'grey', fontSize: ms(14)}}>{numberOfItems}</Text>
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{presentation: 'modal'}}
      />
      <Stack.Screen name="Cart" component={ShoppingCart} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
