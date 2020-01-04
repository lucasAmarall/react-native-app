import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import window from '../../../constants/window';
import Block from '../../atoms/Block';
import Input from '../../atoms/Input';
import styled from 'styled-components';
const menuIcon = require('../../../assets/images/icon/menuIcon.png');
import mock from './mock';
export const MenuIcon = styled.Image`
  width: ${window.normalizeWidth(40)};
  height: ${window.normalizeHeight(40)};
  margin-top: 17;
`;

const BlueTitle = styled.Text`
  font-weight: 700;
  font-size: 26px;
  color: ${props => props.theme.font.primaryTitle};
  letter-spacing: -0.07px;
`;

const Title = styled.Text`
  font-size: 22px;
  color: #525252;
`;

const WelcomeBlock = styled(Block)`
  margin-top: ${window.normalizeHeight(16)};
`;

const Near = () => (
  <View style={{marginTop: 68}}>
    <Title>Top weeds near you</Title>
    <Block shortRadius>
      <FlatList
        horizontal
        data={mock.near}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          return (
            <View
              style={{
                width: 150,
                height: 175,
                marginRight: 10,
                marginTop: 8,
              }}>
              <Block shortRadius>
                <View style={{backgroundColor: '#f5f6f3', flex: 1}}>
                  <Image source={{uri: item.img}} style={{flex: 1}} />
                </View>
              </Block>
            </View>
          );
        }}
      />
    </Block>
  </View>
)
const Picture = ({item}) => <Image source={{uri: item.img}} style={{flex:1}} resizeMode="stretch" />;

const types = {
  unique_0: item => <Block shortRadius><Picture item={item}/></Block>,
  half_0: item => <Block shortRadius style={{width: ((window.safeWidth / 2) - 5)}}><Picture item={item}/></Block>,
  half_1: item => <Block shortRadius style={{alignSelf: 'flex-end', width: ((window.safeWidth / 2) - 5)}}><Picture item={item}/></Block>,
  toRight_0: item => <Block shortRadius debug style={{width: window.safeWidth - 112 - 10, height: 245, position: 'absolute', left: 0, top: 0}}><Picture item={item}/></Block>,
  toRight_1: item => <Block shortRadius debug style={{width: 112, height: 120, position: 'absolute', right: 0, top: -245}}><Picture item={item}/></Block>,
  toRight_2: item => <Block shortRadius debug style={{width: 112, height: 120, position: 'absolute', right: 0, top: -365}}><Picture item={item}/></Block>,
}

const Row = ({item, type, position}) => {
  return(
    <View style={{backgroundColor: '#f5f6f3', flex: 1,width: '100%', minHeight: 245}}>
      {types[`${type}_${position}`](item)}
    </View>
  );
}

const FriendsWeed = () => (
  <View style={{marginTop: 68}}>
    <Title>Your friends weeds</Title>
    <Block shortRadius>
      <FlatList
        data={mock.weedFriends}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          const type = item.type;
          return (
            <View
              style={{
                height: 245,
                marginTop: 8,
              }}>
              <Block shortRadius row={type === "half"}>
                {item.items.map((item, index) =>  <Row type={type} item={item} position={index}/>)}
              </Block>
            </View>
          );
        }}
      />
    </Block>
  </View>
);


const Feed = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Block safeArea>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <MenuIcon source={menuIcon} />
            <WelcomeBlock noFlex>
              <BlueTitle>Hello</BlueTitle>
              <Title>Lucas Amaral</Title>
            </WelcomeBlock>
            <Input label="search" placeholder="Search" search />
          </View>
          <Near />
          <FriendsWeed />
        </ScrollView>
      </Block>
    </SafeAreaView>
  );
};

Feed.navigationOptions = {
  header: null,
};
export default Feed;
