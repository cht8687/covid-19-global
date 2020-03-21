/*
 * Created by Robert Chang 15 March 2020
 */
import React, {useState} from 'react';
import styled from 'styled-components';
import Australia from '../components/australia';
import InfoBoard from '../components/infoBoard';
import Grid from '@material-ui/core/Grid';
import {useRouter} from 'next/router';
import {down} from 'styled-breakpoints';
import 'whatwg-fetch';

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
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <Australia />
        </Grid>
        <Grid item xs={12} lg={6}>
          <InfoBoard location={location} />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Footer>COVID-19</Footer>
      </Grid>
    </>
  );
}
