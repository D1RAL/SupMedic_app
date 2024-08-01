import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './signUpPage';
import Onboarding from './onboarding';
import HomeTest from './HomeTest'
import Login from './loginPage';
import HomeScreen from './HomeScreen';
import useAuth from './hooks/useAuth';

const Stack = createStackNavigator();

export default function App() {
  const {user} = useAuth();
  if(user){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Onboarding">
          <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  } else{
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Onboarding">
          <Stack.Screen name="Onboarding" options={{ headerShown: false }} component={Onboarding} />
          <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
          <Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUp} />
          <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
          <Stack.Screen name="HomeTest" options={{ headerShown: false }} component={HomeTest} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
}
