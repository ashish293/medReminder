import {View, Text, Button} from 'react-native';
import React, {useEffect} from 'react';
import notifee, {
  TimestampTrigger,
  TriggerType,
  AndroidImportance,
  EventType,
} from '@notifee/react-native';

const All = () => {
  useEffect(() => {
    notifee.onBackgroundEvent(async ({type, detail}) => {
      // console.log('detail', detail);
      if (type === EventType.PRESS) {
        console.log('User pressed the notification.', detail.pressAction.id);
      } else if (type === EventType.ACTION_PRESS) {
        console.log('User pressed the action button.', detail.pressAction.id);
      }
    });
    notifee.onForegroundEvent(async ({type, detail}) => {
      // console.log('detail', detail);
      if (type === EventType.PRESS) {
        console.log('User pressed the notification.', detail.pressAction.id);
      } else if (type === EventType.ACTION_PRESS) {
        console.log('User pressed the action button.', detail.pressAction.id);
      }
    });
    const channelId = notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
      importance: AndroidImportance.HIGH,
      sound: 'notifee',
      vibration: true,
      vibrationPattern: [300, 500],
    });
  });
  async function onCreateTriggerNotification() {
    const date = new Date(Date.now() + 5 * 1000);

    // Create a time-based trigger
    const trigger: TimestampTrigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: date.getTime(), // fire at 11:10am (10 minutes before meeting)
    };

    // Create a trigger notification
    await notifee.createTriggerNotification(
      {
        title: 'Calpol',
        body: '1 tablet',
        android: {
          channelId: 'default',
          smallIcon: 'ic_notification',
          importance: AndroidImportance.HIGH,
          sound: 'notifee',
          color: '#4caf50',
          vibrationPattern: [300, 500],
          pressAction: {id: 'main', launchActivity: 'default'},
          // icon: Home,
          actions: [
            {
              title: '<p ><b>Confirm</b> &#10004;</p>',
              pressAction: {
                id: 'confirm',
                launchActivity: 'default',
              },
            },
            {
              title:
                '<p style="color:black "><b>Snooze 30 min</b> &#x23f2; </p>',
              pressAction: {id: 'snooze'},
            },
          ],
        },
      },
      trigger,
    );
  }
  return (
    <View>
      <Text>All</Text>
      <Button title="notify" onPress={onCreateTriggerNotification} />
    </View>
  );
};

export default All;
