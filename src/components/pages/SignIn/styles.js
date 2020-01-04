import window from '../../../constants/window';
import Button from '../../atoms/Button';
import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  height: 100%;
  justify-content: space-between;
  padding: ${window.safeAreaSize}px;
`;

export const Title = styled.Text`
  font-size: 26px;
  letter-spacing: -0.07px;
  color: ${props => props.theme.font.primaryTitle};
  text-align: center;
  margin-top: ${window.normalizeHeight(36)}px;
  font-weight: 600;
`;

export const Description = styled.Text`
  font-size: 14px;
  color: ${props => props.theme.font.primaryTitle};
  letter-spacing: -0.07px;
  text-align: center;
  margin-top: ${window.normalizeHeight(8)}px;
`;

export const LoginButton = styled(Button)`
  margin-bottom: ${window.normalizeHeight(20)}px;
`;
