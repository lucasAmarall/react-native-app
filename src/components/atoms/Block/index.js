import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  ${props => (props.debug ? '  background: yellow' : null)};
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

export default Container;
