import {isMobileOnly, isTablet} from 'react-device-detect';

export default () => {
  let width, height;
  if (isMobileOnly) {
    height = 15;
    width = 10;
  } else if (isTablet) {
    height = 21;
    width = 18;
  } else {
    height = 18;
    width = 13;
  }
  return {
    height,
    width,
  };
};
