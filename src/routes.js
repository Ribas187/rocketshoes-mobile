import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/Header';

import Home from './pages/Home';
import Cart from './pages/Cart';

import colors from './styles/colors';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        header: props => <Header {...props} />,
        cardStyle: {
          backgroundColor: colors.dark,
        },
      })}
    >
      <Stack.Screen component={Home} name="Home" />
      <Stack.Screen component={Cart} name="Cart" />
    </Stack.Navigator>
  );
};

export default Routes;
