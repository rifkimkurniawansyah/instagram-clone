import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StatusBar } from 'react-native';
import { Image } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import Header from './src/components/Header';
import BottomTabBar from './src/components/BottomTabBar';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Header />
        <Tab.Navigator
          tabBar={props => <BottomTabBar {...props} />}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused ? require('./assets/icons/home.png') : require('./assets/icons/home.png');
              } else if (route.name === 'Search') {
                iconName = focused ? require('./assets/icons/search.png') : require('./assets/icons/search.png');
              } else if (route.name === 'Reels') {
                iconName = focused ? require('./assets/icons/reels.png') : require('./assets/icons/reels.png');
              } else if (route.name === 'Profile') {
                iconName = focused ? require('./assets/icons/profile.png') : require('./assets/icons/profile.png');
              }
              return <Image source={iconName} style={{ width: size, height: size }} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'black',
            inactiveTintColor: 'gray',
            showLabel: false,
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}