/*
 * Created by Robert Chang 15 March 2020
 */
import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import colours from '../styles/colours';
import InfoGrid from './InfoGridGlobal';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: ${colours.deepBlue};
  justify-content: center;
  border-bottom-left-radius: 15px;
`;

export default function InfoBoard({location, data, total}) {
  return (
    <Container>
      {!data ? (
        <CircularProgress color="secondary" />
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12} lg={12}></Grid>
          <Grid item xs={12} lg={12}>
            <InfoGrid data={data} />
          </Grid>
        </Grid>
      )}
    </Container>
  );
}
