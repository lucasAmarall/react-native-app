import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import themes from './constants/colors';
import {useColorScheme} from 'react-native-appearance';
import Welcome from './components/pages/Welcome';

const Container = styled.View`
  flex: 1;
`;
const macShop = () => {
  return (
    <ThemeProvider theme={themes[useColorScheme()]}>
      <Container>
        <Welcome />
      </Container>
    </ThemeProvider>
  );
};

export default macShop;
