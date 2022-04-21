import notifee, {
  TimestampTrigger,
  TriggerType,
  AndroidImportance,
  EventType,
} from '@notifee/react-native';

// Function to create channel and notifications
export default onCreateChannel = async data => {
  const {title, startDate, noOfDay, timing} = data;
  // const date = new Date(Date.now() + 5 * 1000);
  startDate.setHours(0);
  startDate.setMinutes(0);
  startDate.setSeconds(0);
  await notifee.createChannel({
    id: title,
    name: title,
    importance: AndroidImportance.HIGH,
    sound: 'notifee',
    vibration: true,
    vibrationPattern: [300, 500],
  });
  for (let i = 0; i < noOfDay; i++) {
    for (let j = 0; j < timing.length; j++) {
      const curDate = new Date(startDate);
      curDate.setDate(curDate.getDate() + i);
      curDate.setHours(timing[j].hours);
      curDate.setMinutes(timing[j].minutes);
      onCreateNotification(title, curDate);
    }
  }
};

// Function to create a notification
const onCreateNotification = async (title, date) => {
  // Create a time-based trigger
  const trigger: TimestampTrigger = {
    type: TriggerType.TIMESTAMP,
    timestamp: date.getTime(), // fire at 11:10am (10 minutes before meeting)
  };
  // Create a trigger notification
  await notifee.createTriggerNotification(
    {
      title: title,
      // body: noOfPill + ' pill',
      android: {
        channelId: title,
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
            title: '<p style="color:black "><b>Snooze 5 min</b> &#x23f2; </p>',
            pressAction: {id: 'snooze'},
          },
        ],
      },
    },
    trigger,
  );
};
