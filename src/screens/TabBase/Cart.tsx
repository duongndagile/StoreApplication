import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Cart = () => {
  return <Text style={styles.cartContainer}>Cart Screen</Text>;
};

const styles = StyleSheet.create({
  cartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Cart;
