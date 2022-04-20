import {View, Text, Button} from 'react-native';
import React from 'react';
import onCreateChannel from '../utils/NotificationManager';

const dummyData = {
  title: 'Calpol',
  noOfPill: 1,
  startDate: new Date(),
  timing: [{hours: 8, minutes: 52}],
  noOfDay: '1',
};

const All = () => {
  const handleNotif = () => {
    // onCreateChannel(dummyData);
    onCreateChannel(dummyData);
  };

  return (
    <View>
      <Text>All</Text>
      <Button title="notify" onPress={handleNotif} />
    </View>
  );
};

export default All;
