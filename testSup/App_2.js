import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import {StatusBar} from 'expo-status-bar';

import React from 'react';
import Onboarding from './onboarding';


export default Ap = () => {
  return(
    <View style={styles.container}>
      <Onboarding/>
      <StatusBar style="auto"/>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
});
