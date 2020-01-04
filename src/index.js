import React from 'react';
import navigator from './services/internal/navigator';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import styled, {ThemeProvider} from 'styled-components';
import {useColorScheme} from 'react-native-appearance';
import Welcome from './components/pages/Welcome';
import themes from './constants/colors';
import Modal from './components/atoms/Modal';
import Feed from './components/pages/Feed';
console.disableYellowBox = true;
const Container = styled.View`
  flex: 1;
`;

const WelcomeStack = createStackNavigator({
  Welcome: {screen: Welcome},
});

const MainStack = createStackNavigator({
  Feed: {screen: Feed},
});

const App = createAppContainer(
  createSwitchNavigator({
    WelcomeStack,
    MainStack,
  }),
);

const MacShop = () => {
  return (
    <ThemeProvider theme={themes[useColorScheme()]}>
      <Container>
        <App ref={ref => navigator.setTopLevelNavigator(ref)} />
        <Modal />
      </Container>
    </ThemeProvider>
  );
};

export default MacShop;
