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
import onCreateNotification from './utils/NotificationManager';
import notifee, {
  TimestampTrigger,
  TriggerType,
  AndroidImportance,
  EventType,
} from '@notifee/react-native';

notifee.onBackgroundEvent(async ({type, detail}) => {
  // console.log('detail', detail);
  if (type === EventType.PRESS) {
    console.log('User pressed the notification.', detail.pressAction.id);
  } else if (type === EventType.ACTION_PRESS) {
    switch (detail.pressAction.id) {
      case 'confirm':
        console.log('User pressed confirm.');
        break;
      case 'snooze':
        console.log('User pressed snooze.');
        onCreateNotification(
          detail.pressAction.id,
          1,
          new Date(Date.now() + 5 * 1000),
        );
        break;
      default:
        console.log('User pressed unknown action.');
    }
  }
});
notifee.onForegroundEvent(async ({type, detail}) => {
  // console.log('detail', detail);
  if (type === EventType.PRESS) {
    console.log('User pressed the notification.', detail.pressAction.id);
  } else if (type === EventType.ACTION_PRESS) {
    switch (detail.pressAction.id) {
      case 'confirm':
        console.log('User pressed confirm.');
        break;
      case 'snooze':
        console.log('User pressed snooze.');
        onCreateNotification(
          detail.pressAction.id,
          1,
          new Date(Date.now() + 5 * 1000),
        );
        break;
      default:
        console.log('User pressed unknown action.');
    }
  }
});

const App = () => {
  const Tab = createBottomTabNavigator();
  useEffect(() => {
    SplashScreen.hide();
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
