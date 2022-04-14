import {View, Text, Button} from 'react-native';
import React, {useEffect} from 'react';
import notifee, {TimestampTrigger, TriggerType} from '@notifee/react-native';

const All = () => {
  useEffect(() => {
    const channelId = notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });
  });
  async function onCreateTriggerNotification() {
    const date = new Date(Date.now() + 10 * 1000);

    // Create a time-based trigger
    const trigger: TimestampTrigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: date.getTime(), // fire at 11:10am (10 minutes before meeting)
    };

    // Create a trigger notification
    await notifee.createTriggerNotification(
      {
        title: 'Meeting with Jane',
        body: 'Today at 11:20am',
        android: {
          channelId: 'default',
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
