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
        fontSize: 18,
        padding: '5px 10px',
        width: 'calc(100% - 24px)',
        '& svg': {
          display: 'none',
        },
      },
    },
    menuItem: {
      selectedTextColor: colours.dimWhite,
    },
  },
});

export default theme;
