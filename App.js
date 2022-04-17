import {View, Text, StyleSheet, Alert} from 'react-native';
import React, {useEffect} from 'react';
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
import colors from './assets/constants/colors';
import SplashScreen from 'react-native-splash-screen';
import notifee from '@notifee/react-native';
import AutoStart from 'react-native-autostart';

const App = () => {
  const checkBattery = async () => {
    // 1. checks if battery optimization is enabled
    const batteryOptimizationEnabled =
      await notifee.isBatteryOptimizationEnabled();
    console.log('batteryOptimizationEnabled', batteryOptimizationEnabled);
    if (batteryOptimizationEnabled) {
      // 2. ask your users to disable the feature
      Alert.alert(
        'Restrictions Detected',
        'To ensure notifications are delivered, please disable battery optimization for the app.',
        [
          // 3. launch intent to navigate the user to the appropriate screen
          {
            text: 'Open settings',
            onPress: async () =>
              await notifee.openBatteryOptimizationSettings(),
          },
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
        ],
        {cancelable: false},
      );
    }
  };

  if (AutoStart.isCustomAndroid()) {
    AutoStart.startAutostartSettings();
  }
  const Tab = createBottomTabNavigator();
  useEffect(() => {
    SplashScreen.hide();
    checkBattery();
  });

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            switch (route.name) {
              case 'Home':
                return <HomeIcon color={focused ? colors.primary : 'black'} />;
              case 'Add':
                return <AddIcon color={focused ? colors.primary : 'black'} />;
              case 'All':
                return <AllIcon color={focused ? colors.primary : 'black'} />;
              case 'Progress':
                return (
                  <CompleteIcon color={focused ? colors.primary : 'black'} />
                );
              default:
                return <AddIcon color={focused ? colors.primary : 'black'} />;
            }
          },
          tabBarStyle: {
            height: 60,
            paddingBottom: 6,
            paddingTop: 4,
          },
        })}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Add"
          component={Addmed}
          options={{headerShown: false}}
        />
        <Tab.Screen name="All" component={All} />
        <Tab.Screen name="Progress" component={Progress} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
