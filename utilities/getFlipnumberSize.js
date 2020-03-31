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
    height = 26;
    width = 26;
  }
  return {
    height,
    width,
  };
};
