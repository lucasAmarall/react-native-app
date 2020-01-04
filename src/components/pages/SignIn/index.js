import React, {useEffect} from 'react';
import Input from '../../atoms/Input';
import {View, ActivityIndicator} from 'react-native';
import dictionary from './dictionary';
import eventBus from '../../../services/internal/eventBus';
import {Container, Title, Description, LoginButton} from './styles';
import navigator from '../../../services/internal/navigator';
import Validator, {validate} from '../../../constants/validations';
export default function SignIn() {
  const login = () => {
    const Loader = () => {
      useEffect(() => {
        setTimeout(() => {
          eventBus.$emit('closeModal');
          navigator.navigate('Feed');
        }, 1000);
      }, []);
      return (
        <View style={{flex: 1}}>
          <View style={{marginTop: 52, marginBottom: 42}}>
            <Title>Just a second</Title>
          </View>
          <View>
            <ActivityIndicator size="large" />
          </View>
        </View>
      );
    };
    eventBus.$emit('openSmallModal', {noClose: true, component: Loader});
  };

  return (
    <Container>
      <View>
        <Title>{dictionary.title}</Title>
        <Description>{dictionary.description}</Description>
        <Input label={dictionary.mailLabel} textContentType={'emailAddress'} />
        <Input
          onBlur={() => {
            console.log('Validator');
            console.log(validate('email', 'dd'));
          }}
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
}
