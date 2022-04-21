import {View, Text, Button} from 'react-native';
import React from 'react';
import NotificationManager from '../utils/NotificationManager';

const All = () => {
  const date = new Date();
  const dummyData = {
    title: 'Calpol',
    startDate: new Date(),
    timing: [{hours: date.getHours(), minutes: date.getMinutes() + 1}],
    noOfDay: '1',
  };
  const handleNotif = () => {
    // onCreateChannel(dummyData);
    NotificationManager.onCreateNotification(
      'Test',
      new Date(Date.now() + 5 * 1000),
    );
  };

  return (
    <View>
      <Text>All</Text>
      <Button title="notify" onPress={handleNotif} />
    </View>
  );
};

export default All;
