import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './loginPage';
import SignUp from './signUpPage';
import Onboarding from './onboarding';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen name="Onboarding" options={{ headerShown: false }} component={Onboarding} />
        <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
        <Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
