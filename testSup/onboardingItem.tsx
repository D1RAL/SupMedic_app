import React from 'react';
import {View, Text, StyleSheet, Image, useWindowDimensions, ImageBackground} from 'react-native';
import backgroundImage from './assets/Vector (7).png';

const OnboardingItem = ({item}) => {
   const {width} = useWindowDimensions();

   return(
    <View style={[styles.container, {width}]}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.overlay}>
      
        </View>
      </ImageBackground>
      
  
   <View style={{flex:0.3}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  backgroundImage: {
    width: '160%',
    height: '80%',
    marginTop: -350,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  vectorImage: {
    width: 90,
    height: 80,
    marginTop: 2700,
    right: 400,
    marginRight: 2000,
    marginBottom: 1600,
  },
  vectorImageBis: {
    
    width: '10%',
    height: '100%', // Ajustez la hauteur selon vos besoins
    
  },
  vectorImageBisBis:{
    
    top: -10,
    left:315,
    width: 150,
    height: 300, 
  },
  DoctorImage:{
    position: 'absolute',
    top: 270,
    left:51,
    width: 320,
    height: 300, 
  },
  title:{
    fontWeight:'800',
    fontSize:28,
    textTransform:'uppercase',
    marginTop:40,
    color:'#493d8a',
    textAlign:'center',
    

  },
  description:{
    marginTop:50,
    fontSize:19,
    fontWeight:'300',
    color:'#62656b',
    textAlign:'center',
    paddingHorizontal:64,
  },
});

export default OnboardingItem

