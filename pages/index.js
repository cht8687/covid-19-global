/*
 * Created by Robert Chang 15 March 2020
 */
import React, {useState} from 'react';
import styled from 'styled-components';
import Map from '../components/map';
import InfoBoard from '../components/infoBoard';
import Grid from '@material-ui/core/Grid';
import {useRouter} from 'next/router';
import {down} from 'styled-breakpoints';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import 'whatwg-fetch';

const AppBarContainer = styled(AppBar)`
  background-color: green !important;
`;

const IconButtonContainer = styled(IconButton)`
  marginright: theme.spacing(2);
`;

const Title = styled(Typography)`
  flexgrow: 1;
`;

const Footer = styled.div`
  text-align: center;
  position: absolute;
  width: 100%;
  color: #fffccc;
  font-size: 18px;
  padding-bottom: 50px;
  ${down('tablet')} {
    margin-top: 25px;
    font-size: 13px;
  }
`;

export default function Index() {
  const router = useRouter();
  const [location, setLocation] = useState('AUSTRALIA');

  return (
    <>
      <AppBarContainer position="static">
        <Toolbar>
          <IconButtonContainer edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButtonContainer>
          <Title variant="h6">COVID-19 Live Tracker</Title>
        </Toolbar>
      </AppBarContainer>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={8}>
          <Map />
        </Grid>
        <Grid item xs={12} lg={4}>
          <InfoBoard location={location} />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Footer>COVID-19</Footer>
      </Grid>
    </>
  );
}
