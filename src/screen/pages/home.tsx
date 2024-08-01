import React, { useEffect, useState } from 'react';
import Geolocation from 'react-native-geolocation-service';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import Icon from 'react-native-vector-icons/Ionicons';
// import { Icon } from '@rneui/base';
import {
  Button,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View, Platform, PermissionsAndroid
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Hometab from './tabs/hometab';
import type { PropsWithChildren } from 'react';

const Tab = createBottomTabNavigator();
type Homepage = PropsWithChildren<{
  name: string;
}>;
const Homepage: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#333' : '#fff', // Adjusted color for background
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home-outline' : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'person-outline' : 'person-outline';

          } else if (route.name === 'Search') {
            iconName = focused ? 'search-outline' : 'search-outline';
          
          } else if (route.name === 'Sell') {
            iconName = focused ? 'easel-outline' : 'easel-outline';
          
          } else if (route.name === 'Bid') {
            iconName = focused ? 'card-outline' : 'card-outline';
          }

          return <Icon name={iconName as string} size={size} color={color} />;
        },
      })}
      sceneContainerStyle={backgroundStyle}
    >
      <Tab.Screen name="Home" component={Hometab} options={{ headerShown: false }} />


      <Tab.Screen name="Search" component={Hometab} />
      
      <Tab.Screen name="Sell" component={Hometab} />

      <Tab.Screen name="Bid" component={Hometab} />

      <Tab.Screen name="Settings" component={Hometab} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor:'#2a6af5',
  },
  wrapper: {
    backgroundColor: '#fff',
    // backgroundColor:'#1a73e8',
    color: '#fff'
  },
  header: {

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding:40,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 16,
  },
  gradient: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 4,
  },

});

export default Homepage;
