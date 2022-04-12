import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import React, { useState, useEffect } from 'react';
import colors from '../assets/constants/colors';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNDateTimePicker from '@react-native-community/datetimepicker';

const Addmed = () => {

  const [frequency, setFrequency] = useState();
  const [doses, setDoses] = useState();
  const [dayCheck, setDayCheck] = useState([false, false, false, false, false, false, false]);
  let date = new Date();
  console.log(date);
  const [addMedicine, setAddMedicine] = useState({
    name: '',
    perDay: 0,
    totalNoOfDose: 0,
    time: [],
    startFrom: '',
  });
  const handleInputChange = (key, value, type) => {
    if (type === 'integer') {
      if (
        value.includes('.') ||
        value.includes(',') ||
        value.includes('-') ||
        value.includes(' ')
      ) {
        console.log('Hit');
        return;
      }
    }
    setAddMedicine({ ...addMedicine, [key]: value });
  };

  const handleDays = (id) => {
    setDayCheck((val) => {
      return val.map((elem, index) => {
        if (id === index) {
          return !elem;
        } else return elem;
      }
      )
    })
  }


  // useEffect(() => {
  //   console.log(addMedicine);
  // }, [addMedicine]);
  return (
    <View>

      <View style={styles.headerContainer(colors)}>
        <Image
          style={styles.icon}
          source={require('../assets/images/patient.png')}
        />
        <Text style={styles.headerText}>Add Medicine</Text>
      </View>

      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder=" Enter Medicine Name"
          value={addMedicine.name}
          onChangeText={value => handleInputChange('name', value)}
        />
        <View style={styles.selectContainer}>

          <Text style={styles.selectHeading}>Select Frequency : </Text>
          <View style={styles.selectBox}>
            <Picker
              selectedValue={frequency}
              onValueChange={(value) => setFrequency(value)}
              style={{ height: 30, width: 125, }}
            >
              <Picker.Item label='Select' value='none' />
              <Picker.Item label='Daily' value='daily' />
              <Picker.Item label='Once' value='Once' />
              <Picker.Item label='Other' value='Other' />
            </Picker>
          </View>
        </View>

        <View style={styles.daysContainer}>
          <View style={styles.days(dayCheck[0])}><TouchableOpacity onPress={() => handleDays(0)}><Text style={styles.dayText}>S</Text></TouchableOpacity></View>
          <View style={styles.days(dayCheck[1])}><TouchableOpacity onPress={() => handleDays(1)}><Text style={styles.dayText}>M</Text></TouchableOpacity></View>
          <View style={styles.days(dayCheck[2])}><TouchableOpacity onPress={() => handleDays(2)}><Text style={styles.dayText}>T</Text></TouchableOpacity></View>
          <View style={styles.days(dayCheck[3])}><TouchableOpacity onPress={() => handleDays(3)}><Text style={styles.dayText}>W</Text></TouchableOpacity></View>
          <View style={styles.days(dayCheck[4])}><TouchableOpacity onPress={() => handleDays(4)}><Text style={styles.dayText}>T</Text></TouchableOpacity></View>
          <View style={styles.days(dayCheck[5])}><TouchableOpacity onPress={() => handleDays(5)}><Text style={styles.dayText}>F</Text></TouchableOpacity></View>
          <View style={styles.days(dayCheck[6])}><TouchableOpacity onPress={() => handleDays(6)}><Text style={styles.dayText}>S</Text></TouchableOpacity></View>
        </View>

        <View style={styles.selectContainer}>

          <Text style={styles.selectHeading}>Doses Per Day : </Text>
          <View style={styles.selectBox}>
            <Picker
              selectedValue={doses}
              onValueChange={(value) => setDoses(value)}
              style={{ height: 30, width:130, }}
            >
              <Picker.Item label='Select' value='none' />
              <Picker.Item label='1' value='1' />
              <Picker.Item label='2' value='2' />
              <Picker.Item label='3' value='3' />
              <Picker.Item label='4' value='4' />
            </Picker>
          </View>
        </View>

        <View style={styles.timeContainer}>
              <Text style={styles.timeHeading}>Set Time Of Doses</Text>
              <View style={styles.timeInput}>
                <Text>Select Time</Text>
              </View>
            </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: colors => ({
    flexDirection: 'row',
    backgroundColor: colors.primary,
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
  container: {
    margin: 20,

  },
  textInput: {
    borderWidth: 1,
    borderRadius: 5,

  },
  selectContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingEnd: 5,
    paddingStart: 5,
    marginTop: 20,
  },
  selectBox: {
    marginTop: 10,
    borderWidth: 0.2,
    borderRadius: 3,

  },
  selectHeading: {
    fontSize: 19,
    color: 'purple',
  },
  daysContainer: {
    flexDirection: 'row',
    borderWidth: 0.3,
    justifyContent: 'center',
    marginTop: 30,
    padding: 5,
    borderRadius: 3,
  },
  days: (check) => ({
    marginLeft: 8,
    marginRight: 8,
    // paddingTop:4,
    // paddingBottom:4,
    // paddingEnd:8,
    // paddingStart:8,
    borderWidth: 0.2,
    borderRadius: 50,
    backgroundColor: check ? "green" : "white",
    opacity: 0.7,
  }),
  dayText: {
    marginTop: 4,
    marginBottom: 4,
    marginLeft: 8,
    marginRight: 8,
    fontSize: 16,
  }
});

export default Addmed;
