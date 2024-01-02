// App.tsx
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/state/store/store';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src//navigation/AppNavigator';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
