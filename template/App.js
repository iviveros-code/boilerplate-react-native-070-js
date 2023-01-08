import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from '@navigation';

import {Provider as ReduxProvider} from 'react-redux';

import store from './src/redux/store';
import {theme} from '@theme';

import {Provider as PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </PaperProvider>
    </ReduxProvider>
  );
};

export default App;
