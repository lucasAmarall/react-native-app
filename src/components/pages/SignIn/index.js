import React from 'react';
import Input from '../../atoms/Input';
import {View} from 'react-native';
import dictionary from './dictionary';
import eventBus from '../../../services/internal/eventBus';
import {Container, Title, Description, LoginButton} from './styles';
import navigator from '../../../services/internal/navigator';
import LoaderModal from '../../molecules/LoaderModal';

const SignIn = () => {
  const login = () => {
    eventBus.$emit('openSmallModal', {noClose: true, component: LoaderModal});
    setTimeout(() => {
      eventBus.$emit('closeModal');
      navigator.navigate('Feed');
    }, 3000);
  };

  return (
    <Container>
      <View>
        <Title>{dictionary.title}</Title>
        <Description>{dictionary.description}</Description>
        <Input label={dictionary.mailLabel} textContentType={'emailAddress'} />
        <Input
          label={dictionary.passwordLabel}
          textContentType={'password'}
          secureTextEntry={true}
        />
      </View>
      <LoginButton button onPress={login}>
        {dictionary.buttonLabel}
      </LoginButton>
    </Container>
  );
};

export default SignIn;
