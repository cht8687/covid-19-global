import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import {makeStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InfoIcon from '@material-ui/icons/Info';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import {useRouter} from 'next/router';

const useStyles = makeStyles(theme => ({
  listItem: {},
  active: {
    color: 'blue',
  },
  listIcon: {
    minWidth: '29px'
  },
}));

export default function MenuItems() {
  const classes = useStyles();
  const router = useRouter();
  return (
    <React.Fragment>
      <Link href="/">
        <ListItem
          button
          className={clsx(classes.listItem, {
            [classes.active]: router.pathname === '/',
          })}>
          <ListItemIcon className={classes.listIcon}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </Link>
      <Link href="/about-us">
        <ListItem
          button
          className={clsx(classes.listItem, {
            [classes.active]: router.pathname === '/about-us',
          })}>
          <ListItemIcon className={classes.listIcon}>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="About us" />
        </ListItem>
      </Link>
      <Link href="/about-us">
        <ListItem
          button>
         <ListItemIcon className={classes.listIcon}>
            <EqualizerIcon />
          </ListItemIcon>
          <ListItemText primary="Charts(comming)" />
        </ListItem>
      </Link>
    </React.Fragment>
  );
}
