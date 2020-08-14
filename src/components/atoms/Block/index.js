import styled from 'styled-components';
import React from 'react';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';
const Container = styled.View`
  ${props => !props.noFlex && 'flex: 1'};
  background: ${props => (props.debug ? 'yellow' : 'white')};
  padding-left: ${props => (props.safeArea ? '10px' : '0')};
  padding-right: ${props => (props.safeArea ? '10px' : '0')};
  border-radius: ${props => {
    if (props.normalRadius) {
      return '30px';
    }
    if (props.shortRadius) {
      return '15px';
    }
    return '0px';
  }};
  flex-direction: ${props => (props.row ? 'row' : 'column')};
  overflow: hidden;
`;

export default props => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <Container {...props} />
  </TouchableWithoutFeedback>
);
