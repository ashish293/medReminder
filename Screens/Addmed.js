import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';

const Addmed = () => {
  let date = new Date();
  console.log(date);
  const [addMedicine, setAddMedicine] = useState({
    name: '',
    perDay: 0,
    noOfDose: 0,
    time: [],
    startFrom: '',
  });
  const handleInputChange = (key, value, type) => {
    if (type && type === 'integer') {
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
    setAddMedicine({...addMedicine, [key]: value});
  };
  // useEffect(() => {
  //   console.log(addMedicine);
  // }, [addMedicine]);
  return (
    <View>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Medicine name"
          value={addMedicine.name}
          name="name"
          onChangeText={value => handleInputChange('name', value)}
        />
        <TextInput
          style={styles.textInput}
          value={addMedicine.noOfDose}
          keyboardType="number-pad"
          type="number"
          onChangeText={value =>
            handleInputChange('noOfDose', value, 'integer')
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
  },
});

export default Addmed;
