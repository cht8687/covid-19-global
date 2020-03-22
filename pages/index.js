/*
 * Created by Robert Chang 15 March 2020
 */
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Map from '../components/map';
import InfoBoard from '../components/infoBoard';
import Summary from '../components/summary';
import Grid from '@material-ui/core/Grid';
import {down} from 'styled-breakpoints';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import {getGlobalToday} from '../services/api';
import colours from '../styles/colours';
import {useAsync} from 'react-async';
import 'whatwg-fetch';

const AppBarContainer = styled(AppBar)`
  background-color: ${colours.darkBlue} !important;
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
  color: ${colours.dimWhite};
  font-size: 12px;
  padding-bottom: 50px;
  ${down('tablet')} {
    margin-top: 25px;
    font-size: 13px;
  }
`;

const SiteContent = styled(Grid)`
  padding-top: 66px;
`;

export default function Index() {
  const {data, error, isLoading} = useAsync({promiseFn: getGlobalToday});
  const [location, setLocation] = useState('world');
  const [total, setTotal] = useState('');
  const [timestamp, setTimestamp] = useState('');

  useEffect(() => {
    if (data) {
      const {total, timestamp} = data;
      setTotal(total);
      setTimestamp(timestamp);
    }
  }, [data]);

  return (
    <>
      <AppBarContainer position="fixed">
        <Toolbar>
          <IconButtonContainer edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButtonContainer>
          <Title variant="h6">
            COVID-19 Live Tracker <NotificationsActiveIcon />
          </Title>
        </Toolbar>
      </AppBarContainer>
      <SiteContent container spacing={1}>
        <Grid container item xs={12} lg={8}>
          <Grid item xs={12} lg={12}>
            <Summary total={total} />
          </Grid>
          <Grid item xs={12} lg={12}>
            <Map data={data} location={location} timestamp={timestamp} />
          </Grid>
        </Grid>
        <Grid item xs={12} lg={4}>
          <InfoBoard
            location={location}
            total={total}
            data={data}
            isLoading={isLoading}
          />
        </Grid>
      </SiteContent>
      <Grid item xs={12}>
        <Footer>COVID-19</Footer>
      </Grid>
    </>
  );
}
