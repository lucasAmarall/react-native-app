import React, {useState} from 'react';
import styled from 'styled-components';
import {Animated, StyleSheet, Image} from 'react-native';
const borderColor = 'rgba(0,0,0,.4)';
const InputHeight = 50;
import searchIcon from '../../../assets/images/icon/searchIcon.png';

const InputContainer = styled.View`
  width: 100%;
  border-width: 1;
  border-radius: 4;
  margin-top: 14;
  background-color: #fff;
  border-color: ${props => (props.search ? 'transparent' : borderColor)};
  border-bottom-color: ${borderColor};
  height: ${InputHeight};
  padding-left: ${props => (props.search ? 34 : 0)};
`;

const TextInput = styled.TextInput`
  width: 100%;
  height: 100%;
  font-size: 18px;
  line-height: 24px;
  margin-left: 10;
  color: ${borderColor};
`;

const SearchIcon = styled.Image`
  width: 22;
  height: 22;
  top: 14;
  left: 5;
  z-index: 2000;
  position: absolute;
`;

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    left: 0,
    color: borderColor,
    backgroundColor: '#fff',
    position: 'absolute',
    top: Math.round(InputHeight / 4),
  },
});

const Input = props => {
  const {onChangeText, label, search, placeHolder} = props;
  const [translateY] = useState(new Animated.Value(0));

  const refreshLbael = value => {
    Animated.timing(translateY, {
      toValue: value ? -22 : 0,
      duration: 100,
    }).start();
  };
  return (
    <InputContainer search={search}>
      {!search ? (
        <Animated.Text
          style={[styles.label, {transform: [{translateY}, {translateX: 10}]}]}>
          {label}
        </Animated.Text>
      ) : (
        <SearchIcon resizeMode={'contain'} source={searchIcon} />
      )}
      <TextInput
        placeHolder={placeHolder}
        onChangeText={value => {
          refreshLbael(value);
          onChangeText && onChangeText(value);
        }}
        {...props}
      />
    </InputContainer>
  );
};

export default Input;
