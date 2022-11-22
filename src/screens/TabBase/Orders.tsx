import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Orders = () => {
  return <Text style={styles.ordersContainer}>Orders Screen</Text>;
};

const styles = StyleSheet.create({
  ordersContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Orders;
