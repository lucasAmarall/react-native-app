import {Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
  height,
  width,
  safeWidth: width - 28,
  normalizeWidth: size => Math.round((width / 375) * size),
  normalizeHeight: size => Math.round((height / 812) * size),
  vh: per => (height / 100) * per,
  vw: per => (width / 100) * per,
};
