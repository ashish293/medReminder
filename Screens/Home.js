import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import color from '../assets/constants/color';

const Home = () => {



  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer(color)}>
        <Image style={styles.icon} source={require('../assets/images/patient.png')} />
        <Text style={styles.headerText}>Today's Schedule</Text>
      </View>
      <View style={styles.displayContainer}>

      {/* Home Screen medicine detail box start */}

        <View style={styles.medInfoContainer}>
          <Text style={styles.medName}>Medicine Name</Text>
          <View style={styles.timeDaysContainer}>
            <Text style={styles.medTime}>9:30 AM</Text>
            <Text style={styles.medDays}>S</Text>
            <Text style={styles.medDays}>M</Text>
            <View style={styles.currentDay(color)}>
               <Text style={styles.medDays}>T</Text>
            </View>
            <Text style={styles.medDays}>W</Text>
            <Text style={styles.medDays}>T</Text>
            <Text style={styles.medDays}>F</Text>
            <Text style={styles.medDays}>S</Text>
          </View>
        </View>
        
        <View style={styles.medInfoContainer}>
          <Text style={styles.medName}>Medicine Name</Text>
          <View style={styles.timeDaysContainer}>
            <Text style={styles.medTime}>9:30 AM</Text>
            <Text style={styles.medDays}>S</Text>
            <Text style={styles.medDays}>M</Text>
            <View style={styles.currentDay(color)}>
               <Text style={styles.medDays}>T</Text>
            </View>
            <Text style={styles.medDays}>W</Text>
            <Text style={styles.medDays}>T</Text>
            <Text style={styles.medDays}>F</Text>
            <Text style={styles.medDays}>S</Text>
          </View>
        </View>
      
        {/* Home Screen medicine detail box End */}

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
  },
  headerContainer: (color) => ({
    flexDirection: 'row',
    backgroundColor: color.primary,
    alignItems: 'center',
  }),
  icon: {
    height: 40,
    width: 40,
    margin: 5,
    marginLeft: 10,
  },
  headerText: {
    marginLeft: 20,
    fontSize: 25,
    color: 'black',
  },
  displayContainer: {
    flexDirection: 'column',
    alignItems: 'center',

  },
  medInfoContainer: {
    marginTop: 30,
    flexDirection: 'column',
    backgroundColor: '#EEEEEE',
    opacity: 0.8,
    borderRadius: 1,
    borderWidth: 0.08,
    paddingRight: 15,
  },
  medName: {
    marginTop:10,
    marginLeft: 30,
    marginRight: 30,
    fontSize: 20,
    color: 'black',
  },
  timeDaysContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  medTime: {
    fontSize: 17,
    color: 'black',
    marginRight: 35,
    marginLeft: 30,
  },
  medDays: {
    fontSize: 15,
    color: 'black',
    marginLeft: 6,
    marginRight: 6,
  },
  currentDay: (color) => ({
    backgroundColor: color.primary,
    opacity: 0.5,
    borderRadius:50,
  }),
});


export default Home