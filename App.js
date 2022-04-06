import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Screens/Home';
import Addmed from './Screens/Addmed';
import All from './Screens/All';
import Progress from './Screens/Progress';
import HomeIcon from './assets/icons/Home.svg';
import AddIcon from './assets/icons/Add.svg';
import AllIcon from './assets/icons/All.svg';
import CompleteIcon from './assets/icons/Complete.svg';
import Ionicons from 'react-native-vector-icons/Ionicons';

const App = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            switch (route.name) {
              case 'Home':
                return <HomeIcon color={focused ? '#3CC027' : 'black'} />;
              case 'Add':
                return <AddIcon color={focused ? 'black' : 'black'} />;
              case 'All':
                return <AllIcon color={focused ? 'black' : 'black'} />;
              case 'Progress':
                return <CompleteIcon color={focused ? 'black' : 'black'} />;
              default:
                return <AddIcon color={focused ? 'black' : 'black'} />;
            }
          },
        })}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Tab.Screen name="Add" component={Addmed} />
        <Tab.Screen name="All" component={All} />
        <Tab.Screen name="Progress" component={Progress} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
