import {StyleSheet} from 'react-native';
import window from '../../../constants/window';
const styles = StyleSheet.create({
  modal: {
    zIndex: 1000,
    elevation: 1000,
    top: '100%',
    alignSelf: 'center',
    position: 'absolute',
    overflow: 'hidden',
  },
  screenLocker: {
    top: 0,
    left: 0,
    zIndex: 998,
    minWidth: window.width,
    minHeight: window.height,
    backgroundColor: 'rgba(0,0,0,.8)',
    position: 'absolute',
  },
});

export default styles;
