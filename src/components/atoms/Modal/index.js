import React, {useState, useEffect} from 'react';
import {Animated, TouchableWithoutFeedback} from 'react-native';
import window from '../../../constants/window';
import eventBus from '../../../services/internal/eventBus';
import styles from './styles';
import Block from '../../atoms/Block';
const animationTime = 400;
const height = window.normalizeHeight(626);
const fullHeight = window.normalizeHeight(729);
const smallHeight = window.normalizeHeight(332);
const width = window.normalizeWidth(352);
const fullWidth = window.width;

const Modal = () => {
  const [isOpen, changeState] = useState(false);
  const [noClose, changeNoClose] = useState(() => null);
  const [translateY] = useState(new Animated.Value(0));
  const [opacity] = useState(new Animated.Value(0));
  const [_modalHeight] = useState(new Animated.Value(height));
  const [_modalWidth] = useState(new Animated.Value(width));
  const [Child, changeChild] = useState(() => null);

  let busy = false;
  const openModal = () => {
    changeSize(width, height, true);
    basicOperations(true);
  };

  const openFullModal = () => {
    changeSize(fullWidth, fullHeight, -fullHeight);
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
        changeChild(() => null);
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

  const triggerCall = (method, props) => {
    if (busy) {
      return;
    }

    let _component = () => null;
    if (!props) {
      changeNoClose(false);
      changeChild(() => _component);
      method();
      return;
    }
    props.noClose ? (_component = props.component) : (_component = props);
    changeNoClose(props.noClose);
    changeChild(() => _component);
    busy = !busy;
    method();
    setTimeout(() => {
      busy = !busy;
    }, animationTime);
  };

  useEffect(() => {
    eventBus.$on('openModal', props => triggerCall(openModal, props));
    eventBus.$on('closeModal', props => triggerCall(closeModal, props));
    eventBus.$on('openSmallModal', props => triggerCall(smallModal, props));
    eventBus.$on('openFullModal', props => triggerCall(openFullModal, props));
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
        <Block normalRadius>{Child && <Child />}</Block>
      </Animated.View>
      {isOpen && (
        <TouchableWithoutFeedback onPress={() => !noClose && closeModal()}>
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
