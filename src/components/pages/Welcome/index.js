import React, { useState } from 'react';
import { Image} from 'react-native';
import Block from '../../atoms/Block';
import {
  Slider,
  Slide,
  LoginButton,
  MenuIcon,
  SliderIndicator,
  NewAccount,
  Container,
  Title
} from './styles';
import dictionry from './dictinary';
import eventBus from  '../../../services/internal/eventBus';
const firstSlide = require('../../../assets/images/welComeSlides/firstSlide2x.png');
const menuIcon = require('../../../assets/images/icon/menuIcon.png');

const slides = [
  {
    image: firstSlide,
    id: 1,
  },
  {
    image: firstSlide,
    id: 2,
  },
  {
    image: firstSlide,
    id: 3,
  },
  {
    image: firstSlide,
    id: 4,
  },
  {
    image: firstSlide,
    id: 5,
  },
];

const Form = item => {
  const openModal = () => eventBus.$emit('openModal')
  return (
    <Slide
      normalRadius
      isFirst={item.id === 1}
      isLast={item.id === slides.length}>
      <Block normalRadius>
        <Title>Welcome</Title>
        <LoginButton onPress={openModal}>{dictionry.buttonLabel}</LoginButton>
        <NewAccount>{dictionry.newAccount}</NewAccount>
      </Block>
    </Slide>
  )
}

const SlideItem = item => {
  return (
    <Slide
      normalRadius
      isFirst={item.id === 1}
      isLast={item.id === slides.length}>
      <Image resizeMode="cover" source={item.image} />
    </Slide>
  )
}

const Welcome = () => {
  const [actualSlide, setSlide] = useState(1);

  const setActualSlide = event => {
    const xSlidePosition = event.nativeEvent.contentOffset.x;
    const contentSize = event.nativeEvent.contentSize.width;
    const totalSlides = slides.length;
    let newSlide = Math.round(contentSize / xSlidePosition);
    if (newSlide <= 0) {
      newSlide = 1;
    }
    if (newSlide > totalSlides) {
      newSlide = totalSlides;
    }
    setSlide(newSlide);
  };

  return (
    <Container>
      <Block safeArea>
        <MenuIcon source={menuIcon} />
        <Slider
          horizontal
          inverted
          bounces={false}
          onScroll={setActualSlide}
          data={slides}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            (item.id === 1) ? Form(item) : SlideItem(item)
          )}
          keyExtractor={item => item.id.toString()}
        />
        <SliderIndicator>
          {actualSlide}
          {dictionry.sliderIndicator}
          {slides.length}
        </SliderIndicator>
      </Block>
    </Container>
  );
}
Welcome.navigationOptions = {
  title: 'Hello world',
  header: null
};

export default Welcome;