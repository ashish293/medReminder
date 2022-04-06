import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Screens/Home';
import Addmed from './Screens/Addmed';
import All from './Screens/All';
import Progress from './Screens/Progress'; 


const App = () => {
  
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='Add' component={Addmed}/>
        <Tab.Screen name='All' component={All}/>
        <Tab.Screen name='Progress' component={Progress}/>
      </Tab.Navigator>
    </NavigationContainer>

    

   
  );
};


export default App