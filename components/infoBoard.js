/*
 * Created by Robert Chang 15 March 2020
 */
import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import colours from '../styles/colours';
import InfoTable from './infoTable';
import InfoBanner from './InfoBanner';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 10px;
  background-color: ${colours.deepBlue};
  border-radius: 15px;
  margin: 5px;
  justify-content: center;
`;

export default function InfoBoard({location, data, total}) {
  return (
    <Container>
      {!data ? (
        <CircularProgress color="secondary" />
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12} lg={12}>
            <InfoBanner location={location} data={data} total={total} />
          </Grid>
          <Grid item xs={12} lg={12}>
            <InfoTable data={data} />
          </Grid>
        </Grid>
      )}
    </Container>
  );
}
