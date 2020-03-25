import React, {useState, useEffect} from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import CssBaseline from '@material-ui/core/CssBaseline';
import styled from 'styled-components';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Drawer from '@material-ui/core/Drawer';
import colours from '../styles/colours';
import AppBar from '@material-ui/core/AppBar';
import {down} from 'styled-breakpoints';
import KoFi from '../components/kofi/kofi';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MenuItems from './menu.js';
import {DrawerConsumer} from '../context/DrawerProvider';

const drawerWidth = 170;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));

const AppContainer = styled.div`
  display: flex;
`;

const Title = styled(Typography)`
  flexgrow: 1;
  ${down('tablet')} {
    font-size: 13px !important;
  }
`;

const AppBarContainer = styled(AppBar)`
  background-color: ${colours.darkBlue} !important;
  display: flex;
  flex-direction: row !important;
  justify-content: space-between !important;
  align-items: center !important;
`;

export default () => {
  const classes = useStyles();

  return (
    <DrawerConsumer>
      {({open, setOpen}) => (
        <AppContainer>
          <AppBarContainer
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={() => {
                  setOpen(true);
                }}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}>
                <MenuIcon />
              </IconButton>
              <Title variant="h6">COVID19 Live Tracker</Title>
            </Toolbar>
            <KoFi color="#26bbe0" id="X8X31J5HH" label="Buy Me a Coffee" />
          </AppBarContainer>

          <Drawer
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            variant="persistent"
            anchor="left"
            classes={{
              paper: clsx(
                classes.drawerPaper,
                !open && classes.drawerPaperClose,
              ),
            }}
            open={open}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}>
            <div className={classes.toolbarIcon}>
              <IconButton
                onClick={() => {
                  setOpen(false);
                }}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List>
              <MenuItems />
            </List>
            <Divider />
          </Drawer>
        </AppContainer>
      )}
    </DrawerConsumer>
  );
};
