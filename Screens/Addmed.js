import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import React, { useState, useEffect } from 'react';
import colors from '../assets/constants/colors';
import DateTimePicker from '@react-native-community/datetimepicker';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';


const Addmed = () => {

  const [frequency, setFrequency] = useState();
  const [doses, setDoses] = useState();
  const [dayCheck, setDayCheck] = useState([false, false, false, false, false, false, false]);
  const [timeObj, setTimeObj] = useState([]);
  const [title, setTitle] = useState([false, false, false, false]);
  const [totalDays, setTotalDays] = useState();
  const [showDate, setShowDate] = useState(false);
  const [currentDate, setCurrenttDate] = useState();


  let date = new Date();



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
    if (frequency == 1) {
      setDayCheck((val) => {
        return dayCheck.map((elem, ind) => {
          if (id == ind) {
            return elem = true;
          } else {
            return elem = false;
          }
        })
      })
    }
    if (frequency == 7) {
      setDayCheck((val) => {
        return dayCheck.map((elem, ind) => {
          if (id == ind) {
            return !elem;
          } else return elem;
        })
      })
    }
  }


  const getTime = (id) => {
    setTitle((arr) => {
      return arr.map((val, index) => {
        if (id === index) {
          return !val;
        } else return val;
      })
    })
  }

  const onChange = (index, selectedTime) => {
    // console.log(selectedTime);
    setTitle((arr) => {
      return arr.map((val) => {
        return val = false;
      })
    })
    const time = selectedTime;
    const hours = time.getHours();
    const minutes = time.getMinutes();
    setTimeObj(timeObj.map((item, idx) => {
      console.log("index", index, idx);
      if (index == idx) {
        return { hours: selectedTime.getHours(), minutes: selectedTime.getMinutes() }
      } else return item
    }))
  }

  const startDate=()=>{
    setShowDate(!showDate);
  }

  const getStartDate=(startDate)=>{
    const date = startDate.toLocaleDateString();  
    setCurrenttDate(date);
    setShowDate(!showDate);
  }

  const totalDaysInput=(value)=>{
    setTotalDays(value);
 }

 const submitButton=()=>{
   
 }
 const ResetButton=()=>{

 }

 console.log(showDate);
 console.log(currentDate);
 console.log(totalDays);
  return (
    <View>

      <View style={styles.headerContainer(colors)}>
        <Image
          style={styles.icon}
          source={require('../assets/images/patient.png')}
        />
        <Text style={styles.headerText}>Add Medicine</Text>
      </View>
<ScrollView>
      <View  style={styles.container}>
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
              onValueChange={(value) => {
                setFrequency(value)
                if (value == 0) {
                  setDayCheck((val) => {
                    return dayCheck.map((elem, index) => {
                      return elem = true;
                    })
                  })
                } else {
                  setDayCheck((val) => {
                    return dayCheck.map((elem, ind) => {
                      return elem = false;
                    })
                  })
                }
              }}
              style={{ height: 30, width: 135, }}
            >
              {/* <Picker.Item label='Select' value={0} /> */}
              <Picker.Item label='Daily' value={0} />
              <Picker.Item label='Weekly' value={1} />
              <Picker.Item label='Other' value={7} />
            </Picker>
          </View>
        </View>

        {frequency ? <View style={styles.daysContainer}>
          <View style={styles.days(dayCheck[0])}><TouchableOpacity onPress={() => handleDays(0)}><Text style={styles.dayText}>S</Text></TouchableOpacity></View>
          <View style={styles.days(dayCheck[1])}><TouchableOpacity onPress={() => handleDays(1)}><Text style={styles.dayText}>M</Text></TouchableOpacity></View>
          <View style={styles.days(dayCheck[2])}><TouchableOpacity onPress={() => handleDays(2)}><Text style={styles.dayText}>T</Text></TouchableOpacity></View>
          <View style={styles.days(dayCheck[3])}><TouchableOpacity onPress={() => handleDays(3)}><Text style={styles.dayText}>W</Text></TouchableOpacity></View>
          <View style={styles.days(dayCheck[4])}><TouchableOpacity onPress={() => handleDays(4)}><Text style={styles.dayText}>T</Text></TouchableOpacity></View>
          <View style={styles.days(dayCheck[5])}><TouchableOpacity onPress={() => handleDays(5)}><Text style={styles.dayText}>F</Text></TouchableOpacity></View>
          <View style={styles.days(dayCheck[6])}><TouchableOpacity onPress={() => handleDays(6)}><Text style={styles.dayText}>S</Text></TouchableOpacity></View>
        </View> : <Text></Text>}

        <View style={styles.selectContainer}>

          <Text style={styles.selectHeading}>Doses Per Day : </Text>
          <View style={styles.selectBox}>
            <Picker
              selectedValue={doses}
              onValueChange={(value) => {
                setDoses(value)
                setTimeObj(new Array(parseInt(value)).fill({ hours: 0, minutes: 0 }))
              }}
              style={{ height: 30, width: 130, }}
            >
              <Picker.Item label='Select' value='0' />
              <Picker.Item label='1' value='1' />
              <Picker.Item label='2' value='2' />
              <Picker.Item label='3' value='3' />
              <Picker.Item label='4' value='4' />
            </Picker>
          </View>
        </View>

        <View style={styles.timeContainer}>
          <Text style={styles.timeHeading}>{timeObj.length ? 'Set Time Of Doses' : ''}</Text>
          <View style={styles.timeInputContainer}>
            {timeObj.map((item, index) => {
              return <TouchableOpacity key={index} onPress={() => getTime(index)} style={styles.inputButton}><Text style={styles.timeInputText}>{item.hours} : {item.minutes}
                {title[index] && (
                  <DateTimePicker
                    testID="0"
                    value={date}
                    mode='time'
                    is24Hour={false}
                    onChange={(event, time) => onChange(index, time)}
                  />
                )}
              </Text></TouchableOpacity>
            })}
          </View>
        </View>

        <View style={styles.startingDateContainer}>
          <TouchableOpacity style={styles.dateButton} onPress={startDate}>
          <Text style={styles.dateButtonTitle}>Starting Date : {currentDate ? currentDate : 'DD/MM/YYYY'}{
            showDate&& (<DateTimePicker
              mode='date'
              value={date}
              onChange={(event, date)=> getStartDate(date)}
            />)
          }</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.totalDaysContainer}>
            <TextInput
              style={styles.totalDaysInput}
              placeholder='Enter Total No. Of Days'
              onChangeText={(value)=>totalDaysInput(value)}
              value = {totalDays}
              keyboardType='number-pad'
            />
        </View>
     
      <View style={styles.buttonContainer}>

        <View style={styles.submitContainer}>
          <TouchableOpacity style={styles.submitButton} onPress={submitButton}>
            <Text style ={styles.submitTitle}>Add Medicine</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ResetContainer} onPress={ResetButton}>
        <TouchableOpacity style={styles.ResetButton}>
          <Text style ={styles.ResetTitle}>Reset</Text>
        </TouchableOpacity>
      </View>

     </View>

      </View>
      </ScrollView>
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
    fontSize:18,

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
  },
  timeContainer: {
    flexDirection: 'column',
    marginTop: 20,
    
    alignItems: 'flex-start',
  },
  timeHeading: {
    fontSize: 18,
    color: 'black',
  },
  timeInputContainer: {
    flexDirection: 'column',
    marginTop: 10,
    alignItems:'flex-start',
    width:'100%',
   
  },
  inputButton: {
    borderWidth: 1,
    marginTop: 8,
    borderRadius: 4,
    padding: 6,
    width:'50%',
  },
  timeInputText:{
   
  },
  startingDateContainer:{
    marginTop:20,
    alignItems:'center',
  },
  dateButton:{
    padding:10,
    borderWidth:1,
    borderRadius:5,
    width:'100%',
  },
  dateButtonTitle:{
    color:'black',
    fontSize:18,
    opacity:0.4,
  },
  totalDaysContainer:{
    marginTop:20,
  },
  totalDaysInput:{
    borderWidth:1,
    borderRadius:4,
    fontSize:18,
  },
  buttonContainer:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    marginTop:20,
    marginBottom:40,
  },
  submitContainer:{
    alignItems:'center',
  },
  submitButton:{
    borderWidth:0.4,
    padding:10,
    borderRadius:5,
  },
  submitTitle:{
    fontSize:18,
    color:'black',
  },
  ResetContainer:{
    alignItems:'center',
  },
  ResetButton:{
    borderWidth:0.4,
    padding:10,
    borderRadius:5,
  },
  ResetTitle:{
    fontSize:18,
    color:'black',
  },

});

export default Addmed;
