// AuthStack.tsx
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen, RegisterScreen} from 'screens/Auth';
// import AuthScreen from '../screens/Auth/AuthScreen';

const Stack = createStackNavigator();

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="Auth" component={AuthScreen} /> */}
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      {/* Add other screens for the unauthenticated flow */}
    </Stack.Navigator>
  );
};

export default AuthStack;
