import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Cart from './Cart';
import Orders from './Orders';
import Settings from './Settings';
import Categories from './Categories';

const Tab = createBottomTabNavigator();
const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={({router}: any) => ({
        tabBarIcon: ({focused, color, size}: any) => {
          let iconName;
          if (router.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (router.name === 'Cart') {
            iconName = focused ? 'ios-cart' : 'ios-cart-outline';
            console.log(iconName);
          }
          return <Ionicons name="ios-home" size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={Categories} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Orders" component={Orders} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default Home;
