import React from 'react';
import {StyleSheet, Image, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { placeholderGray, primaryClr, textGray } from '../Style/Global';
import Entypo from './Icons/Entypo';
import FontAwesome from './Icons/FontAwesome';
import Home from '../Screens/BottomTabScreens/Home'
import Tests from '../Screens/BottomTabScreens/Tests'
import Profile from '../Screens/BottomTabScreens/Profile'


const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 64,
          alignItems: 'center',
          justifyContent: 'center',
          ...styles.shadow,
          backgroundColor: 'white' ,
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
        },
      }}>
      <Tab.Screen
        name="StudentHome"
        component={Home}
        options={{
          tabBarIcon: ({}) => {
            return (
              <>
                <Entypo name="home" size={30} color={primaryClr}/>
              </>
            );
          },
        }}
      />

      <Tab.Screen
        name="Tests"
        component={Tests}
        options={{
          tabBarIcon: ({}) => {
            return (
              <>
                <FontAwesome name="clipboard" size={27} color={primaryClr} />
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({}) => {
            return (
              <>
                <FontAwesome name="user" size={28} color={primaryClr} />
              </>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default BottomTab;
