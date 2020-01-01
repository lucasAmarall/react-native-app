import React, {useState, useEffect} from 'react';
import {Animated, TouchableWithoutFeedback, View, Text} from 'react-native';
import window from '../../../constants/window';
import eventBus from '../../../services/internal/eventBus';
import LoginButton from '../Button';

const animationTime = 400;
const height = window.normalizeHeight(626);
const fullHeight = window.normalizeHeight(729);
const smallHeight = window.normalizeHeight(332);
const width = window.normalizeWidth(352);
const fullWidth = window.width;

const Modal = ({ }) => {
  const [isOpen, changeState] = useState(false);
  const [translateY] = useState(new Animated.Value(0));
  const [opacity] = useState(new Animated.Value(0));
  const [_modalHeight] = useState(new Animated.Value(height));
  const [_modalWidth] = useState(new Animated.Value(width));
  let busy = false;
  const openModal = () => {
    changeSize(width, height, true)
    basicOperations(true)
  };

  const openFullModal = () => {
    changeSize(fullWidth, fullHeight, true)
    basicOperations(true)
  };

  const smallModal = () => {
    changeSize(width, smallHeight, -window.vh(50) - (smallHeight/2))
    basicOperations(true)
  };
  
  const closeModal = () => {
    animation(translateY, height)
    animation(opacity, 0)
    basicOperations(false)
  };

  const changeSize = (width, height, changeTranslateY) => {
    animation(_modalWidth, width);
    animation(_modalHeight, height);
    if(typeof changeTranslateY === "boolean"){ 
      animation(translateY, -height);
      return
    };
    animation(translateY, changeTranslateY);
  };

  const basicOperations = (state) => {
    if(!state){
      setTimeout(() => {
        changeState(state);
      }, animationTime);
    } else {
      changeState(state);
    }
    animation(opacity, state ? 1 : 0)
  }

  const animation = (_animation, value) => {
    Animated.timing(
      _animation,
      {
        toValue: value,
        duration: animationTime,
      },
    ).start();
  }
  
  const triggerCall = (method, _component) => {
    if(busy) return;
    busy = true;
    method();
    setTimeout(() => {
      busy = false
    }, animationTime);
  }

  useEffect(() => {
    eventBus.$on('openModal', component => triggerCall(openModal, component))
    eventBus.$on('closeModal', component => triggerCall(closeModal, null))
    eventBus.$on('smallModal', component => triggerCall(smallModal, component))
    eventBus.$on('openFullModal', component => triggerCall(openFullModal, component))
  }, []);

  return (
    <>
      <Animated.View style={{
        height: _modalHeight,
        width: _modalWidth,
        zIndex: 1000,
        elevation: 1000,
        borderRadius: 30,
        top: '100%',
        alignSelf: "center",
        backgroundColor: 'white',
        position: "absolute",
        transform: [{ translateY: translateY }],
        justifyContent: 'center'
      }}>
      <Text>kskskks</Text>
        <LoginButton button onPress={() => eventBus.$emit('closeModal')}>closeModal</LoginButton>
        <LoginButton button onPress={() => eventBus.$emit('smallModal')}>smallModal</LoginButton>
        <LoginButton button onPress={() => eventBus.$emit('openFullModal')}>openFullModal</LoginButton>
      </Animated.View>
      {
        isOpen && (
          <TouchableWithoutFeedback
            onPress={closeModal}
            style={{ zIndex: 999 }}
          >
            <Animated.View
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                minWidth: window.width,
                minHeight: window.height,
                backgroundColor: 'rgba(0,0,0,.8)',
                zIndex: 998,
                opacity: opacity
              }}>
            </Animated.View>
          </TouchableWithoutFeedback>
        )
      }
    </>
  )
}

export default Modal;