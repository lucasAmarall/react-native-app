import styled from 'styled-components';

export const Link = styled.Text`
  /* // font-family: Roboto-Regular; */
  font-size: 14px;
  color: ${props => props.theme.font.primary};
  text-align: center;
`;

export const Label = styled.Text`
  /* font-family: Roboto-Regular; */
  font-size: 24px;
  color: ${props => props.theme.font.secundary};
  text-align: center;
`;

export const PrimaryButton = styled.View`
  border-radius: 10px;
  padding: 11px;
  justify-content: center;
  background-color: ${props => props.theme.background.primary};
  ${props =>
    props.shadow && 'box-shadow: 3px 4px 0px ' + props.theme.shadow.primary}
`;
