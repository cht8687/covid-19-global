import {createMuiTheme} from '@material-ui/core/styles';
import colours from '../styles/colours';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    background: {
      default: '#fff',
    },
  },
  overrides: {
    MuiInput: {
      root: {
        color: colours.dimWhite,
        backgroundColor: colours.primaryBlue,
        borderRadius: 0,
        fontSize: 16,
        width: 'calc(100% - 24px)',
        textAlign: 'center',
      },
    },
    menuItem: {
      selectedTextColor: colours.dimWhite,
    },
    MuiSelect: {
      icon: {
        color: colours.dimWhite,
      },
      selectMenu: {
        height: '49px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      },
    },
  },
});

export default theme;
