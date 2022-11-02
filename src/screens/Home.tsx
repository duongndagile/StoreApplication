import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
// import Ionicons from 'react-native-vector-icons/Ionicons';

import Cart from './Cart';
import Orders from './Orders';
import Settings from './Settings';
import Categories from './Categories';

const Tab = createBottomTabNavigator();
const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Categories} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Orders" component={Orders} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default Home;
