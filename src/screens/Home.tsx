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
      screenOptions={({route}: any) => ({
        tabBarIcon: ({focused, color, size}: any) => {
          let iconName = '';
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Orders') {
            iconName = focused ? 'reader' : 'reader-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={Categories} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Orders" component={Orders} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default Home;
