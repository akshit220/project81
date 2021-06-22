import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Exchange from '../screens/Exchange';


export const AppTabNavigator = createBottomTabNavigator({
  RequestItem : {
    screen: Exchange,
    navigationOptions :{
      tabBarLabel : "Exchange Items",
    }
  }
});