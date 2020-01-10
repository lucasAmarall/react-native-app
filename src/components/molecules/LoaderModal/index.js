import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import {Container, TitleContainer} from './styles';

const LoaderModal = () => {
  return (
    <Container>
      <TitleContainer>Just a second</TitleContainer>
      <View>
        <ActivityIndicator size="large" />
      </View>
    </Container>
  );
};

export default LoaderModal;