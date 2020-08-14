import styled from 'styled-components';
import window from '../../../constants/window';
import Block from '../../atoms/Block';
import Button from '../../atoms/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Slider = styled.FlatList`
  margin: 42px 0 3px;
  margin-right: -10px;
  width: ${window.width};
  align-self: flex-end;
  min-height: ${window.vh(60)};
`;

export const Slide = styled(Block)`
  margin-left: ${props => (props.isFirst ? 10 : 8)};
  margin-right: ${props => (props.isLast ? 10 : 8)};
  max-width: ${window.vw(75)};
  min-width: ${window.vw(75)};
`;

export const LoginButton = styled(Button).attrs({
  button: true,
  shadow: true,
})`
  margin: 0 42px 16px 20px;
`;

export const MenuIcon = styled.Image`
  width: ${window.normalizeWidth(40)};
  height: ${window.normalizeHeight(40)};
  margin-top: 17;
`;

export const SliderIndicator = styled(Button).attrs({
  link: true,
})`
  align-self: flex-end;
  margin-bottom: 39;
  opacity: 0.5;
`;

export const NewAccount = styled(Button).attrs({
  link: true,
})`
  margin-bottom: 377;
`;

export const Title = styled.Text`
  font-size: 32;
  margin-bottom: 50;
  font-weight: 800;
  margin-top: 50%;
  align-self: center;
`;
