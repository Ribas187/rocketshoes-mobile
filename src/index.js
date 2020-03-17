import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';
import Routes from './routes';
import store from './store';
import NavigatorService from './services/NavigatorService';

const App = () => (
  <Provider store={store}>
    <NavigationContainer ref={ref => NavigatorService.setNavigation(ref)}>
      <StatusBar backgroundColor="#191920" barStyle="light-content" />
      <Routes />
    </NavigationContainer>
  </Provider>
);

export default App;
