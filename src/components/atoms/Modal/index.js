import React, {useState, useEffect} from 'react';
import {Animated, TouchableWithoutFeedback, Text} from 'react-native';
import window from '../../../constants/window';
import eventBus from '../../../services/internal/eventBus';
import LoginButton from '../Button';
import styles from './styles';

const animationTime = 400;
const height = window.normalizeHeight(626);
const fullHeight = window.normalizeHeight(729);
const smallHeight = window.normalizeHeight(332);
const width = window.normalizeWidth(352);
const fullWidth = window.width;

const Modal = () => {
  const [isOpen, changeState] = useState(false);
  const [translateY] = useState(new Animated.Value(0));
  const [opacity] = useState(new Animated.Value(0));
  const [_modalHeight] = useState(new Animated.Value(height));
  const [_modalWidth] = useState(new Animated.Value(width));
  const [Child, ChangeChild] = useState(() => null);

  let busy = false;
  const openModal = () => {
    changeSize(width, height, true);
    basicOperations(true);
  };

  const openFullModal = () => {
    changeSize(fullWidth, fullHeight, true);
    basicOperations(true);
  };

  const smallModal = () => {
    changeSize(width, smallHeight, -window.vh(50) - smallHeight / 2);
    basicOperations(true);
  };

  const closeModal = () => {
    animation(translateY, height);
    animation(opacity, 0);
    basicOperations(false);
  };

  const changeSize = (newWidth, newHeight, changeTranslateY) => {
    animation(_modalWidth, newWidth);
    animation(_modalHeight, newHeight);
    if (typeof changeTranslateY === 'boolean') {
      animation(translateY, -newHeight);
      return;
    }
    animation(translateY, changeTranslateY);
  };

  const basicOperations = state => {
    if (!state) {
      setTimeout(() => {
        changeState(state);
      }, animationTime);
    } else {
      changeState(state);
    }
    animation(opacity, state ? 1 : 0);
  };

  const animation = (_animation, value) => {
    Animated.timing(_animation, {
      toValue: value,
      duration: animationTime,
    }).start();
  };

  const triggerCall = (method, _component) => {
    if (busy) {
      return;
    }
    if(!_component) {
      console.warn('No component to render')
      ChangeChild(() => null)
    } else {
      ChangeChild(() => _component)
    }
    busy = true;
    method();
    setTimeout(() => {
      busy = false;
    }, animationTime);
  };

  useEffect(() => {
    eventBus.$on('openModal', component => triggerCall(openModal, component));
    eventBus.$on('closeModal', () => triggerCall(closeModal));
    eventBus.$on('openSmallModal', component => triggerCall(smallModal, component));
    eventBus.$on('openFullModal', component =>
      triggerCall(openFullModal, component),
    );
  });

  return (
    <>
      <Animated.View
        style={[
          {
            transform: [{translateY: translateY}],
            height: _modalHeight,
            width: _modalWidth,
          },
          styles.modal,
        ]}>
        { Child && <Child />}
      </Animated.View>
      {isOpen && (
        <TouchableWithoutFeedback onPress={closeModal}>
          <Animated.View
            style={[
              {
                opacity: opacity,
              },
              styles.screenLocker,
            ]}
          />
        </TouchableWithoutFeedback>
      )}
    </>
  );
};

export default Modal;
