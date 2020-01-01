import {StyleSheet} from 'react-native';
import window from '../../../constants/window';
const styles = StyleSheet.create({
  modal: {
    zIndex: 1000,
    elevation: 1000,
    borderRadius: 30,
    top: '100%',
    alignSelf: 'center',
    backgroundColor: 'white',
    position: 'absolute',
    justifyContent: 'center',
  },
  screenLocker: {
    position: 'absolute',
    top: 0,
    left: 0,
    minWidth: window.width,
    minHeight: window.height,
    backgroundColor: 'rgba(0,0,0,.8)',
    zIndex: 998,
  },
});

export default styles;
