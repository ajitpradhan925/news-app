// AppNavigator.tsx
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {useSelector} from 'react-redux';
// import {RootState} from '../state/store/store';
import AuthStack from './AuthStack';
import MainStack from './MainStack';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  //   const isAuthenticated = useSelector(
  //     (state: RootState) => state.auth.isAuthenticated,
  //   );

  const isAuthenticated = true;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isAuthenticated ? (
          <Stack.Screen name="MainStack" component={MainStack} />
        ) : (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
