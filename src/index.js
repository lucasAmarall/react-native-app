import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import styled, {ThemeProvider} from 'styled-components';
import {useColorScheme} from 'react-native-appearance';
import Welcome from './components/pages/Welcome';
import themes from './constants/colors';
import Modal from './components/atoms/Modal';

const Container = styled.View`
  flex: 1;
`;

const MainNavigator = createStackNavigator({
  Welcome: {screen: Welcome},
});

const App = createAppContainer(MainNavigator);

const MacShop = () => {
  return (
    <ThemeProvider theme={themes[useColorScheme()]}>
      <Container>
        <App />
        <Modal />
      </Container>
    </ThemeProvider>
  );
};

export default MacShop;
