import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import color from '../assets/constants/color';

const Home = () => {



  return (
    <View style={styles.mainContainer}>
     <View style={styles.headerContainer(color)}> 
     <Image style={styles.icon} source={require('../assets/images/patient.png')}/><Text style={styles.headerText}>Today's Schedule</Text>
     </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer:{
  },
  headerContainer:(color)=>({
    flexDirection:'row',
    backgroundColor:color.primary,
    alignItems:'center',
  }),
  icon:{
    height:40,
    width:40,
    margin:5,
    marginLeft:10,
  },
  headerText:{
     marginLeft:20,
     fontSize:25,
     color:'black',
  },
});


export default Home