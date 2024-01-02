// MainStack.tsx
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from 'screens/Home/HomeScreen';

const Stack = createStackNavigator();

const MainStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* Add other screens for the authenticated flow */}
    </Stack.Navigator>
  );
};

export default MainStack;
