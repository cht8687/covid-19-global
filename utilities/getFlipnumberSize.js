import {isMobileOnly, isTablet} from 'react-device-detect';

export default () => {
  let width, height;
  if (isMobileOnly) {
    height = 15;
    width = 10;
  } else if (isTablet) {
    height = 18;
    width = 16;
  } else {
    height = 20;
    width = 20;
  }
  return {
    height,
    width,
  };
};
