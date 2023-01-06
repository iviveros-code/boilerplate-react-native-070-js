import React, {useState, useRef, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from '@navigation';

import {Provider as ReduxProvider} from 'react-redux';

import store from './src/redux/store';
import {theme} from '@theme';

import {WithSplashScreen} from '@components/Splash';

import {Provider as PaperProvider} from 'react-native-paper';

const App = () => {
  const storeSplash = useRef(undefined);
  const queryClient = useRef(undefined);

  const [isAppReady, setIsAppReady] = useState(false);

  const initializeApp = async () => {
    setTimeout(() => {
      setIsAppReady(true);
    }, 2000);
  };

  useEffect(() => {
    initializeApp();
  }, []);

  return (
    <WithSplashScreen isAppReady={isAppReady}>
      <ReduxProvider store={store}>
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </PaperProvider>
      </ReduxProvider>
    </WithSplashScreen>
  );
};

export default App;
