import {View, Text, Button} from 'react-native';
import React, {useEffect} from 'react';
import notifee, {TimestampTrigger, TriggerType} from '@notifee/react-native';
import Not from '../assets/icons/Not.png';

const All = () => {
  useEffect(() => {
    const channelId = notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });
  });
  async function onCreateTriggerNotification() {
    const date = new Date(Date.now() + 1 * 1000);

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

          color: '#4caf50',
          // icon: Home,
          actions: [
            {
              title: '<p ><b>Confirm</b> &#10004;</p>',
              pressAction: {id: 'confirm'},
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
